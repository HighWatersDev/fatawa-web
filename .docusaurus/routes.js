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
    component: ComponentCreator('/en/', '0d8'),
    routes: [
      {
        path: '/en/albadr/الصلاة',
        component: ComponentCreator('/en/albadr/الصلاة', '10c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/albadr/الصيام',
        component: ComponentCreator('/en/albadr/الصيام', 'b8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/albadr/القران',
        component: ComponentCreator('/en/albadr/القران', '18c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/albadr/النساء',
        component: ComponentCreator('/en/albadr/النساء', '4cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/category/الشيخ-سليمان-الرحيلي',
        component: ComponentCreator('/en/category/الشيخ-سليمان-الرحيلي', '649'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/category/الشيخ-عبد-الرزاق-البدر',
        component: ComponentCreator('/en/category/الشيخ-عبد-الرزاق-البدر', '2a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/intro',
        component: ComponentCreator('/en/intro', '5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/ruhayli/الصلاة',
        component: ComponentCreator('/en/ruhayli/الصلاة', 'c35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/ruhayli/الصيام',
        component: ComponentCreator('/en/ruhayli/الصيام', '259'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/ruhayli/القران',
        component: ComponentCreator('/en/ruhayli/القران', 'dcf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/ruhayli/النساء',
        component: ComponentCreator('/en/ruhayli/النساء', '585'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/ruhayli/متنوعة',
        component: ComponentCreator('/en/ruhayli/متنوعة', 'e07'),
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
