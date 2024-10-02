import { defineStore } from 'pinia'
import {reactive} from "vue";

export const useUserStore = defineStore('user', () => {
    const userData = reactive({
        email: '',
        password: ''
    })

    const isUser = false

    return {
        userData,
        isUser
    }
})

