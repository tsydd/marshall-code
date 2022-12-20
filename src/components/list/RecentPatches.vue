<template>
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
import { computed, onMounted, ref } from 'vue';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { parsePresets, ServerPreset } from 'stores/preset';

const store = useMarshallCodeStore();

const presets = ref<ServerPreset[]>([]);

async function updateFilter() {
  const presetsFromServer = await presetApi.findRecent();
  presets.value = parsePresets(presetsFromServer);
}

onMounted(updateFilter);

const currentPresetId = computed(() => store.currentServerPresetId);
</script>
