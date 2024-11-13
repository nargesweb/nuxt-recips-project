<script setup lang="ts">
const route = useRoute()
console.log(route);
</script>
<template>
    <div class="">
      <HeaderApp >
    </HeaderApp>
    this is login page
      <slot />
    </div>
  </template>