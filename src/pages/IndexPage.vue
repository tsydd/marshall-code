<template>
  <q-page>
    <div class="row">
      <div>
        <PresetEditor
          :model-value="currentPreset"
          @change="store.modifyPreset"
        />
      </div>
      <div>
        <DevicePatches />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import DevicePatches from 'components/list/DevicePatches.vue';
import PresetEditor from 'components/editor/PresetEditor.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import { computed } from 'vue';

const store = useMarshallCodeStore();
const currentPreset = computed(() => store.currentPreset);
</script>
