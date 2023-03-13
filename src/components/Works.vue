<script setup lang="ts">
import config from '~/config'

const { works } = config
</script>

<template>
  <div>
    <Title title="Work Experiences" />
    <div
      v-for="(work, index) in works"
      :key="index"
      flex="~ col"
      p="y-2 x-2 md:x-0"
      bg="transparent hover:#88888808"
      transition
    >
      <div>{{ work.company }} ( {{ work.startTime }} ~ {{ work.endTIme }} )</div>
      <div mt-2 text="gray-400/90">
        {{ work.job }}
      </div>
      <div mt-2 text="gray-400/90">
        {{ work.description }}
      </div>
    </div>
  </div>
</template>
