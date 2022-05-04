<template>
  <q-badge :color="connected ? 'green' : 'red'" align="top">
    {{ connected ? 'Connected' : 'Disconnected' }}
  </q-badge>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useMarshallCodeStore } from 'stores/marshallcode';

const store = useMarshallCodeStore();
const connected = computed(() => store.connected);
</script>
