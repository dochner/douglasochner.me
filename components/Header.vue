<script setup lang="ts">
const isOpen = ref(false);
const toggle = useToggle(isOpen);

const body = document.querySelector("body");

watch(isOpen, (value) => {
  body?.classList.toggle("overflow-hidden", value);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-30 h-$header-size bg-black/20 row shadow-md w-full backdrop-blur-sm"
  >
    <div
      class="w-col-12 md:w-col-10 md:offset-1 xl:w-col-8 xl:offset-2 row justify-between items-center pa-md"
    >
      <NuxtLink
        class="font-display block text-4xl fw-extrabold select-none outline-none p-4"
        to="/"
        focusable="false"
      >
        ochner
      </NuxtLink>

      <button
        class="bg-primary text-white shadow-4 transition-all active:shadow-none rounded-15px block w-48px h-48px text-center row items-center justify-center"
        @click="toggle()"
      >
        <div
          class="text-lg i-bx-menu-alt-right mx-auto"
          :class="{ 'i-bx-x': isOpen }"
        />
      </button>
    </div>

    <aside
      class="h-screen row justify-end w-full backdrop-blur-sm bg-white/12 absolute top-0 transition-all duration-250 transform scale-100 shadow-2 origin-left"
      :class="{ 'scale-0 opacity-0 invisible': !isOpen }"
      @click="toggle()"
    >
      <div
        class="w-full sm:w-350px bg-dark-700 p-4 pt-$header-height"
        @click.stop
      >
        <button
          class="bg-primary text-white shadow-4 transition-all active:shadow-none rounded-15px block w-48px h-48px text-center row items-center justify-center absolute top-md right-md"
          @click="toggle()"
        >
          <div
            class="text-lg i-bx-menu-alt-right mx-auto"
            :class="{ 'i-bx-x': isOpen }"
          />
        </button>
        <nav class="nav grid dark:text-gray-200 text-3xl fw-bold font-display">
          <NuxtLink
            exact-active-class="bg-primary-600"
            to="/"
            title="Home"
            class="flex items-center gap-3 px-5 py-3 focus:hover:bg-primary-600 rounded-xl"
          >
            <span class="block">Home</span>
          </NuxtLink>
          <NuxtLink
            exact-active-class="bg-primary-600"
            to="/projects"
            title="Projects"
            class="flex items-center gap-3 px-5 py-3 focus:hover:bg-primary-600 rounded-xl"
          >
            <span class="block">Projects</span>
          </NuxtLink>
          <NuxtLink
            exact-active-class="bg-primary-600"
            to="/contact-me"
            title="Contact me"
            class="flex items-center gap-3 px-5 py-3 focus:hover:bg-primary-600 rounded-xl"
          >
            <span class="block">Contact me</span>
          </NuxtLink>
          <NuxtLink
            exact-active-class="bg-primary-600"
            to="/about"
            title="About"
            class="flex items-center gap-3 px-5 py-3 focus:hover:bg-primary-600 rounded-xl"
          >
            <span class="block">About</span>
          </NuxtLink>
          <NuxtLink
            exact-active-class="bg-primary-600"
            to="/blog"
            title="Blog"
            class="flex items-center gap-3 px-5 py-3 focus:hover:bg-primary-600 rounded-xl"
          >
            <span class="block">Blog</span>
          </NuxtLink>
          <NuxtLink
            exact-active-class="bg-primary-600"
            to="/bookmarks"
            title="Bookmarks"
            class="flex items-center gap-3 px-5 py-3 focus:hover:bg-primary-600 rounded-xl"
          >
            <span class="block">Bookmarks</span>
          </NuxtLink>
        </nav>
        <div class="flex gap-4 p-4 mt-auto text-2xl">
          <IconLink href="https://github.com/dochner" title="GitHub">
            <div i-bx-bxl-github />
          </IconLink>
          <IconLink
            href="https://linkedin.com/in/douglasochner"
            title="Linkedin"
          >
            <div i-bx-bxl-linkedin />
          </IconLink>

          <ToggleTheme />

          <IconLink href="/feed.xml" title="RSS" new-tab>
            <div i-bx-rss style="font-size: 1.25rem" />
          </IconLink>
        </div>
      </div>
      <!-- <button
        class="bg-primary text-white shadow-1 rounded-15px block w-48px h-48px text-center row items-center justify-center !lt-md:hidden"
        @click="toggle()"
      >
        <div class="
         i-bx-menu-alt-right mx-auto" />
      </button> -->
    </aside>
  </header>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
