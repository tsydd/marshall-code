<template>
  <q-page>
    <div class="row">
      <div>
        <PresetEditor :model-value="currentPreset" @change="onChange" />
      </div>
      <div>
        <LocalPatches />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import LocalPatches from 'components/LocalPatches.vue';
import PresetEditor from 'components/editor/PresetEditor.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { computed } from 'vue';

const store = useMarshallCodeStore();
const currentPreset = computed(() => store.currentPreset);
const onChange = store.modifyPreset;
</script>
