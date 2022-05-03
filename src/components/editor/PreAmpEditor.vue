<template>
  <div class="row items-center">
    <div>
      <img alt="preAmp" src="~assets/pre-amp.svg" width="25" height="25" />
    </div>
    <q-select
      :model-value="modelValue.preAmpType"
      :options="Object.values(PreAmpType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      @update:model-value="(value) => onChange({ preAmpType: value })"
    />
    <q-toggle
      :model-value="modelValue.preAmpEnabled"
      @update:model-value="(value) => onChange({ preAmpEnabled: value })"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Preset, PreAmpType } from 'marshall-code-api';

type PreAmp = Pick<Preset, 'preAmpType' | 'preAmpEnabled'>;

defineProps({
  modelValue: {
    type: Object as PropType<PreAmp>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<PreAmp>): void;
}>();

function onChange(changes: Partial<PreAmp>) {
  emit('change', changes);
}
</script>
