<template>
  <PresetEditor :model-value="currentPreset" @change="store.modifyPreset" />
</template>

<script lang="ts" setup>
import { useMarshallCodeStore } from 'stores/marshallcode';
import { computed } from 'vue';
import PresetEditor from 'components/editor/PresetEditor.vue';

const store = useMarshallCodeStore();
const currentPreset = computed(() => store.currentPreset);
</script>
