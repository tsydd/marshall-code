<template>
  <ServerPresets :model-value="presets"></ServerPresets>
</template>

<script lang="ts" setup async>
import { computed } from 'vue';
import ServerPresets from 'components/list/ServerPresets.vue';
import { userFavoritePresetsStore } from 'stores/favorite-presets-store';

const favoritePresetsStore = userFavoritePresetsStore();
const presets = computed(() => Object.values(favoritePresetsStore.presets));
</script>
