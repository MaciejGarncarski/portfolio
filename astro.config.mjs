import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import {
  transformerNotationDiff,
  transformerNotationFocus
} from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  site: "https://maciej-garncarski.pl",
  integrations: [sitemap(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          transformers: [
            transformerNotationDiff({
              matchAlgorithm: "v3"
            }),
            transformerNotationFocus({
              matchAlgorithm: "v3"
            })
          ],
          keepBackground: false,
          theme: {
            light: "github-light",
            dark: "nord"
          },
          onVisitHighlightedLine(node) {
            node?.properties?.className?.push("highlighted");
          },
          onVisitHighlightedChars(node) {
            node?.properties?.className
              ? node.properties.className.push("highlighted-chars")
              : (node.properties.className = ["highlighted-chars"]);
          }
        }
      ]
    ]
  }
});
