<template>
  <div>router 2</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
// define meta
definePageMeta({
  title: "Page two",
  description: "A page gotten when you visit router two",
});
</script>

<style></style>
