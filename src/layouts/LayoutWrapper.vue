<script setup>
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

import { useUserStore } from "@/stores/user.js"

const user = useUserStore()

</script>

<template>
  <transition name="fade" mode="out-in">
    <HomeView v-if="user.isUser"/>
    <LoginView v-else/>
  </transition>
</template>