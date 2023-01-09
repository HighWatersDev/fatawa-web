import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '334'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', 'dc6'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'eb1'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '8e2'),
    routes: [
      {
        path: '/en/alabbaad/أدب',
        component: ComponentCreator('/en/alabbaad/أدب', '778'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/alabbaad/الصلاة',
        component: ComponentCreator('/en/alabbaad/الصلاة', '0de'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/alabbaad/الصيام',
        component: ComponentCreator('/en/alabbaad/الصيام', '911'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/alabbaad/القرآن',
        component: ComponentCreator('/en/alabbaad/القرآن', '460'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/alabbaad/المتناوعة',
        component: ComponentCreator('/en/alabbaad/المتناوعة', '963'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/alabbaad/المناسك',
        component: ComponentCreator('/en/alabbaad/المناسك', 'a67'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/alabbaad/النساء',
        component: ComponentCreator('/en/alabbaad/النساء', 'da7'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/albadr/أدب',
        component: ComponentCreator('/en/albadr/أدب', 'acb'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/albadr/الصلاة',
        component: ComponentCreator('/en/albadr/الصلاة', '941'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/albadr/الصيام',
        component: ComponentCreator('/en/albadr/الصيام', '2a0'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/albadr/القرآن',
        component: ComponentCreator('/en/albadr/القرآن', '2f5'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/albadr/المناسك',
        component: ComponentCreator('/en/albadr/المناسك', '46b'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/albadr/النساء',
        component: ComponentCreator('/en/albadr/النساء', 'fa0'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/category/الشيخ-سليمان-الرحيلي',
        component: ComponentCreator('/en/category/الشيخ-سليمان-الرحيلي', '63d'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/category/الشيخ-عبد-الرزاق-البدر',
        component: ComponentCreator('/en/category/الشيخ-عبد-الرزاق-البدر', 'ffd'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/category/الشيخ-عبد-المحسن-العباد',
        component: ComponentCreator('/en/category/الشيخ-عبد-المحسن-العباد', 'a6f'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/intro',
        component: ComponentCreator('/en/intro', 'bed'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/الزكاة',
        component: ComponentCreator('/en/ruhayli/الزكاة', '4f9'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/الصلاة',
        component: ComponentCreator('/en/ruhayli/الصلاة', '0e3'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/الصيام',
        component: ComponentCreator('/en/ruhayli/الصيام', 'aa4'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/القرآن',
        component: ComponentCreator('/en/ruhayli/القرآن', '5c4'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/المتنوعة',
        component: ComponentCreator('/en/ruhayli/المتنوعة', 'e9a'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/المناسك',
        component: ComponentCreator('/en/ruhayli/المناسك', '52d'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/en/ruhayli/النساء',
        component: ComponentCreator('/en/ruhayli/النساء', '0e8'),
        exact: true,
        sidebar: "fatawaSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
