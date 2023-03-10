<script setup lang="ts">
import config from '~/config'

const { avatar } = config
</script>

<template>
  <div>
    <img
      class="h-40 w-40 rounded-full mx-auto"
      :src="avatar"
    >
  </div>
</template>
