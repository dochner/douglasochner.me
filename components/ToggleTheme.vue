<script setup lang="ts">
const colorMode = useColorMode();

const modes = ["system", "dark", "light"];

const toggle = () => {
  colorMode.preference =
    modes[(modes.indexOf(colorMode.preference) + 1) % modes.length];
};
</script>

<template>
  <button
    aria-label="Toggle Theme"
    class="p-1 flex justify-center items-center"
    @click="toggle()"
  >
    <div v-if="$colorMode.preference === 'system'" i-bx-laptop />
    <div v-else-if="$colorMode.preference === 'dark'" i-bx-moon />
    <div v-else i-bx-sun />
  </button>
</template>
