<template>
  <q-list bordered separator>
    <q-item
      v-for="preset in modelValue"
      :key="preset.id"
      :active="currentPresetId === preset.id"
      clickable
      active-class="bg-blue-grey-2"
      @click="() => store.switchToServerPreset(preset)"
    >
      <q-item-section avatar class="id-column">
        <q-item-label>#{{ preset.id }}</q-item-label>
        <FavoritePresetButton :model-value="preset"></FavoritePresetButton>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>
          {{ preset.name }}
        </q-item-label>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>
          {{ preset.artist }}
        </q-item-label>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>
          {{ preset.song }}
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <PresetDetailsCompact :model-value="preset.patch" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { ServerPreset } from 'stores/preset';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';
import FavoritePresetButton from 'components/FavoritePresetButton.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';

const store = useMarshallCodeStore();
const currentPresetId = computed(() => store.currentServerPresetId);

defineProps({
  modelValue: {
    type: Object as PropType<ServerPreset[]>,
    required: true,
  },
});
</script>

<style scoped>
.id-column {
  width: 60px;
}
</style>
