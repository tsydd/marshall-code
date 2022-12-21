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
      :active="currentPresetId === preset.id"
      clickable
      active-class="bg-blue-grey-2"
      @click="() => store.switchToServerPreset(preset)"
    >
      <q-item-section avatar>
        <q-item-label>#{{ preset.id }}</q-item-label>
        <FavoritePresetButton :model-value="preset"></FavoritePresetButton>
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
        <PresetDetailsCompact :model-value="preset.patch" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup async>
import { presetApi } from 'src/api/clients';
import { computed, onMounted, ref, watch } from 'vue';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { parsePresets, ServerPreset } from 'stores/preset';
import FavoritePresetButton from 'components/FavoritePresetButton.vue';

const store = useMarshallCodeStore();

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

const currentPresetId = computed(() => store.currentServerPresetId);
</script>
