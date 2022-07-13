<template>
  <div class="flex justify-center py-5">
    <NuxtLayout name="error">
      <div>
        <h1 class="text-red-500 text-[10rem] font-extrabold text-center">
          404
        </h1>
        <div class="w-full flex justify-center">
          <img src="/images/svg/sadface.svg" alt="sad face" class="w-[40%]" />
        </div>
        <div class="text-center">
          <p>seems you are lost?</p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

// define meta

definePageMeta({
  title: "Page not found",
  description: "A page gotten when you visit route that doesnt exist",
});
</script>

<style></style>
