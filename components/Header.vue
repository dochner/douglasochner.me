<script setup lang="ts">
const isOpen = ref(false);
const toggle = useToggle(isOpen);

if (typeof document !== "undefined") {
  const body = document?.querySelector("body");

  watch(isOpen, (value) => {
    body?.classList.toggle("overflow-hidden", value);
  });
}
</script>

<template>
  <header
    class="fixed top-0 left-0 z-30 h-$header-height bg-white/4 backdrop-blur-lg row items-center shadow-md w-full backdrop-blur-sm box-border"
  >
    <div class="w-full md:max-w-screen-md mx-auto row items-center">
      <NuxtLink
        class="font-display block text-4xl fw-extrabold select-none outline-none p-4"
        to="/"
        focusable="false"
      >
        ochner
      </NuxtLink>

      <div class="lt-md:hidden ml-auto">
        <nav class="row items-center text-gray-200 text-xl font-display">
          <HeaderNavItem label="About me" to="/" icon="bx:id-card" />
          <HeaderNavItem label="Projects" to="/projects" icon="bx:briefcase" />
          <HeaderNavItem label="Blog" to="/blog" icon="bx:bxl-blogger" />
          <HeaderNavItem
            label="Contact me"
            to="/contact-me"
            icon="bx:message"
          />

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

            <IconLink href="/feed.xml" title="RSS" new-tab>
              <div i-bx-rss style="font-size: 1.25rem" />
            </IconLink>
          </div>
        </nav>
      </div>

      <button
        class="bg-primary text-white shadow-4 transition-all duration-500 hidden !lt-md:block absolute right-md md:right-1/12 xl:right-2/12 active:shadow-none rounded-15px block w-48px h-48px text-center items-center justify-center"
        :class="{ 'z-3 !right-md': isOpen }"
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
        <nav class="grid gap-4 text-gray-200 text-xl font-display">
          <HeaderNavItem label="About me" to="/" icon="bx:id-card" />
          <HeaderNavItem label="Projects" to="/projects" icon="bx:briefcase" />
          <HeaderNavItem label="Blog" to="/blog" icon="bx:bxl-blogger" />
          <HeaderNavItem
            label="Contact me"
            to="/contact-me"
            icon="bx:message"
          />

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

            <IconLink href="/feed.xml" title="RSS" new-tab>
              <div i-bx-rss style="font-size: 1.25rem" />
            </IconLink>
          </div>
        </nav>
      </div>
    </aside>
  </header>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
