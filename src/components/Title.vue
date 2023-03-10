<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1 block text="4xl center md:left" font-bold mb-4>
    {{ props.title }}
  </h1>
</template>
