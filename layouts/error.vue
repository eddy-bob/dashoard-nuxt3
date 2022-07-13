<template>
  <div>
    <slot />
    <div class="w-full flex justify-center">
      <button
        @click="handleError"
        class="text-center text-blue-800 text-sm underline"
      >
        Take me back to homepage
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style></style>
