<template>
  <q-page>
    <template v-if="false">
      <ServerPatches />
    </template>
    <DevicePatches />
    <q-page-scroller :scroll-offset="150">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts" setup>
import DevicePatches from 'components/list/DevicePatches.vue';
import ServerPatches from 'components/list/ServerPatches.vue';
</script>
