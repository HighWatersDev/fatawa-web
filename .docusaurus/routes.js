import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c94'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd66'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a7d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'dd3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '557'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd5f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '810'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '554'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '420'),
    routes: [
      {
        path: '/albadr/أدب',
        component: ComponentCreator('/albadr/أدب', '604'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/albadr/الصلاة',
        component: ComponentCreator('/albadr/الصلاة', 'b00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/albadr/الصيام',
        component: ComponentCreator('/albadr/الصيام', '4eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/albadr/القران',
        component: ComponentCreator('/albadr/القران', '83c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/albadr/المناسك',
        component: ComponentCreator('/albadr/المناسك', '59e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/albadr/النساء',
        component: ComponentCreator('/albadr/النساء', 'b9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/الشيخ-سليمان-الرحيلي',
        component: ComponentCreator('/category/الشيخ-سليمان-الرحيلي', '012'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/الشيخ-عبد-الرزاق-البدر',
        component: ComponentCreator('/category/الشيخ-عبد-الرزاق-البدر', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro',
        component: ComponentCreator('/intro', '283'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ruhayli/الصلاة',
        component: ComponentCreator('/ruhayli/الصلاة', '7f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ruhayli/الصيام',
        component: ComponentCreator('/ruhayli/الصيام', '9ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ruhayli/القران',
        component: ComponentCreator('/ruhayli/القران', 'f1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ruhayli/المتنوعة',
        component: ComponentCreator('/ruhayli/المتنوعة', '551'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ruhayli/النساء',
        component: ComponentCreator('/ruhayli/النساء', '8da'),
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
