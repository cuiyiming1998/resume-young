<script setup lang="ts">
import config from '~/config'

const { name, github, wx, mobile, email, address, experience } = config
</script>

<template>
  <div>
    <h1 text="2xl center" font-bold mt-4>
      {{ name }}
    </h1>
    <h2 text="base center gray-400/80" my-2>
      {{ experience }}
    </h2>

    <div hidden md:flex flex="col" gap-y-2 mt-4>
      <div flex items-center>
        <div i-carbon-logo-github inline-block mr-2 />
        <a :href="github" icon-btn text-base>Github</a>
      </div>
      <div flex items-center>
        <div i-carbon-logo-wechat inline-block mr-2 />
        <span>{{ wx }}</span>
      </div>
      <div flex>
        <div i-carbon-application-mobile inline-block mr-2 />
        <span>{{ mobile }}</span>
      </div>
      <div flex items-center>
        <div i-carbon-email-new inline-block mr-2 />
        <span>{{ email }}</span>
      </div>
      <div flex items-center>
        <div i-carbon-campsite inline-block mr-2 />
        <span>{{ address }}</span>
      </div>
    </div>
  </div>
</template>
