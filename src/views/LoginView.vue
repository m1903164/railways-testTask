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
  <el-main class="login-main">
    <el-card class="login-card">
      <el-form
        label-width="60px"
        label-position="right"
      >
        <el-form-item label="Email">
          <el-input class="login-input" />
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input class="login-input"/>
        </el-form-item>
      </el-form>
      <el-button  @click="loginEvent" class="login-btn">
        Войти
      </el-button>
    </el-card>
  </el-main>
</template>

<style scoped>
.login-main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.login-card {
  width: 400px;
}

.login-btn {
  width: 100%;
  border: 1px red solid;
}
</style>