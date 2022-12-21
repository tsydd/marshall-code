<template>
  <q-page>
    <ServerPatches />
    <q-page-scroller :scroll-offset="150">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts" setup>
import ServerPatches from 'components/list/SearchPresets.vue';
</script>
