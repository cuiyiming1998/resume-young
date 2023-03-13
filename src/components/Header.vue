<script setup lang="ts">
const github = 'https://github.com/cuiyiming1998/resume-young'
</script>

<template>
  <div p-4 text-right>
    <a class="icon-btn mx-2" rel="noreferrer" :href="github" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
  </div>
</template>
