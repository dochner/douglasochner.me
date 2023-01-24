<script setup lang="ts">
const isOpen = ref(false);
const toggle = useToggle(isOpen);
</script>

<template>
  <header class="md:hidden fixed top-0 left-0 z-30">
    <button class="p-6 text-xl" @click="toggle()">
      <div i-ri-menu-2-fill />
    </button>
  </header>
  <aside
    class="h-[calc(100vh-96px)] flex flex-col bg-$c-bg md:(sticky top-12) lt-md:(fixed pt-10 px-3 w-full h-full z-20)"
    :class="{ 'lt-md:!hidden': !isOpen }"
  >
    <header class="py-4">
      <NuxtLink
        class="block text-3xl font-bold select-none outline-none p-4"
        to="/"
        focusable="false"
      >
        Ochner
      </NuxtLink>
    </header>
    <nav class="nav grid dark:text-gray-200">
      <NuxtLink
        to="/"
        title="Home"
        class="flex items-center gap-3 px-5 py-3 hover:bg-white dark:hover:bg-dark-900 rounded-xl transition"
      >
        <div i-bx-home />
        <span class="block text-lg">Home</span>
      </NuxtLink>
      <NuxtLink
        to="/blog"
        title="Blog"
        class="flex items-center gap-3 px-5 py-3 hover:bg-white dark:hover:bg-dark-900 rounded-xl transition"
      >
        <div i-bx-bxl-blogger />
        <span class="block text-lg">Blog</span>
      </NuxtLink>
      <NuxtLink
        to="/bookmarks"
        title="Bookmarks"
        class="flex items-center gap-3 px-5 py-3 hover:bg-white dark:hover:bg-dark-900 rounded-xl transition"
      >
        <div i-bx-bookmark />
        <span class="block text-lg">Bookmarks</span>
      </NuxtLink>
    </nav>
    <div class="flex gap-4 p-4 mt-auto">
      <IconLink href="https://github.com/dochner" title="GitHub">
        <div i-bx-bxl-github />
      </IconLink>
      <IconLink href="/feed.xml" title="RSS" new-tab>
        <div i-bx-rss style="font-size: 1.25rem" />
      </IconLink>
      <ToggleTheme />
    </div>
  </aside>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
