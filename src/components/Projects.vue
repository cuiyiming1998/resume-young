<script setup lang="ts">
import config from '~/config'

const { projects } = config
</script>

<template>
  <div>
    <Title title="Projects" />
    <div flex="~ wrap" gap-4>
      <div
        v-for="project in projects" :key="project.name"
        w="full md:48%"
      >
        <ProjectItem
          :name="project.name"
          :description="project.description"
          :icon-name="project.iconName"
          :url="project.url"
        />
      </div>
    </div>
  </div>
</template>
