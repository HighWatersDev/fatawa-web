import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '210'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c27'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ed4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '4b0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '450'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '84e'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'c90'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '1d1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2f1'),
    routes: [
      {
        path: '/alabbaad/أدب',
        component: ComponentCreator('/alabbaad/أدب', '24a'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/alabbaad/الصلاة',
        component: ComponentCreator('/alabbaad/الصلاة', 'e27'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/alabbaad/الصيام',
        component: ComponentCreator('/alabbaad/الصيام', '9e1'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/alabbaad/القرآن',
        component: ComponentCreator('/alabbaad/القرآن', '50c'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/alabbaad/المتناوعة',
        component: ComponentCreator('/alabbaad/المتناوعة', 'db5'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/alabbaad/المناسك',
        component: ComponentCreator('/alabbaad/المناسك', '286'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/alabbaad/النساء',
        component: ComponentCreator('/alabbaad/النساء', '71b'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/albadr/أدب',
        component: ComponentCreator('/albadr/أدب', '223'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/albadr/الصلاة',
        component: ComponentCreator('/albadr/الصلاة', 'fcb'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/albadr/الصيام',
        component: ComponentCreator('/albadr/الصيام', '7bc'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/albadr/القرآن',
        component: ComponentCreator('/albadr/القرآن', '18e'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/albadr/المناسك',
        component: ComponentCreator('/albadr/المناسك', '97d'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/albadr/النساء',
        component: ComponentCreator('/albadr/النساء', 'cfd'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/category/الشيخ-سليمان-الرحيلي',
        component: ComponentCreator('/category/الشيخ-سليمان-الرحيلي', '928'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/category/الشيخ-عبد-الرزاق-البدر',
        component: ComponentCreator('/category/الشيخ-عبد-الرزاق-البدر', 'a5e'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/category/الشيخ-عبد-المحسن-العباد',
        component: ComponentCreator('/category/الشيخ-عبد-المحسن-العباد', '6e8'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/intro',
        component: ComponentCreator('/intro', '798'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/الزكاة',
        component: ComponentCreator('/ruhayli/الزكاة', '28e'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/الصلاة',
        component: ComponentCreator('/ruhayli/الصلاة', 'dee'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/الصيام',
        component: ComponentCreator('/ruhayli/الصيام', '619'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/الطهارة',
        component: ComponentCreator('/ruhayli/الطهارة', '624'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/القرآن',
        component: ComponentCreator('/ruhayli/القرآن', '95a'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/المتنوعة',
        component: ComponentCreator('/ruhayli/المتنوعة', 'fb0'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/المناسك',
        component: ComponentCreator('/ruhayli/المناسك', '6be'),
        exact: true,
        sidebar: "fatawaSidebar"
      },
      {
        path: '/ruhayli/النساء',
        component: ComponentCreator('/ruhayli/النساء', '12c'),
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
