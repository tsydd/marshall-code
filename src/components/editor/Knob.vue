<template>
  <div class="column items-center">
    <q-knob
      :model-value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :angle="180"
      show-value
      @update:model-value="onUpdateDebounced"
    ></q-knob>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'quasar';

defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10,
  },
  step: {
    type: Number,
    default: 0.1,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

function onUpdate(value: number) {
  emit('update:modelValue', value);
}

const onUpdateDebounced = debounce(onUpdate, 100);
</script>
