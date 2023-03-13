<script setup lang="ts">
const props = defineProps<{
  name: string
  description: string
  iconName?: string
  url: string
}>()

const openWindow = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div
    bg="transparent hover:#88888808"
    transition
    flex
    x-gap-8
    p-4
    cursor-pointer
    @click="openWindow(props.url)"
  >
    <div v-if="props.iconName" w-10 mr-4 flex items-center justify-center>
      <div :class="props.iconName" w-8 h-8 />
    </div>
    <div flex-1 flex="~ col">
      <div text="xl">
        {{ props.name }}
      </div>
      <div text="sm gray-400/80" mt-1 flex-1 flex items-center>
        {{ props.description }}
      </div>
    </div>
  </div>
</template>
