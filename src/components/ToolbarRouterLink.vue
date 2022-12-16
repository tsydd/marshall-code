<template>
  <router-link custom :to="to" v-slot="{ isActive, navigate }">
    <q-btn
      flat
      stretch
      :label="label"
      @click="() => navigate()"
      :class="isActive && 'bg-blue'"
    />
  </router-link>
</template>

<script lang="ts" setup>
import { LocationQuery } from 'vue-router';
import { PropType } from 'vue';

defineProps({
  to: {
    type: Object as PropType<LocationQuery>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
