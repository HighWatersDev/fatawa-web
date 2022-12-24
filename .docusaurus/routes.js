import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fatawa-web/en/markdown-page',
    component: ComponentCreator('/fatawa-web/en/markdown-page', 'e0e'),
    exact: true
  },
  {
    path: '/fatawa-web/en/',
    component: ComponentCreator('/fatawa-web/en/', '039'),
    exact: true
  },
  {
    path: '/fatawa-web/en/',
    component: ComponentCreator('/fatawa-web/en/', 'd1f'),
    routes: [
      {
        path: '/fatawa-web/en/albadr/الصلاة',
        component: ComponentCreator('/fatawa-web/en/albadr/الصلاة', '50c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/albadr/الصيام',
        component: ComponentCreator('/fatawa-web/en/albadr/الصيام', '33b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/albadr/القران',
        component: ComponentCreator('/fatawa-web/en/albadr/القران', '417'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/albadr/النساء',
        component: ComponentCreator('/fatawa-web/en/albadr/النساء', '51d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/category/الشيخ-سليمان-الرحيلي',
        component: ComponentCreator('/fatawa-web/en/category/الشيخ-سليمان-الرحيلي', '1c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/category/الشيخ-عبد-الرزاق-البدر',
        component: ComponentCreator('/fatawa-web/en/category/الشيخ-عبد-الرزاق-البدر', '0dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/intro',
        component: ComponentCreator('/fatawa-web/en/intro', '19e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/ruhayli/الصلاة',
        component: ComponentCreator('/fatawa-web/en/ruhayli/الصلاة', '59d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/ruhayli/الصيام',
        component: ComponentCreator('/fatawa-web/en/ruhayli/الصيام', 'd21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/ruhayli/القران',
        component: ComponentCreator('/fatawa-web/en/ruhayli/القران', '49a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/ruhayli/النساء',
        component: ComponentCreator('/fatawa-web/en/ruhayli/النساء', 'ba5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fatawa-web/en/ruhayli/متنوعة',
        component: ComponentCreator('/fatawa-web/en/ruhayli/متنوعة', 'bfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
