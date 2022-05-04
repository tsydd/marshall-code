<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Marshall CODE
          <DeviceStatusBadge />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :model-value="true" :width="450">
      <DevicePresetEditor />
    </q-drawer>

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
import DeviceStatusBadge from 'components/DeviceStatusBadge.vue';
import DevicePresetEditor from 'components/editor/DevicePresetEditor.vue';
</script>
