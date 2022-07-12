<script setup lang="ts">
const displaySideNav = ref(false);

const AppHeader = resolveComponent("AppHeader");
const SideNav = resolveComponent("SideNav");

// pass props through multiple children
provide<{ value: boolean }>("displaySideNav", displaySideNav);
// set meta data

const route = useRoute();
console.log(route.meta.description);
useHead({
  titleTemplate: (titleChunk) => {
    return route.meta.title ? `${route.meta.title}` : "";
  },
  meta: [
    {
      name: "description",
      content: route.meta.description
        ? `App Description- ${route.meta.description}`
        : "",
    },
  ],
});
</script>
<template>
  <div class="relative">
    <!-- sidenav -->
    <component
      :is="SideNav"
      @showSideNav="displaySideNav = true"
      @closeSideNav="displaySideNav = false"
      v-if="displaySideNav == true"
      class="absolute z-50 min-h-screen h-auto w-56 shadow-lg"
    />
    <!-- <LazySideNav
      @closeSideNav="displaySideNav = false"
      v-if="displaySideNav == true"
      class="absolute z-50 min-h-screen h-auto w-56 shadow-lg"
    /> -->
    <!-- header -->
    <component :is="AppHeader" @showSideNav="displaySideNav = true" />

    <!-- main -->
    <slot />
  </div>
</template>

<style>
/* @import url("@/assets/css/tailwind.css"); */

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css");

select {
  background-color: transparent;
  width: 100%;
}
.grey {
  color: rgb(106, 103, 103);
}
</style>
