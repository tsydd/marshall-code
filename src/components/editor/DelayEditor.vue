<template>
  <div class="row items-center">
    <div>
      <img alt="Delay" src="~assets/delay.svg" width="25" height="25" />
    </div>
    <q-select
      :model-value="modelValue.delayType"
      :options="Object.values(DelayType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      @update:model-value="(value) => onChange({ delayType: value })"
    />
    <q-toggle
      :model-value="modelValue.delayEnabled"
      @update:model-value="(value) => onChange({ delayEnabled: value })"
    />
  </div>
  <div class="row">
    <Knob :model-value="time" :max="4000" :step="1">Time</Knob>
    <template v-if="modelValue.delayType === DelayType.STUDIO">
      <Knob :model-value="modelValue.delayParam2 / 10">Feedback</Knob>
      <Knob :model-value="modelValue.delayParam3 / 10">Frequency</Knob>
      <Knob :model-value="modelValue.delayParam4 / 10">Level</Knob>
    </template>
    <template v-else-if="modelValue.delayType === DelayType.VINTAGE">
      <Knob :model-value="modelValue.delayParam2 / 10">Feedback</Knob>
      <Knob :model-value="modelValue.delayParam3 / 10">Age</Knob>
      <Knob :model-value="modelValue.delayParam4 / 10">Level</Knob>
    </template>
    <template v-else-if="modelValue.delayType === DelayType.MULTI">
      <Knob :model-value="modelValue.delayParam2 / 10">Feedback</Knob>
      <q-select
        :model-value="modelValue.delayParam3"
        :options="[0, 1, 2, 3]"
        :option-label="(value) => `- ${value + 1} -`"
        dense
        options-dense
        outlined
      ></q-select>
      <Knob :model-value="modelValue.delayParam4 / 10">Level</Knob>
    </template>
    <template v-else-if="modelValue.delayType === DelayType.REVERSE">
      <Knob :model-value="modelValue.delayParam2 / 10">Feedback</Knob>
      <Knob :model-value="modelValue.delayParam3 / 10">Frequency</Knob>
      <Knob :model-value="modelValue.delayParam4 / 10">Level</Knob>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { DelayType, Preset } from 'marshall-code-api';
import Knob from 'components/Knob.vue';

type Delay = Pick<
  Preset,
  | 'delayType'
  | 'delayEnabled'
  | 'delayTimeLsb'
  | 'delayTimeMsb'
  | 'delayParam2'
  | 'delayParam3'
  | 'delayParam4'
>;

const props = defineProps({
  modelValue: {
    type: Object as PropType<Delay>,
    required: true,
  },
});

const time = computed(
  () => (props.modelValue.delayTimeMsb << 7) + props.modelValue.delayTimeLsb
);

const emit = defineEmits<{
  (e: 'change', changes: Partial<Delay>): void;
}>();

function onChange(changes: Partial<Delay>) {
  emit('change', changes);
}
</script>
