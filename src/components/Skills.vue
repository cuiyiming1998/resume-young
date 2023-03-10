<script setup lang="ts">
import config from '~/config'

const { skills } = config
</script>

<template>
  <div>
    <Title title="Skills" />
    <div flex="~ wrap" gap-4>
      <span
        v-for="(skill) in skills"
        :key="skill"
        inline-block
        border
        rounded-lg
        p="x-2 y-1"
        cursor-default
        bg="gray-500/10"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>
