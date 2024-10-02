<script setup>
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import { useUserStore } from "@/stores/user.js"

const user = useUserStore()

</script>

<template>
  <transition name="fade" mode="out-in">
    <div v-if="user.isUser">
      <AuthLayout/>
    </div>
    <div v-else>
      <LoginView/>
    </div>
  </transition>
</template>