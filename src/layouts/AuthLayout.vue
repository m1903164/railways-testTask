<script setup>
import { useRoute, useRouter } from 'vue-router'

import Header from "@/components/Header.vue"

const route = useRoute()

</script>

<template>
  <Header/>
  <div class="content-wrapper">
    <router-view v-slot="{ Component }" :key='route.name'>
      <transition name='fade' mode='out-in' appear>
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>