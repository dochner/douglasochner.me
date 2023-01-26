<template>
  <div
    class="border border-dark shadow-sm bg-black/20 backdrop-blur-sm p-xl rounded-2xl z-10 max-w-xl overflow-hidden md:mt-70px"
  >
    <h1
      class="font-display fw-bold text-white text-3xl sm:text-4xl md:text-7xl hero-title w-full"
    >
      Douglas Ochner
    </h1>

    <p class="text-lg leading-loose my-xl">
      I'm a skilled Frontend developer with a focus in Vue and Vite. I've got
      the experience and expertise to bring your vision to life.
      <br />
      Let's create something amazing together!
      <br />
    </p>

    <NuxtLink
      to="/contact-me"
      class="py-4 px-12 bg-primary shadow-sm rounded-full shadow-primary active:shadow-none"
    >
      Get in Touch
    </NuxtLink>
  </div>

  <div class="row absolute top-0 w-full h-full sm:left--48 md:left-0">
    <div class="h-screen sticky top-0 relative z-1">
      <img
        src="/avatar-full-no-bg.png"
        class="hero__avatar-img h-screen w-full object-contain"
        alt="Avatar Douglas Ochner"
      />
    </div>
  </div>
</template>

<style scoped>
.hero__avatar-img {
  filter: drop-shadow(-12rem -12rem 12rem #7d38a2aa)
    drop-shadow(20rem 12rem 12rem #001f62af);
}
</style>
