import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import vue2Jsx from "@vitejs/plugin-vue2-jsx";
import { join, resolve } from "node:path";

import hljs from "highlight.js";
import vitePluginMd from "vite-plugin-md";

console.log(1, join(__dirname, "src", "layout", "index.html"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({ include: [/\.vue$/, /\.md$/] }),
    vue2Jsx(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    vitePluginMd({
      markdownItOptions: {
        typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
        highlight: function markdownHighlight(str: string, lang: string) {
          if (lang && hljs.getLanguage(lang)) {
            // https://github.com/highlightjs/highlight.js/issues/2277
            try {
              return hljs.highlight(str, {
                language: lang,
                ignoreIllegals: true,
              }).value;
            } catch (error) {
              console.log(error);
            }
          }
          return "";
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        preview: resolve(__dirname, "preview.html"),
      },
    },
  },
});
