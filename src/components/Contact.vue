<script setup lang="ts">
import config from '~/config'

const {
  name,
  github,
  job,
  wx,
  mobile,
  email,
  address,
  description,
  birthday,
  university,
} = config
</script>

<template>
  <div>
    <h1 text="2xl center" font-bold mt-4>
      {{ name }}
    </h1>
    <h2 text="base center gray-400/90" my-2>
      {{ job }}
    </h2>
    <h2 text="base center gray-400/90" my-2>
      {{ description }}
    </h2>
    <!-- If you want to show your experience -->
    <!-- <h2 text="sm center gray-400/70" my-2>
      {{ experience }}
    </h2> -->

    <div hidden md:flex flex="col" gap-y-2 mt-4>
      <div flex items-center>
        <div i-carbon-face-cool inline-block mr-2 />
        <span>{{ birthday }}</span>
      </div>
      <div flex items-center>
        <div i-ion-university inline-block mr-2 />
        <span>{{ university }}</span>
      </div>
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
