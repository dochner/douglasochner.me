<script setup>
const props = defineProps({
  label: String,
  modelValue: Boolean,
  headerClass: String,
  contentClass: String,
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

const setValue = (value) => {
  isOpen.value = value;
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="d-expansion-item" @click="setValue(!isOpen)">
    <div class="d-expansion-wrapper relative outline-0">
      <div
        class="d-expansion-item-header transition-all min-h-12 duration-150 row items-center justify-between cursor-pointer py-2 px-4"
        :class="headerClass"
      >
        <slot name="label">
          {{ label }}
        </slot>
        <div
          class="d-expansion-item-header-icon transition-all transform row items-center justify-center w-8 h-8 rounded-full"
          :class="{ 'rotate-180': isOpen }"
        >
          <slot name="icon">
            <Icon
              class="transition-transform duration-150 rotate-0"
              name="bx:down-arrow-alt"
            />
          </slot>
        </div>
      </div>
      <SlideTransition @click.stop="() => {}">
        <div v-show="isOpen" :class="contentClass">
          <slot />
        </div>
      </SlideTransition>
    </div>
  </div>
</template>
