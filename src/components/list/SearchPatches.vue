<template>
  <div class="row">
    <q-input v-model="filter" label="Filter" dense outlined debounce="100" />
    <q-input v-model="artist" label="Artist" dense outlined debounce="100" />
    <q-input v-model="song" label="Song" dense outlined debounce="100" />
  </div>
  <q-list bordered separator>
    <q-item
      v-for="preset in presets"
      :key="preset.id"
      clickable
      active-class="bg-blue-grey-2"
      @click="() => store.modifyPreset(preset.parsedPatch)"
    >
      <q-item-section avatar>
        <q-item-label>#{{ preset.id }}</q-item-label>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>
          {{ preset.name }}
        </q-item-label>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>
          {{ preset.artist }}
        </q-item-label>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>
          {{ preset.song }}
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <PresetDetailsCompact :model-value="preset.parsedPatch" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup async>
import { presetApi } from 'src/api/clients';
import { onMounted, ref, watch } from 'vue';
import { PresetCompact } from 'src/api';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';
import { Preset } from 'marshall-code-api';
import { presetFromArray } from 'marshall-code-api/lib/converters';
import { useMarshallCodeStore } from 'stores/marshallcode';

interface ExtendedPresetListItem extends PresetCompact {
  parsedPatch: Preset;
}

const store = useMarshallCodeStore();

const filter = ref<string>();
const artist = ref<string>();
const song = ref<string>();
const presets = ref<ExtendedPresetListItem[]>([]);

async function updateFilter() {
  const presetsFromServer = await presetApi.findByFilter(
    artist.value,
    filter.value,
    song.value
  );
  presets.value = presetsFromServer.map((preset) => {
    const parsedPreset = presetFromArray(new Uint8Array(preset.patch));
    return Object.assign(
      { parsedPatch: parsedPreset },
      preset
    ) as ExtendedPresetListItem;
  });
}

watch([filter, artist, song], () => {
  updateFilter();
});

onMounted(updateFilter);
</script>
