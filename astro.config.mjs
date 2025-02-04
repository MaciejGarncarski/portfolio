// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://maciej-garncarski.pl",
  env: {
    schema: {
      SPOTIFY_CLIENT_ID: envField.string({
        min: 10,
        context: "server",
        access: "secret"
      }),
      SPOTIFY_SECRET: envField.string({
        min: 10,
        context: "server",
        access: "secret"
      })
    }
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark"
      }
    }
  },
  integrations: [sitemap(), mdx()]
});
