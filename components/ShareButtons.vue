<script setup lang="ts">
const route = useRoute();
const domain = useRuntimeConfig().public.domain;

const currentPath = computed(() =>
  encodeURIComponent(`${domain}${route.path}`)
);

const { copy, copied } = useClipboard({
  read: false,
  source: currentPath,
});
const { page } = useContent();
</script>

<template>
  <div v-if="page.type === 'post'" class="text-xl -mx-1 flex space-x-3 mt-8">
    <a
      :href="`https://www.facebook.com/sharer/sharer.php?u=${currentPath}`"
      class="icon-link"
      target="_blank"
      rel="noopener"
      title="Share to Facebook"
    >
      <div i-bx-bxl-facebook />
    </a>
    <a
      :href="`https://twitter.com/intent/tweet?url=${currentPath}`"
      class="icon-link transform scale-130"
      target="_blank"
      rel="noopener"
      title="Share to Twitter"
    >
      <div i-bx-bxl-twitter />
    </a>
    <a
      :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentPath}`"
      class="icon-link"
      target="_blank"
      rel="noopener"
      title="Share to Line"
    >
      <div i-bx-bxl-linkedin />
    </a>
    <a
      :href="`mailto:?subject=I want to share this with you &amp;body=Hi there, Check out this site ${currentPath}, Thanks.`"
      class="icon-link"
      target="_blank"
      rel="noopener"
      title="Share via Email"
    >
      <div i-bx-bxs-envelope />
    </a>
    <button
      class="icon-link focus:outline-none transform scale-70"
      title="Copy link"
      @click="copy(currentPath)"
    >
      <div v-if="!copied" i-bx-link />
      <div v-else i-bx-check />
    </button>
  </div>
</template>
