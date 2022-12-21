<template>
  <ServerPresets :model-value="presets"></ServerPresets>
</template>

<script lang="ts" setup async>
import { presetApi } from 'src/api/clients';
import { onMounted, ref } from 'vue';
import { parsePresets, ServerPreset } from 'stores/preset';
import ServerPresets from 'components/list/ServerPresets.vue';

const presets = ref<ServerPreset[]>([]);

async function updateFilter() {
  const presetsFromServer = await presetApi.findRecent();
  presets.value = parsePresets(presetsFromServer);
}

onMounted(updateFilter);
</script>
