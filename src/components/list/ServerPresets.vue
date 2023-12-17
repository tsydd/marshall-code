<template>
  <q-virtual-scroll
    bordered
    separator
    style="max-height: 800px"
    :items="modelValue"
    :virtual-scroll-slice-size="3"
    v-slot="{ item }: { item: MyMarshallComPreset | MarshallCodeToolsPreset }"
  >
    <q-item
      :key="item.id"
      :active="preset.type === item.type && preset.id === item.id"
      clickable
      active-class="bg-blue-grey-2"
      @click="() => store.switchToServerPreset(item)"
    >
      <q-item-section>
        <q-item-label v-if="item.type === 'MY_MARSHALL_COM'">
          Name:
          <a :href="`https://my.marshall.com/presets/details/${item.id}`">{{
            item.name
          }}</a>
        </q-item-label>
        <q-item-label v-if="item.type === 'MARSHALL_CODE_TOOLS'">
          Name:
          <a :href="`https://marshallcode.tools/${item.url}`">{{
            item.song
          }}</a>
        </q-item-label>
        <q-item-label v-if="item.artist">
          Artist: {{ item.artist }}
        </q-item-label>
        <q-item-label v-if="item.type === 'MY_MARSHALL_COM' && item.song">
          Song: {{ item.song }}
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
import { MarshallCodeToolsPreset, MyMarshallComPreset } from 'stores/preset';
import PresetDetailsCompact from 'components/list/PresetDetailsCompact.vue';
import { useMarshallCodeStore } from 'stores/marshallcode';

const store = useMarshallCodeStore();
const preset = computed(() => store.preset);

defineProps({
  modelValue: {
    type: Object as PropType<
      Array<MyMarshallComPreset | MarshallCodeToolsPreset>
    >,
    required: true,
  },
});
</script>
