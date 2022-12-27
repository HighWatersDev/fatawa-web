import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '334'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'eb1'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd79'),
    routes: [
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
        path: '/en/intro',
        component: ComponentCreator('/en/intro', 'bed'),
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
