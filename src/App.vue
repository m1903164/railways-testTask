<script setup>
import LayoutWrapper from '../src/layouts/LayoutWrapper.vue'
</script>

<template>
  <suspense>
    <LayoutWrapper/>
  </suspense>
  <RouterView/>
</template>