<script setup lang="ts"></script>

<template>
  <div class="row h-full relative">
    <section
      class="h-[120vh] w-col-12 row justify-end lt-sm:items-end sm:items-center p-md"
    >
      <div
        class="border border-dark shadow-sm bg-black/20 backdrop-blur-sm p-xl rounded-2xl z-10 max-w-xl overflow-hidden"
      >
        <h1
          class="font-display fw-bold text-white text-3xl sm:text-4xl md:text-7xl hero-title w-full"
        >
          Douglas Ochner
        </h1>

        <p class="text-lg leading-loose my-xl">
          I'm a skilled Frontend developer with a focus in Vue and Vite. I've
          got the experience and expertise to bring your vision to life.
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
    </section>

    <section id="projects" class="sticky top-0 h-[50vh] w-col-12 bg-dark">
      <ListProjects />
    </section>
    <section id="testimonials" class="sticky top-0 h-[50vh] w-col-12 bg-dark">
      <ListTestimonials />
    </section>
    <section id="blog" class="sticky top-0 h-[50vh] w-col-12 bg-dark">
      <ListPosts />
    </section>
    <section
      id="get-in-touch"
      class="sticky top-0 h-[50vh] w-col-12 bg-dark px-md"
    >
      <div
        class="rounded-[20px] column z-2 h-full w-auto min-w-0 min-h-0 self-stretch justify-self-stretch relative m-0 z-1"
      >
        <img
          src="@/assets/images/cta-bg-768w.webp"
          class="object-cover object-center w-full h-full rounded-[20px] absolute top-0 left-0"
          srcset="
            @/assets/images/cta-bg-320w.webp 320w,
            @/assets/images/cta-bg-768w.webp 768w
          "
          alt="Get in Touch"
          sizes="(max-width: 600px) 320px,100%"
        />

        <div
          class="column items-center sm:items-start justify-center z-3 absolute text-center sm:text-left my-auto h-full p-lg w-full sm:w-col-7 md:w-col-4"
        >
          <h2 class="fw-bold text-3xl font-display w-col-12 mb-md">
            <span class="text-secondary">Let's</span> create something
            <span class="text-secondary">amazing</span> together!
          </h2>

          <p class="font-display text-sm text-light-800 w-col-12 mb-md">
            I'm always open to discussing and product/work idea, or partnership
            opportunities.
          </p>

          <NuxtLink
            to="/contact-me"
            class="py-2 px-12 bg-secondary shadow-sm rounded-full shadow-secondary active:shadow-none"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="newsletter" class="sticky top-0 h-[50vh] w-col-12 bg-dark">
      newsletter
    </section>
  </div>
</template>

<style scoped>
:root {
  --hero-t-shadow: #1d1d1daa;
}

.hero__avatar-img {
  filter: drop-shadow(-12rem -12rem 12rem #7d38a2aa)
    drop-shadow(20rem 12rem 12rem #001f62af);
}
</style>
