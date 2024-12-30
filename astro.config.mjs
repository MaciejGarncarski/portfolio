// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
  }
});
