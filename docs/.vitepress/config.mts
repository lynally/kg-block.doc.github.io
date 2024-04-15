import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kg-ui文档",
  description: "kg-ui文档",

  base: "/kg-block.doc.github.io/",
  //outDir: './docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Home", link: "/"},
      {text: "文档", link: "/kg_tags_v2"},
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          {text: "标签组件vue2", link: "/kg_tags_v2"},
          {text: "copilot组件vue2", link: "/kg_copilot_v2"},
          {text: "copilot组件vue3", link: "/kg_copilot_v3"},
        ],
      },
    ],

    socialLinks: [{icon: "github", link: "https://github.com/vuejs/vitepress"}],
  },
});
