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
    path: '/search',
    component: ComponentCreator('/search', '2f6'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '554'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '062'),
    routes: [
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
