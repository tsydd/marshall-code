<template>
  <q-knob
    :model-value="modelValue / 10"
    :min="0"
    :max="10"
    angle="180"
    size="20px"
    readonly
  ></q-knob>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
});
</script>
