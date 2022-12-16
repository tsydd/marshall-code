<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <ToolbarRouterLink label="Device" :to="{ name: 'devicePresets' }" />
        <ToolbarRouterLink label="Search" :to="{ name: 'searchPresets' }" />
        <ToolbarRouterLink label="Recent" :to="{ name: 'recentPresets' }" />
      </q-toolbar>
    </q-header>

    <q-drawer
      :model-value="true"
      :width="450"
      :mini-to-overlay="false"
      show-if-above
    >
      <q-toolbar class="bg-blue-8">
        <q-toolbar-title class="text-white">
          Marshall CODE
          <DeviceStatusBadge />
        </q-toolbar-title>
      </q-toolbar>
      <DevicePresetEditor />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-toolbar>
        <q-btn
          flat
          stretch
          icon="mdi-bug-check"
          label="Report issue"
          type="a"
          href="https://github.com/tsydd/marshall-code/issues"
        ></q-btn>
        <q-btn
          flat
          stretch
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
import ToolbarRouterLink from 'components/ToolbarRouterLink.vue';
</script>
