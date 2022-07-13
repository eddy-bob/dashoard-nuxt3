<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
// inject global state
const displaySideNav = inject<{ value: boolean }>("displaySideNav");

// define meta
definePageMeta({
  title: "Page two",
  description: "A page gotten when you visit router two",
});
</script>
<template>
  <div @click="displaySideNav = false" class="min-w-screen min-h-screen">
    <div class="">
      <div class="flex justify-center">
        <p>router 2</p>
      </div>
    </div>
  </div>
</template>
<style></style>
