<template>
  <q-virtual-scroll
    bordered
    separator
    style="max-height: 800px"
    :items="modelValue"
    v-slot="{ item }: { item: ServerPreset }"
  >
    <q-item
      :key="item.id"
      :active="preset.type === item.type && preset.id === item.id"
      clickable
      active-class="bg-blue-grey-2"
      @click="() => store.switchToServerPreset(item)"
    >
      <q-item-section class="favorite-column">
        <FavoritePresetButton :model-value="item"></FavoritePresetButton>
      </q-item-section>
      <q-item-section class="description-column">
        <q-item-label v-if="item.type === 'MY_MARSHALL_COM'">
          <a
            :href="`https://my.marshall.com/presets/details/${item.id}`"
            target="_blank"
            class="text-weight-medium"
            >{{ item.name }}</a
          >
        </q-item-label>
        <q-item-label v-if="item.type === 'MARSHALL_CODE_TOOLS'">
          <a
            :href="`https://marshallcode.tools/${item.url}`"
            target="_blank"
            class="text-weight-medium"
            >{{ item.track }}</a
          >
        </q-item-label>
        <q-item-label v-if="item.artist">
          Artist: <span class="text-weight-medium">{{ item.artist }}</span>
        </q-item-label>
        <q-item-label v-if="item.type === 'MY_MARSHALL_COM' && item.track">
          Track: <span class="text-weight-medium">{{ item.track }}</span>
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <PresetDetailsCompact :model-value="item.patch" />
      </q-item-section>
    </q-item>
  </q-virtual-scroll>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { ServerPreset } from 'stores/preset';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';
import FavoritePresetButton from 'components/FavoritePresetButton.vue';

const store = useMarshallCodeStore();
const preset = computed(() => store.preset);

defineProps({
  modelValue: {
    type: Object as PropType<Array<ServerPreset>>,
    required: true,
  },
});
</script>

<style scoped>
.favorite-column {
  flex: 25px;
}
.description-column {
  flex: 275px;
}
</style>
