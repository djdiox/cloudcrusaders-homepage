import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

const MR_HOPE_AVATAR =
  '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';
const SOUNDCLOUD_AVATAR = `<svg
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
version="1.0"
width="20.48"
height="11.96"
viewBox="-1.59018003 -1.59018003 96.16536106 56.18636106"
id="svg2474">
<defs
  id="defs2476">
 <linearGradient
    x1="46.492699"
    y1="0"
    x2="46.492699"
    y2="53.006302"
    id="SVGID_1_"
    gradientUnits="userSpaceOnUse">
<stop
id="stop2461"
style="stop-color:#f79810;stop-opacity:1"
offset="0" />

<stop
id="stop2463"
style="stop-color:#f8310e;stop-opacity:1"
offset="1" />

</linearGradient>
</defs>
<path
  d="M 1.053,24.152 C 0.859,24.152 0.705,24.302 0.68,24.516 L 0,29.681 L 0.68,34.757 C 0.705,34.971 0.859,35.12 1.053,35.12 C 1.241,35.12 1.394,34.972 1.424,34.759 L 1.424,34.759 L 1.424,34.758 C 1.424,34.758 1.424,34.758 1.424,34.759 L 2.23,29.681 L 1.424,24.515 C 1.395,24.302 1.24,24.152 1.053,24.152 z M 4.877,21.33 C 4.845,21.108 4.686,20.955 4.49,20.955 C 4.293,20.955 4.13,21.113 4.103,21.33 C 4.103,21.332 3.189,29.681 3.189,29.681 L 4.103,37.847 C 4.129,38.066 4.292,38.224 4.49,38.224 C 4.685,38.224 4.844,38.07 4.876,37.849 L 5.916,29.681 L 4.877,21.33 z M 19.281,13.627 C 18.906,13.627 18.596,13.934 18.578,14.324 L 17.85,29.688 L 18.578,39.617 C 18.597,40.005 18.906,40.311 19.281,40.311 C 19.654,40.311 19.963,40.004 19.985,39.615 L 19.985,39.618 L 20.808,29.688 L 19.985,14.324 C 19.963,13.934 19.654,13.627 19.281,13.627 z M 11.826,18.967 C 11.538,18.967 11.303,19.197 11.28,19.504 L 10.46,29.684 L 11.28,39.533 C 11.302,39.838 11.538,40.068 11.826,40.068 C 12.111,40.068 12.346,39.838 12.371,39.533 L 13.303,29.684 L 12.371,19.502 C 12.346,19.197 12.111,18.967 11.826,18.967 z M 26.857,40.31 C 27.322,40.31 27.7,39.935 27.719,39.455 L 28.433,29.693 L 27.72,9.238 C 27.701,8.758 27.323,8.383 26.858,8.383 C 26.389,8.383 26.01,8.759 25.995,9.239 C 25.995,9.24 25.362,29.692 25.362,29.692 L 25.995,39.458 C 26.01,39.934 26.389,40.31 26.857,40.31 z M 42.367,40.356 C 43.007,40.356 43.535,39.829 43.547,39.181 L 43.547,39.188 L 43.547,39.181 L 44.045,29.699 L 43.547,6.075 C 43.536,5.428 43.007,4.9 42.367,4.9 C 41.726,4.9 41.197,5.427 41.187,6.076 L 40.742,29.691 C 40.742,29.706 41.187,39.187 41.187,39.187 C 41.197,39.829 41.727,40.356 42.367,40.356 z M 34.553,40.319 C 35.11,40.319 35.559,39.872 35.574,39.302 L 35.574,39.309 L 36.18,29.695 L 35.573,9.092 C 35.558,8.522 35.109,8.076 34.552,8.076 C 33.991,8.076 33.542,8.522 33.53,9.092 L 32.991,29.696 L 33.531,39.308 C 33.543,39.872 33.992,40.319 34.553,40.319 z M 15.539,40.229 C 15.87,40.229 16.138,39.964 16.163,39.615 L 17.041,29.684 L 16.163,20.237 C 16.139,19.888 15.871,19.625 15.539,19.625 C 15.203,19.625 14.935,19.89 14.914,20.241 L 14.141,29.684 L 14.914,39.614 C 14.936,39.964 15.203,40.229 15.539,40.229 z M 8.143,39.685 C 8.385,39.685 8.581,39.494 8.609,39.23 L 9.595,29.682 L 8.61,19.774 C 8.581,19.509 8.385,19.318 8.143,19.318 C 7.898,19.318 7.702,19.51 7.677,19.774 C 7.677,19.775 6.809,29.682 6.809,29.682 L 7.677,39.228 C 7.701,39.493 7.897,39.685 8.143,39.685 z M 38.445,8.749 C 37.84,8.749 37.355,9.23 37.343,9.846 L 36.851,29.697 L 37.343,39.249 C 37.355,39.857 37.839,40.338 38.445,40.338 C 39.049,40.338 39.531,39.858 39.545,39.242 L 39.545,39.25 L 40.097,29.698 L 39.545,9.844 C 39.531,9.23 39.049,8.749 38.445,8.749 z M 23.055,40.33 C 23.473,40.33 23.818,39.989 23.838,39.554 L 24.606,29.691 L 23.838,10.813 C 23.817,10.377 23.473,10.037 23.055,10.037 C 22.633,10.037 22.289,10.378 22.271,10.813 C 22.271,10.814 21.591,29.691 21.591,29.691 L 22.272,39.558 C 22.289,39.989 22.633,40.33 23.055,40.33 z M 31.631,39.399 L 31.631,39.394 L 32.291,29.694 L 31.631,8.55 C 31.615,8.025 31.201,7.613 30.69,7.613 C 30.176,7.613 29.762,8.024 29.748,8.55 L 29.162,29.693 L 29.749,39.398 C 29.763,39.918 30.177,40.329 30.69,40.329 C 31.202,40.329 31.614,39.918 31.631,39.395 L 31.631,39.399 z M 81.549,17.506 C 79.982,17.506 78.487,17.823 77.125,18.394 C 76.215,8.086 67.571,0 57.027,0 C 54.447,0 51.932,0.508 49.711,1.367 C 48.848,1.701 48.618,2.045 48.61,2.712 L 48.61,39.012 C 48.619,39.712 49.162,40.295 49.845,40.364 C 49.874,40.367 81.344,40.383 81.548,40.383 C 87.864,40.383 92.985,35.262 92.985,28.945 C 92.985,22.628 87.865,17.506 81.549,17.506 z M 46.272,2.68 C 45.585,2.68 45.021,3.244 45.011,3.937 L 44.495,29.702 L 45.012,39.053 C 45.021,39.736 45.585,40.299 46.272,40.299 C 46.957,40.299 47.521,39.736 47.531,39.043 L 47.531,39.054 L 48.092,29.702 L 47.531,3.935 C 47.521,3.244 46.957,2.68 46.272,2.68 z M 9.236,47.654 C 7.883,47.336 7.517,47.166 7.517,46.63 C 7.517,46.252 7.822,45.861 8.736,45.861 C 9.517,45.861 10.127,46.178 10.675,46.739 L 11.906,45.545 C 11.101,44.704 10.126,44.204 8.798,44.204 C 7.114,44.204 5.749,45.155 5.749,46.704 C 5.749,48.386 6.847,48.886 8.419,49.251 C 10.028,49.616 10.321,49.861 10.321,50.41 C 10.321,51.056 9.844,51.337 8.834,51.337 C 8.017,51.337 7.249,51.057 6.651,50.36 L 5.42,51.458 C 6.066,52.409 7.311,53.006 8.736,53.006 C 11.066,53.006 12.09,51.909 12.09,50.288 C 12.09,48.434 10.59,47.971 9.236,47.654 z M 17.09,44.204 C 14.762,44.204 13.385,46.008 13.385,48.605 C 13.385,51.202 14.762,53.005 17.09,53.005 C 19.418,53.005 20.797,51.202 20.797,48.605 C 20.797,46.008 19.418,44.204 17.09,44.204 z M 17.09,51.312 C 15.713,51.312 15.139,50.129 15.139,48.606 C 15.139,47.082 15.713,45.899 17.09,45.899 C 18.469,45.899 19.041,47.082 19.041,48.606 C 19.041,50.129 18.469,51.312 17.09,51.312 z M 27.686,49.13 C 27.686,50.495 27.014,51.337 25.93,51.337 C 24.845,51.337 24.187,50.471 24.187,49.106 L 24.187,44.337 L 22.479,44.337 L 22.479,49.13 C 22.479,51.616 23.87,53.006 25.93,53.006 C 28.1,53.006 29.393,51.579 29.393,49.106 L 29.393,44.337 L 27.686,44.337 L 27.686,49.13 L 27.686,49.13 z M 36.756,47.947 C 36.756,48.423 36.78,49.495 36.78,49.812 C 36.67,49.592 36.39,49.166 36.183,48.848 L 33.158,44.336 L 31.525,44.336 L 31.525,52.872 L 33.208,52.872 L 33.208,49.116 C 33.208,48.64 33.184,47.568 33.184,47.251 C 33.293,47.47 33.575,47.897 33.781,48.215 L 36.915,52.872 L 38.439,52.872 L 38.439,44.336 L 36.756,44.336 L 36.756,47.947 L 36.756,47.947 z M 43.303,44.337 L 40.633,44.337 L 40.633,52.873 L 43.18,52.873 C 45.375,52.873 47.546,51.604 47.546,48.605 C 47.546,45.483 45.741,44.337 43.303,44.337 z M 43.18,51.215 L 42.34,51.215 L 42.34,45.996 L 43.242,45.996 C 45.047,45.996 45.791,46.861 45.791,48.605 C 45.791,50.166 44.973,51.215 43.18,51.215 z M 52.825,45.898 C 53.593,45.898 54.081,46.24 54.386,46.825 L 55.971,46.094 C 55.434,44.985 54.458,44.204 52.849,44.204 C 50.62,44.204 49.058,46.008 49.058,48.605 C 49.058,51.299 50.557,53.005 52.788,53.005 C 54.337,53.005 55.361,52.286 55.946,51.079 L 54.508,50.225 C 54.057,50.982 53.605,51.311 52.837,51.311 C 51.557,51.311 50.813,50.14 50.813,48.605 C 50.812,47.021 51.546,45.898 52.825,45.898 z M 59.156,44.337 L 57.449,44.337 L 57.449,52.873 L 62.579,52.873 L 62.579,51.189 L 59.156,51.189 L 59.156,44.337 z M 67.076,44.204 C 64.746,44.204 63.369,46.008 63.369,48.605 C 63.369,51.202 64.746,53.005 67.076,53.005 C 69.404,53.005 70.782,51.202 70.782,48.605 C 70.782,46.008 69.404,44.204 67.076,44.204 z M 67.076,51.312 C 65.697,51.312 65.125,50.129 65.125,48.606 C 65.125,47.082 65.697,45.899 67.076,45.899 C 68.452,45.899 69.025,47.082 69.025,48.606 C 69.025,50.129 68.452,51.312 67.076,51.312 z M 77.67,49.13 C 77.67,50.495 77.001,51.337 75.916,51.337 C 74.829,51.337 74.172,50.471 74.172,49.106 L 74.172,44.337 L 72.465,44.337 L 72.465,49.13 C 72.465,51.616 73.855,53.006 75.916,53.006 C 78.086,53.006 79.378,51.579 79.378,49.106 L 79.378,44.337 L 77.67,44.337 L 77.67,49.13 z M 84.181,44.337 L 81.512,44.337 L 81.512,52.873 L 84.059,52.873 C 86.255,52.873 88.424,51.604 88.424,48.605 C 88.424,45.483 86.62,44.337 84.181,44.337 z M 84.059,51.215 L 83.218,51.215 L 83.218,45.996 L 84.121,45.996 C 85.924,45.996 86.668,46.861 86.668,48.605 C 86.668,50.166 85.851,51.215 84.059,51.215 z"
  id="path2465"
  style="fill:url(#SVGID_1_)" />
</svg>`
export default hopeTheme({
  hostname: "https://djdiox.github.io/cloudcrusaders-homepage/",

  author: {
    name: "Cloud Crusader (Markus Wagner)",
    url: "https://markuswagner.dev",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "djdiox/cloudcrusaders-homepage",

  docsDir: "docs",

  blog: {
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      Email: "mailto:contact@markuswagner.dev",
      //Evernote: "https://example.com",
      SoundCloud: ['https://soundcloud.com/escalation-expert', SOUNDCLOUD_AVATAR],
      Facebook: "https://www.facebook.com/markus.wagner93",
      //Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/djdiox",
      Gitlab: "https://gitlab.com/djdiox",
      Gmail: "mailto:markuswagner93@gmail.com",
      Instagram: "https://www.instagram.com/dj.diox/",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      Linkedin: "https://www.linkedin.com/in/markus-wagner-ab1348160/",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://steamcommunity.com/id/NerdReflex/home",
      Twitter: "https://twitter.com/EscalateExpert",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      Youtube: "https://www.youtube.com/channel/UCEjjlL-5CFiagg98uDd1t0w",
      // Zhihu: "https://example.com",
      // MarkusWagner: ["https://markuswagner.dev", MR_HOPE_AVATAR],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "My personal blog by Markus Wagner (CloudCrusader, diox, Escalation Expert) (c) " + new Date().getFullYear(),

      displayFooter: true,

      blog: {
        description: "Globetrotter 🌍, Full-Stack Cloud-Developer 🧑‍💻, DJ & Producer 🎧",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/de/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "Mein persönlicher Blog von Markus Wagner (CloudCrusader, diox, Escalation Expert) (c) " + new Date().getFullYear(),

      displayFooter: true,

      blog: {
        description: "Globetrotter 🌍, Full-Stack Cloud-Entwickler 🧑‍💻, DJ & Producer 🎧",
        intro: "/de/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "Bearbeiten via GitHub"
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/de/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "djdiox/cloudcrusaders-homepage"
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
