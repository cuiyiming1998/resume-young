<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div flex="~ col md:row" gap-x-2 gap-y-8>
    <div w="full md:1/3">
      <Profile />
    </div>
    <div w="full md:2/3">
      <Skills />
    </div>
  </div>
</template>
