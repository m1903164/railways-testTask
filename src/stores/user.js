import { defineStore } from 'pinia'
import {ref, reactive} from "vue";

export const useUserStore = defineStore('user', () => {
    const userData = reactive({
        email: '',
        password: ''
    })

    const isUser = ref(false)

    return {
        userData,
        isUser
    }
})

