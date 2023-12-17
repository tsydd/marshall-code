<template>
  <div class="row">
    <q-input v-model="filter" label="Filter" dense outlined debounce="300" />
    <q-input v-model="artist" label="Artist" dense outlined debounce="300" />
    <q-input v-model="song" label="Song" dense outlined debounce="300" />
  </div>
  <ServerPresets :model-value="presets"></ServerPresets>
</template>

<script lang="ts" setup async>
import { onMounted, ref, watch } from 'vue';
import { MarshallCodeToolsPreset, MyMarshallComPreset } from 'stores/preset';
import ServerPresets from 'components/list/ServerPresets.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { chain } from 'lodash';

const filter = ref<string>();
const artist = ref<string>();
const song = ref<string>();
const presets = ref<Array<MyMarshallComPreset | MarshallCodeToolsPreset>>([]);

const store = useMarshallCodeStore();

async function updateFilter() {
  presets.value = chain(
    [] as Array<MyMarshallComPreset | MarshallCodeToolsPreset>
  )
    .concat(store.myMarshallCodePresets)
    .concat(store.marshallCodeToolsPresets)
    .filter((item) => {
      const filterValue = filter.value?.toLowerCase();
      return (
        !filterValue ||
        (item.type === 'MARSHALL_CODE_TOOLS' &&
          (!!item.song?.toLowerCase().includes(filterValue) ||
            !!item.artist?.toLowerCase().includes(filterValue))) ||
        (item.type === 'MY_MARSHALL_COM' &&
          (!!item.song?.toLowerCase().includes(filterValue) ||
            item.name.toLowerCase().includes(filterValue) ||
            !!item.artist?.toLowerCase().includes(filterValue)))
      );
    })
    .filter((item) => {
      const artistValue = artist.value?.toLowerCase();
      return !artistValue || !!item.artist?.toLowerCase().includes(artistValue);
    })
    .filter((item) => {
      const songValue = song.value?.toLowerCase();
      return !songValue || !!item.song?.toLowerCase().includes(songValue);
    })
    .orderBy(['createdAt'])
    .value();
}

watch([filter, artist, song], () => {
  updateFilter();
});

onMounted(updateFilter);
</script>
