<template>
  <div class="row">
    <q-input v-model="filter" label="Filter" dense outlined debounce="100" />
    <q-input v-model="artist" label="Artist" dense outlined debounce="100" />
    <q-input v-model="song" label="Song" dense outlined debounce="100" />
  </div>
  <ServerPresets :model-value="presets"></ServerPresets>
</template>

<script lang="ts" setup async>
import { presetApi } from 'src/api/clients';
import { onMounted, ref, watch } from 'vue';
import { parsePresets, ServerPreset } from 'stores/preset';
import ServerPresets from 'components/list/ServerPresets.vue';

const filter = ref<string>();
const artist = ref<string>();
const song = ref<string>();
const presets = ref<ServerPreset[]>([]);

async function updateFilter() {
  const presetsFromServer = await presetApi.findByFilter(
    artist.value,
    filter.value,
    song.value
  );
  presets.value = parsePresets(presetsFromServer);
}

watch([filter, artist, song], () => {
  updateFilter();
});

onMounted(updateFilter);
</script>
