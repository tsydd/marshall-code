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
        name: 'devicePresets',
        path: 'device',
        component: () => import('pages/DevicePresetsPage.vue'),
      },
      {
        name: 'searchPresets',
        path: 'search',
        component: () => import('pages/SearchPresetsPage.vue'),
      },
      {
        name: 'favoritePresets',
        path: 'favorite',
        component: () => import('pages/FavoritePresetsPage.vue'),
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
