import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const unoColors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",

  primary: {
    100: "#decde8",
    200: "#be9bd1",
    300: "#9d6ab9",
    400: "#7d38a2",
    500: "#5c068b",
    600: "#4a056f",
    700: "#370453",
    800: "#250238",
    900: "#12011c",
  },
};

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content-edge",
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Douglas Gabriel Ochner",
      meta: [
        { property: "og:title", content: "Douglas Gabriel Ochner" },
        {
          property: "og:image",
          content: "https://douglasochner.me/avatar.png",
        },
        { property: "og:type", content: "website" },
        { name: "description", content: "Douglas Gabriel Ochner's Portfolio" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "msapplication-TileColor", content: "#000" },
        { name: "theme-color", content: "#000" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Douglas Gabriel Ochner's Blog",
          href: "/feed.xml",
        },
      ],
      noscript: [{ children: "Javascript is required" }],
      htmlAttrs: {
        prefix: "og: http://ogp.me/ns#",
        lang: "en",
        class: "font-sans",
      },
    },
  },
  runtimeConfig: {
    public: {
      domain: "https://douglasochner.me",
    },
  },
  nitro: {
    prerender: {
      routes: ["/feed.xml", "/feed.json"],
    },
    routeRules: {
      "/images/**": {
        headers: { "cache-control": "immutable, max-age=31536000" },
      },
      "/_ipx/_/**": { redirect: "/:splat" },
    },
  },
  css: ["@/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/content", pathPrefix: false },
  ],
  content: {
    documentDriven: true,
    highlight: {
      preload: ["vue", "ts"],
      theme: {
        dark: "vitesse-dark",
        light: "vitesse-light",
        default: "vitesse-light",
      },
    },
    markdown: {
      remarkPlugins: ["remark-breaks"],
    },
    experimental: {
      clientDB: false,
      stripQueryParameters: true,
    },
  },
  unocss: {
    uno: true,
    icons: {
      scale: 1.2,
      warn: true,
    },
    attributify: {
      strict: true,
    },
    preflight: true,
    theme: {
      fontFamily: {
        sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },

      colors: {
        ...unoColors,
      },
    },
    transformers: [transformerVariantGroup(), transformerDirectives()],
    shortcuts: {
      "icon-link":
        "block text-coolgray-500 dark:text-coolgray-400 hover:text-sky-500 dark:hover:text-sky-500",
    },
    rules: [],
  },
});
