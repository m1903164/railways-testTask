<script setup>
import LoginView from '../views/LoginView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import { useUserStore } from "@/stores/user.js"

const user = useUserStore()
</script>

<template>
  <transition name="fade" mode="out-in">
    <div class="container" v-if="user.isUser">
      <AuthLayout />
    </div>
    <div class="login-container" v-else>
      <LoginView />
    </div>
  </transition>
</template>

<style scoped>
.container {
  height: 100vh;
}

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>