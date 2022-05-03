<template>
  <div class="row text-h4">#{{ modelValue.number }} {{ modelValue.name }}</div>
  <KnobsEditor :model-value="modelValue" @change="onChange" />
  <PreAmpEditor :model-value="modelValue" @change="onChange" />
  <PowerAmpEditor :model-value="modelValue" @change="onChange" />
  <CabinetEditor :model-value="modelValue" @change="onChange" />
  <PedalEditor :model-value="modelValue" @change="onChange" />
  <ModulationEditor :model-value="modelValue" @change="onChange" />
  <DelayEditor :model-value="modelValue" @change="onChange" />
  <ReverbEditor :model-value="modelValue" @change="onChange" />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Preset } from 'marshall-code-api';
import KnobsEditor from 'components/editor/KnobsEditor.vue';
import PreAmpEditor from 'components/editor/PreAmpEditor.vue';
import PowerAmpEditor from 'components/editor/PowerAmpEditor.vue';
import CabinetEditor from 'components/editor/CabinetEditor.vue';
import PedalEditor from 'components/editor/PedalEditor.vue';
import ModulationEditor from 'components/editor/ModulationEditor.vue';
import DelayEditor from 'components/editor/DelayEditor.vue';
import ReverbEditor from 'components/editor/ReverbEditor.vue';

defineProps({
  modelValue: {
    type: Object as PropType<Preset>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'change', changes: Partial<Preset>): void;
}>();

function onChange(changes: Partial<Preset>) {
  emit('change', changes);
}
</script>
