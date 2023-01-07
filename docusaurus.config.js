// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'فتاوى علماء أهل السنة',
  tagline: '',
  url: 'https://salafifatawa.azurewebsites.net',
  baseUrl: '/',
//  projectName: 'highwatersdev.github.io',
//  organizationName: 'highwatersdev',
//  trailingSlash: false,
//  deploymentBranch: 'main',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav2.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    localeConfigs: {
    en: {
    htmlLang: 'en-US',
    },
    ar: {
    direction: 'rtl',},
   },
  },
  scripts: [{src: "scripts/posthog.js", defer: true}],
  plugins: [[require.resolve("@cmfcmf/docusaurus-search-local"),
  {
    indexDocs: true,
    indexBlog: false,
    indexPages: false,
    language: ["ar", "en"],
    lunr: {
      tokenizerSeparator: /[\s\-]+/,
      b: 0.75,
      k1: 1.2,
          },
    },
   ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HighWatersDev/fatawa-web',
        },
        blog: false,
//        pages: true,
//          showReadingTime: true,
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
      // The application ID provided by Algolia
      appId: '2CH1MK9AGZ',

      // Public API key: it is safe to commit it
      apiKey: '497a5e1cf39ece0e6d3548011598f4ad',

      indexName: 'fatawa',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
      navbar: {
        title: 'الرئيسية',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo2.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'الفتاوى',
          },
          {
          type: 'localeDropdown',
          position: 'left',
          },
        ],
      },
      docs: {
      sidebar: {
      autoCollapseCategories: true,}},
      footer: {
        style: 'dark',
        links: [
          {
            title: 'مواقع العلماء',
            items: [
              {
                label: 'الشيخ سليمان الرحيلي',
                href: 'https://www.sualruhaily.com/index.php',
              },
              {
                label: 'الشيخ عبد الرزاق البدر',
                href: 'https://al-badr.net/',
              },
              {
                label: 'الشيخ عبد العزيز ابن باز',
                href: 'https://binbaz.org.sa/',
              },
              {
                label: 'الشيخ صالح الفوزان',
                href: 'https://alfawzan.af.org.sa/',
              },
            ],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [
              {
                label: 'فتاوى',
                to: '/intro',
              },
              {
                label: 'Source code',
                href: 'https://github.com/HighWatersDev/fatawa-web',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Salafi Fatawa`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;