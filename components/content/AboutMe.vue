<script setup lang="ts"></script>

<template>
  <div class="row h-full relative">
    <section
      class="h-[120vh] w-col-12 row justify-end lt-sm:items-end sm:items-center p-md"
    >
      <div
        class="border border-dark shadow-sm bg-black/20 backdrop-blur-sm p-xl rounded-2xl z-10 max-w-xl overflow-hidden md:mt-70px"
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

    <section id="projects" class="w-col-12 py-20 px-md">My projects...</section>
    <section id="projects" class="w-col-12 py-20 px-md">
      Testimonials...
    </section>
    <section id="projects" class="w-col-12 py-20 px-md">My Skills...</section>
    <section id="projects" class="w-col-12 py-20 px-md">My Timeline...</section>

    <section id="get-in-touch" class="sticky top-0 w-col-12 px-md">
      <div
        class="w-full bg-gradient-to-b from-secondary-700 rounded-20px to-black px-12 py-30 grid grid-cols-1 md:grid-cols-[max-content_1fr_1fr] gap-4 items-center"
      >
        <h2 class="fw-bold text-3xl font-display w-col-12 max-w-md mb-md">
          <span class="text-primary">Let's</span> create something
          <span class="text-primary">amazing</span> together!
        </h2>

        <p class="font-display text-sm text-light-800 w-col-12 mb-md">
          I'm always open to discussing and product/work idea, or partnership
          opportunities.
        </p>

        <NuxtLink
          to="/contact-me"
          class="py-2 px-12 max-w-max bg-primary shadow-sm rounded-full shadow-primary active:shadow-none"
        >
          Get in Touch
        </NuxtLink>
      </div>
    </section>
    <section id="newsletter" class="sticky top-0 w-col-12 px-md pb-20">
      <h2
        class="fw-bold text-3xl font-display w-col-12 mt-2xl mb-xl text-center"
      >
        <span class="text-primary">Leave</span> a message
      </h2>
      <form action="" class="row" @submit.prevent="() => ({})">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            class="w-full p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-dark focus:outline-primary focus:ring-primary focus:border-primary ring-2 ring-transparent"
            placeholder="Name"
          />
          <input
            type="email"
            class="w-full p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-dark focus:outline-primary focus:ring-primary focus:border-primary ring-2 ring-transparent"
            placeholder="Email"
          />
        </div>
        <textarea
          id=""
          name=""
          cols="30"
          rows="10"
          class="w-full p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-dark mt-4 focus:outline-primary focus:ring-primary focus:border-primary ring-2 ring-transparent"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          class="py-2 px-12 bg-primary shadow-sm rounded-full shadow-primary active:shadow-none mt-4 w-full md:w-xs mx-auto"
        >
          <span>Send</span>
          <span class="i-bx-send text-lg"></span>
        </button>
      </form>
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
