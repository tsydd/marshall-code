<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Marshall CODE
          <CodeStatusBadge />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="mdi-bug-check"
          label="Report issue"
          type="a"
          href="https://github.com/tsydd/marshall-code/issues"
        ></q-btn>
        <q-btn
          flat
          dense
          icon="mdi-github"
          label="Github"
          type="a"
          href="https://github.com/tsydd/marshall-code"
        ></q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import CodeStatusBadge from 'components/CodeStatusBadge.vue';
</script>
