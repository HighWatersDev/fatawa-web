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
    path: '/docs',
    component: ComponentCreator('/docs', '3e3'),
    routes: [
      {
        path: '/docs/albadr/الصلاة',
        component: ComponentCreator('/docs/albadr/الصلاة', '982'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/albadr/الصيام',
        component: ComponentCreator('/docs/albadr/الصيام', 'ce6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/albadr/القران',
        component: ComponentCreator('/docs/albadr/القران', 'a4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/albadr/النساء',
        component: ComponentCreator('/docs/albadr/النساء', 'e6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/الشيخ-سليمان-الرحيلي',
        component: ComponentCreator('/docs/category/الشيخ-سليمان-الرحيلي', '54e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/الشيخ-عبد-الرزاق-البدر',
        component: ComponentCreator('/docs/category/الشيخ-عبد-الرزاق-البدر', '6a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ruhayli/الصلاة',
        component: ComponentCreator('/docs/ruhayli/الصلاة', '370'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ruhayli/الصيام',
        component: ComponentCreator('/docs/ruhayli/الصيام', '482'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ruhayli/القران',
        component: ComponentCreator('/docs/ruhayli/القران', '2c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ruhayli/النساء',
        component: ComponentCreator('/docs/ruhayli/النساء', '8a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '554'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
