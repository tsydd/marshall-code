<template>
  <q-btn
    round
    dense
    flat
    :icon="
      favoritePresetStore.isFavorite(modelValue.id)
        ? 'mdi-star'
        : 'mdi-star-outline'
    "
    @click.prevent.stop="() => favoritePresetStore.toggleFavorite(modelValue)"
  />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ServerPreset } from 'stores/preset';
import { userFavoritePresetsStore } from 'stores/favorite-presets-store';

const favoritePresetStore = userFavoritePresetsStore();
defineProps({
  modelValue: {
    type: Object as PropType<ServerPreset>,
    required: true,
  },
});
</script>
