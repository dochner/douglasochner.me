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
    class="flex items-center gap-3 px-5 py-3 :hover:bg-dark-900 rounded-xl transition"
    exact-active-class="bg-dark-900"
  >
    <Icon v-if="icon" :name="icon" size="iconSize" />
    <span> {{ label }}</span>
    <Icon v-if="iconRight" :name="iconRight" size="iconSize" />
  </NuxtLink>
</template>
