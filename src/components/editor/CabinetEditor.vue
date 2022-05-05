<template>
  <div class="row items-center q-pa-sm q-gutter-sm q-pa-sm">
    <img alt="cabinet" src="~assets/cabinet.svg" width="25" height="25" />
    <q-select
      :model-value="modelValue.cabinetType"
      :options="Object.values(CabinetType)"
      :option-label="$t"
      outlined
      dense
      options-dense
      hide-bottom-space
      class="col"
      @update:model-value="(value) => onChange({ cabinetType: value })"
    />
    <q-toggle
      :model-value="modelValue.cabinetEnabled"
      @update:model-value="(value) => onChange({ cabinetEnabled: value })"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { CabinetType, Preset } from 'marshall-code-api';

type Cabinet = Pick<Preset, 'cabinetType' | 'cabinetEnabled'>;

defineProps({
  modelValue: {
    type: Object as PropType<Cabinet>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<Cabinet>): void;
}>();

function onChange(changes: Partial<Cabinet>) {
  emit('change', changes);
}
</script>
