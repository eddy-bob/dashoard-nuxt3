<template>
  <div>router 3</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
//define meta
definePageMeta({
  title: "Page three",
  description: "A page gotten when you visit router three",
});
</script>

<style></style>
