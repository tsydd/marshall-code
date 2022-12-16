import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/presets',
  },
  {
    path: '/presets',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/presets/device',
      },
      {
        path: 'device',
        component: () => import('pages/DevicePresetsPage.vue'),
      },
      {
        path: 'db',
        component: () => import('pages/PresetDatabasePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
