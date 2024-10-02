import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const isUser = false

    return {
        isUser
    }
})

