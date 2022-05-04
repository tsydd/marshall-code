<template>
  <q-knob
    :model-value="modelValue / 10"
    :min="0"
    :max="10"
    :angle="180"
    size="20px"
    font-size="0.4em"
    readonly
    show-value
  >
    <q-tooltip>{{ tooltip }}: {{ modelValue / 10 }}</q-tooltip>
    {{ modelValue / 10 }}
  </q-knob>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  tooltip: {
    type: String,
    required: true,
  },
});
</script>
