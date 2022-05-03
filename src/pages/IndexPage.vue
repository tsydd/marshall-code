<template>
  <q-page>
    <PresetEditor :model-value="currentPreset" @change="onChange" />
    <LocalPatches />
  </q-page>
</template>

<script lang="ts" setup>
import LocalPatches from 'components/LocalPatches.vue';
import PresetEditor from 'components/editor/PresetEditor.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { computed } from 'vue';
import { Preset } from 'marshall-code-api';

const store = useMarshallCodeStore();
const currentPreset = computed(() => store.currentPreset);
async function onChange(changes: Partial<Preset>) {
  await store.modifyPreset(changes);
}
</script>
