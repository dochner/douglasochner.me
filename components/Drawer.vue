<script setup lang="ts">
defineProps({
  isOpen: Boolean,
});

defineEmits(["update:isOpen"]);
</script>

<template>
  <aside
    class="h-[calc(100vh-96px)] flex flex-col bg-$c-bg md:(sticky top-12) lt-md:(fixed pt-10 px-3 w-full h-full z-20)"
    :class="{ 'lt-md:!hidden': !isOpen }"
  >
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
