import axios from "axios";

const instance = axios.create({
    withCredentials: true, baseURL: "https://social-network.samuraijs.com/api/1.0/", headers: {
        "API-KEY": "64b4d118-e3b8-47de-a70e-563a8b9d0ed6",
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }, follow(userId) {
        return instance.post(`follow/${userId}`)
    }, unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status});
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}


