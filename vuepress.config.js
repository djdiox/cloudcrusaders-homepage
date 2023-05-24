import { defineUserConfig } from 'vuepress'
import mixTheme from 'vuepress-theme-mix'

export default defineUserConfig({
  lang: 'en-US',
  title: 'This is Markus Wagner',
  description: 'This is my new rework of my homepage',
  theme: mixTheme({
    // configure the theme heaare
  }),
  plugins: [
    '@vuepress/blog'
  ]
})