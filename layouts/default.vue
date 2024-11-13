<script setup lang="ts">
const route = useRoute()
console.log(route);
</script>
<template>
    <div class="">
      <BaseNavigation />
      <slot />
  
    </div>
  </template>