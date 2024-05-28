import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
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
    icon(),
    compress(),
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
