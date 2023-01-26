<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
  iconRight: String,
  iconSize: {
    type: String,
    default: "24px",
  },
  to: String,
});

const isExternal = computed(() => props?.to?.startsWith("http"));

const linkProps = computed(() => ({
  [isExternal.value ? "href" : "to"]: props.to,
  ...(isExternal.value
    ? { target: "_blank", rel: "noopener noreferrer nofollow" }
    : {}),
}));
</script>

<template>
  <NuxtLink
    v-bind="linkProps"
    class="grid grid-cols-[max-content_1fr_max-content] items-center gap-3 px-5 text-lg rounded-xl transition border-px shadow-sm border-transparent shadow-transparent h-48px"
    active-class="bg-gradient-to-r from-primary-600 to-primary-700 shadow-primary border-primary-500"
  >
    <Icon v-if="icon" :name="icon" :size="iconSize" />
    <span> {{ label }}</span>
    <Icon v-if="iconRight" :size="iconSize" />
  </NuxtLink>
</template>
