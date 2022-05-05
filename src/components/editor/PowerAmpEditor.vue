<template>
  <div class="row items-center q-gutter-sm q-pa-sm">
    <img alt="powerAmp" src="~assets/power-amp.svg" width="25" height="25" />
    <q-select
      :model-value="modelValue.powerAmpType"
      :options="Object.values(PowerAmpType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      class="col"
      @update:model-value="(value) => onChange({ powerAmpType: value })"
    />
    <q-toggle
      :model-value="modelValue.powerAmpEnabled"
      @update:model-value="(value) => onChange({ powerAmpEnabled: value })"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { PowerAmpType, Preset } from 'marshall-code-api';

type PowerAmp = Pick<Preset, 'powerAmpType' | 'powerAmpEnabled'>;

defineProps({
  modelValue: {
    type: Object as PropType<PowerAmp>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<PowerAmp>): void;
}>();

function onChange(changes: Partial<PowerAmp>) {
  emit('change', changes);
}
</script>
