import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
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
      routes: ["/feed.atom", "/feed.xml", "/feed.json", "/sitemap.xml"],
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
    { path: "@/components", pathPrefix: false },
    { path: "@/components/content", pathPrefix: false },
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
  nuxtIcon: {
    size: "24px",
  },
  unocss: {
    uno: true,
    preflight: true,
    typography: true,
    attributify: true,
    shortcuts: [
      {
        link: "block text-coolgray-500 dark:text-coolgray-400 hover:text-sky-500 dark:hover:text-sky-500 underline underline-dashed underline-offset-3",
      },
      { row: "flex flex-wrap flex-row w-auto min-w-0 max-w-full" },
      { column: "flex flex-wrap flex-col h-auto min-h-0 max-h-full" },
      { "no-wrap": "flex-nowrap" },
      { "text-card-title": "text-base font-display font-medium tracking-wide" },
      { "home-section-title": "font-display text-dark text-2xl font-medium" },
      { "text-paragraph": "text-dark text-lg mb-md" },
      [
        /^offset-(.*)$/,
        ([, d]) => {
          if (Number(d) >= 1 && Number(d) <= 12)
            return `m-l-${(100 / 12) * Number(d)}%`;
        },
      ],
    ],
    theme: {
      breakpoints: {
        xs: "320px",
        sm: "640px",
        md: "1240px",
        lg: "1440px",
        xl: "1920px",
        "2xl": "2560px",
      },

      fontFamily: {
        sans: '"Roboto",system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        display:
          '"Poppins",system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",

        dark: {
          DEFAULT: "#1f1f1f",
          page: "#2f2f2f",
          accent: "#3f3f3f",
        },

        primary: {
          DEFAULT: "#7d38a2",
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

        secondary: {
          DEFAULT: "#001f62",
          100: "#ccd2e0",
          200: "#99a5c0",
          300: "#6679a1",
          400: "#334c81",
          500: "#001f62",
          600: "#00194e",
          700: "#00133b",
          800: "#000c27",
          900: "#000614",
        },

        positive: "#7af27a",
        negative: "#b2111c",
        info: "#53b7eb",
        warning: "#ffd41d",

        accent: "linear-gradient(180deg, #7d38a2 0%, #001f62 100%)",
      },

      spacing: {
        DEFAULT: "1rem",
        "0": "0px",
        none: "0px",
        auto: "auto",
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },

      width: {
        "col-1": "8.333333333333334%",
        "col-2": "16.666666666666668%",
        "col-3": "25%",
        "col-4": "33.33333333333333%",
        "col-5": "41.66666666666667%",
        "col-6": "50%",
        "col-7": "58.333333333333336%",
        "col-8": "66.66666666666667%",
        "col-9": "75%",
        "col-10": "83.33333333333334%",
        "col-11": "91.66666666666667%",
        "col-12": "100%",
        prose: "65ch",
      },

      height: {
        "col-1": "8.333333333333334%",
        "col-2": "16.666666666666668%",
        "col-3": "25%",
        "col-4": "33.33333333333333%",
        "col-5": "41.66666666666667%",
        "col-6": "50%",
        "col-7": "58.333333333333336%",
        "col-8": "66.66666666666667%",
        "col-9": "75%",
        "col-10": "83.33333333333334%",
        "col-11": "91.66666666666667%",
        "col-12": "100%",
        prose: "65ch",
      },

      zIndex: {
        auto: "auto",
        0: "0",
        inherit: "inherit",
        marginals: "2000",
        fullscreen: "6000",
        notify: "9500",
        max: "9998",
      },

      blur: {
        DEFAULT: "4px",
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "48px",
      },
      dropShadow: {
        DEFAULT:
          "0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)",
        "0": "0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 rgba(0, 0, 0, 0.12)",
        "1": "0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)",
        "2": "0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)",
        "3": "0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12)",
        "4": "0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12)",
        "dark-0":
          "0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 rgba(255, 255, 255, 0.14), 0 0 0 rgba(255, 255, 255, 0.12)",
        "dark-1":
          "0 1px 3px rgba(255, 255, 255, 0.2), 0 1px 1px rgba(255, 255, 255, 0.14), 0 2px 1px -1px rgba(255, 255, 255, 0.12)",
        "dark-2":
          "0 1px 5px rgba(255, 255, 255, 0.2), 0 2px 2px rgba(255, 255, 255, 0.14), 0 3px 1px -2px rgba(255, 255, 255, 0.12)",
        "dark-3":
          "0 1px 8px rgba(255, 255, 255, 0.2), 0 3px 4px rgba(255, 255, 255, 0.14), 0 3px 3px -2px rgba(255, 255, 255, 0.12)",
        "dark-4":
          "0 2px 4px -1px rgba(255, 255, 255, 0.2), 0 4px 5px rgba(255, 255, 255, 0.14), 0 1px 10px rgba(255, 255, 255, 0.12)",
      },

      boxShadow: {
        none: "none",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        DEFAULT:
          "0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)",
        "0": "0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 rgba(0, 0, 0, 0.12)",
        "1": "0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)",
        "2": "0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)",
        "3": "0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12)",
        "4": "0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12)",
        "dark-0":
          "0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 rgba(255, 255, 255, 0.14), 0 0 0 rgba(255, 255, 255, 0.12)",
        "dark-1":
          "0 1px 3px rgba(255, 255, 255, 0.2), 0 1px 1px rgba(255, 255, 255, 0.14), 0 2px 1px -1px rgba(255, 255, 255, 0.12)",
        "dark-2":
          "0 1px 5px rgba(255, 255, 255, 0.2), 0 2px 2px rgba(255, 255, 255, 0.14), 0 3px 1px -2px rgba(255, 255, 255, 0.12)",
        "dark-3":
          "0 1px 8px rgba(255, 255, 255, 0.2), 0 3px 4px rgba(255, 255, 255, 0.14), 0 3px 3px -2px rgba(255, 255, 255, 0.12)",
        "dark-4":
          "0 2px 4px -1px rgba(255, 255, 255, 0.2), 0 4px 5px rgba(255, 255, 255, 0.14), 0 1px 10px rgba(255, 255, 255, 0.12)",
      },
    },
    icons: {
      warn: true,
      scale: 1.5,
    },
    webFonts: {
      provider: "google",
      fonts: {
        sans: "Roboto",
        display: [
          {
            name: "Poppins",
            weights: ["400", "600", "700", "800", "900"],
            italic: false,
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    },
  },
});
