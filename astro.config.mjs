// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

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
  integrations: [sitemap()]
});
