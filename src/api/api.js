import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {"API-KEY": "05322e14-a74e-48d6-ae9e-0c7ea20e861c"}
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    getFollow(userID, operation) {
        return (operation === 'follow' ? instance.post : instance.delete)
        (`follow/${userID}`).then(response => response.data)
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId).then(response => response.data)
    }
}
