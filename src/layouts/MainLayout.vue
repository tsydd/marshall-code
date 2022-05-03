<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Marshall CODE </q-toolbar-title>

        <CodeStatusBadge />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import CodeStatusBadge from 'components/CodeStatusBadge.vue';
</script>
