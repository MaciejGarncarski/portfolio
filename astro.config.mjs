// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "nord"
  },
  onVisitHighlightedLine(node) {
    node?.properties?.className?.push("highlighted");
  },
  onVisitHighlightedChars(node) {
    console.log(node);
    node?.properties?.className
      ? node.properties.className.push("highlighted-chars")
      : (node.properties.className = ["highlighted-chars"]);
  },
  tokensMap: {}
};

// https://astro.build/config
export default defineConfig({
  site: "https://maciej-garncarski.pl",
  integrations: [sitemap(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
});
