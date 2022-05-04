<template>
  <div class="row items-center">
    <div>
      <img alt="Reverb" src="~assets/reverb.svg" width="25" height="25" />
    </div>
    <q-select
      :model-value="modelValue.reverbType"
      :options="Object.values(ReverbType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      @update:model-value="(value) => onChange({ reverbType: value })"
    />
    <q-toggle
      :model-value="modelValue.reverbEnabled"
      @update:model-value="(value) => onChange({ reverbEnabled: value })"
    />
  </div>
  <div class="row">
    <Knob :model-value="modelValue.reverbParam1 / 10">Decay</Knob>
    <Knob :model-value="modelValue.reverbParam2 / 10">Pre-delay</Knob>
    <Knob :model-value="modelValue.reverbParam3 / 10">Tone</Knob>
    <Knob :model-value="modelValue.reverbParam4 / 10">Level</Knob>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Preset, ReverbType } from 'marshall-code-api';
import Knob from 'components/editor/Knob.vue';

type Reverb = Pick<
  Preset,
  | 'reverbType'
  | 'reverbEnabled'
  | 'reverbParam1'
  | 'reverbParam2'
  | 'reverbParam3'
  | 'reverbParam4'
>;

defineProps({
  modelValue: {
    type: Object as PropType<Reverb>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<Reverb>): void;
}>();

function onChange(changes: Partial<Reverb>) {
  emit('change', changes);
}
</script>
