import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://maciej-garncarski.pl',
  compressHTML: true,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    image(),
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl-PL',
          en: 'en-UK'
        }
      }
    })
  ]
});
