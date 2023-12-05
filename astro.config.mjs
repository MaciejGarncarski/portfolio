import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://maciej-garncarski.pl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl',
          en: 'en'
        }
      }
    })
  ]
});
