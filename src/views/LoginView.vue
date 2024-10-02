<script setup>
import { useUserStore } from "@/stores/user.js"
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()

function loginEvent() {
  user.isUser = true

  router.push({name: 'homeView'})
}
</script>

<template>
  <el-card>
    <el-button @click="loginEvent">Войти</el-button>
  </el-card>
</template>