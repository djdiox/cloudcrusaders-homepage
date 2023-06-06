import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: '/cloudcrusader-homepage/',
  locales: {
    "/": {
      lang: "en-US",
      title: "Markus Wagner's Blog",
      description: "My personal Dev/Tech News/Music Blog",
    },
    "/de/": {
      lang: "de-DE",
      title: "Markus Wagner's Blog",
      description: "Mein persönlicher Dev/Tech News/Music Blog",
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
