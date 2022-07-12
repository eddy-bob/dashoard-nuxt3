<script setup lang="ts">
import {} from "#imports";
import { useRoute } from "vue-router";

const route = useRoute();

// define meta
definePageMeta({
  title: "Page One",
  description: "A page gotten when you visit router one",
});
</script>
<template>
  <div>router 1</div>
</template>

<style></style>
