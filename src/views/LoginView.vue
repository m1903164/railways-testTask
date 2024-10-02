<script setup>
import { useUserStore } from "@/stores/user.js"
import { useRouter } from 'vue-router'
import {ref, reactive} from "vue"

const user = useUserStore()
const router = useRouter()

const formComponent = ref(null)
const formData = reactive({
  email: '',
  password: ''
})
const formDataRules = {
  email: [
    { required: true, message: 'Это поле обязательно для заполнения', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Это поле обязательно для заполнения', trigger: 'blur' }
  ],
}

function loginEvent() {
  formComponent.value.validate((valid) => {
    if (!valid) return

    user.isUser = true

    Object.assign(user.userData, formData)

    router.push({name: 'homeView'})
  })
}
</script>

<template>
  <el-main class="login-main">
    <el-card class="login-card">
      <h1>Войти</h1>
      <el-form
          ref='formComponent'
          :model='formData'
          :rules='formDataRules'
          label-width="60px"
          label-position="top"
      >
        <el-form-item prop='email' label="Email">
          <el-input class="login-input" v-model="formData.email"/>
        </el-form-item>
        <el-form-item prop='password' label="Пароль">
          <el-input class="login-input" v-model="formData.password"/>
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
}
</style>