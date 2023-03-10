/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "فتاوى علماء أهل السنة",
  "tagline": "",
  "url": "https://salafifatawa.azurewebsites.net",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/fav2.ico",
  "i18n": {
    "defaultLocale": "ar",
    "locales": [
      "ar",
      "en"
    ],
    "localeConfigs": {
      "en": {
        "htmlLang": "en-US",
        "direction": "ltr"
      },
      "ar": {
        "direction": "rtl"
      }
    },
    "path": "i18n"
  },
  "scripts": [
    {
      "src": "scripts/posthog.js",
      "defer": true
    }
  ],
  "plugins": [],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/luqmaan/Projects/fatawa-web/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/HighWatersDev/fatawa-web"
        },
        "blog": false,
        "theme": {
          "customCss": "/Users/luqmaan/Projects/fatawa-web/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "algolia": {
      "appId": "2CH1MK9AGZ",
      "apiKey": "497a5e1cf39ece0e6d3548011598f4ad",
      "indexName": "fatawa",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "navbar": {
      "title": "الرئيسة",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/salafifatawa_logo.jpg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "الفتاوى"
        },
        {
          "type": "localeDropdown",
          "position": "left",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "docs": {
      "sidebar": {
        "autoCollapseCategories": true,
        "hideable": false
      },
      "versionPersistence": "localStorage"
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "مواقع العلماء",
          "items": [
            {
              "label": "⚪ الشيخ سليمان الرحيلي",
              "href": "https://www.sualruhaily.com/index.php"
            },
            {
              "label": "⚪ الشيخ عبد الرزاق البدر",
              "href": "https://al-badr.net/"
            },
            {
              "label": "⚪ فتاوى الشيخ عبد العزيز ابن باز",
              "href": "https://binbaz.org.sa/fatwas/kind/1"
            },
            {
              "label": "⚪ فتاوى الشيخ صالح الفوزان",
              "href": "https://alfawzan.af.org.sa/ar/ftawa/all"
            },
            {
              "label": "⚪ فتاوى الشيخ محمد بن صالح العثيمين",
              "href": "https://binothaimeen.net/content/Menu/ftawa"
            },
            {
              "label": "⚪ الشيخ عبد المحسن العباد",
              "href": "https://al-abbaad.com/"
            }
          ]
        },
        {
          "title": "حول الموقع",
          "items": [
            {
              "label": "فتاوى",
              "to": "/intro"
            },
            {
              "label": "مصدر الكود",
              "href": "https://github.com/HighWatersDev/fatawa-web"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Salafi Fatawa"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
