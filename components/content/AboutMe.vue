<script setup lang="ts"></script>

<template>
  <article class="row relative">
    <div class="h-[50vh] md:h-screen relative w-full">
      <img
        src="/avatar-full-no-bg.png"
        class="avatar-hero object-fit absolute top-0 left-0 h-full md:h-full object-fit"
        alt="Avatar Douglas Ochner"
      />
    </div>

    <h1
      class="font-display fw-bold text-7xl text-black dark:text-white w-full hero-title absolute top-11/12 w-full text-center"
    >
      Douglas Ochner
    </h1>
  </article>
</template>

<style scoped>
:root {
  --hero-t-shadow: #1d1d1daa;
}

.avatar-hero {
  filter: drop-shadow(-12rem -12rem 12rem #7d38a2aa)
    drop-shadow(20rem 12rem 12rem #001f62af);
}

.hero-title {
  filter: drop-shadow(8px 8px 32px var(--heor-t-shadow));
}
</style>
