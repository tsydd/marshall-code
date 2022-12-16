<template>
  <q-list bordered separator>
    <q-item
      v-for="preset in presets"
      :key="preset.number"
      clickable
      :active="preset.number === currentPresetNumber"
      active-class="bg-blue-grey-2"
      @click="() => switchToDevicePreset(preset.number)"
    >
      <q-item-section avatar>
        <q-item-label>#{{ preset.number }}</q-item-label>
      </q-item-section>
      <q-item-section class="col-2">
        <q-item-label>
          {{ preset.name }}
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <PresetDetailsCompact :model-value="preset" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { useMarshallCodeStore } from 'stores/marshallcode';
import { computed } from 'vue';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';

const store = useMarshallCodeStore();

const presets = computed(() => store.ampPresets);
const currentPresetNumber = computed(() => store.currentDevicePresetNumber);
const switchToDevicePreset = store.switchToDevicePreset;
</script>
