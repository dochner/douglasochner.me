<script setup lang="ts"></script>

<template>
  <article class="row">
    <section class="h-screen relative w-col-12">
      <div class="row absolute top-0 w-full h-full h-screen">
        <div class="h-screen absolute top-0 relative w-full z-1">
          <img
            src="/avatar-full-no-bg.png"
            class="avatar-hero object-fit top-0 lg:left-0 md:h-full object-fit"
            alt="Avatar Douglas Ochner"
          />
        </div>

        <div
          class="px-12 text-center sm:text-left absolute w-xs lt-sm:bottom-0 sm:top-1/2 lt-sm:left-1/2 lt-md:-translate-x-1/2 sm:right-0 box-content z-2 md:transform -translate-y-1/2 md:px-0 md:w-1/2"
        >
          <h1
            class="font-display fw-bold text-white text-4xl md:text-7xl hero-title w-full"
          >
            Douglas Ochner
          </h1>

          <p class="sm:w-xl lg:w-3xl text-lg leading-loose my-xl">
            Let's unlock the full potential of your website, I'm a skilled
            Frontend developer with a focus in Vue and Vite. From design to
            development, I've got the experience and expertise to bring your
            vision to life. Get in touch today and let's create something
            amazing together!
          </p>

          <NuxtLink
            to="/contact-me"
            class="py-2 px-12 min-h-12 bg-primary shadow-sm rounded-full shadow-primary active:shadow-none"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>

    <section id="projects" class="h-[50vh] w-col-12 bg-primary/90">
      projects
    </section>
    <section id="testimonials" class="h-[50vh] w-col-12 bg-primary/70">
      testimonials
    </section>
    <section id="blog" class="h-[50vh] w-col-12 bg-primary/60">blog</section>
    <section id="get-in-touch" class="h-[50vh] w-col-12 bg-primary/50">
      get in touch
    </section>
    <section id="newsletter" class="h-[50vh] w-col-12 bg-primary/30">
      newsletter
    </section>
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
  filter: drop-shadow(8px 8px 8px #1d1d1dff);
}
</style>
