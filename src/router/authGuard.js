import { useUserStore } from "@/stores/user.js"

const isUserAuth = (to, from, next) => {
    const userStore = useUserStore()
    if (userStore.isUser) {
        next()
    } else {
        next({ name: 'loginView' })
    }
}

export {
    isUserAuth
}
