import * as axios from 'axios';

const initialAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "f0d3c4b5-148d-4cc0-8dde-53b6f59972c8"
    },
});

export const authAPI = {
    authMe() {
        return (
            initialAPI.get('auth/me')
                .then((response) => {
                    return response.data
                })
        )
    },
    singIn(email, password, captcha = null) {
        return (
            initialAPI.post('/auth/login', { email: email, password: password, captcha: captcha })
                .then((response) => {
                    return response.data
                })

        )
    },
    singOut() {
        return (
            initialAPI.delete('/auth/login')
        )
    }
}

export const userAPI = {
    getUsers(currentPage = 1, countUsers = 10) {
        return (
            initialAPI.get(`users?page=${currentPage}&count=${countUsers}`)
                .then((response) => {
                    return response.data
            })
        )
    },
    followUser(userId) {
        return (
            initialAPI.post(`follow/${userId}`)
                .then((response) => {
                    return response.data
            })
        )
    },
    unFollowUser(userId) {
        return (
            initialAPI.delete(`follow/${userId}`)
                .then((response) => {
                    return response.data
                })
        )
    },
}

export const profileAPI = {
    userProfile(userId) {
        return (
            initialAPI.get(`profile/${userId}`)
                .then((response) => {
                    return response.data
                })
        )
    },
    getUserStatus(userId) {
        return (
            initialAPI.get(`/profile/status/${userId}`)
                .then((response) => {
                    return response.data
            })
        )
    },
    setUserStatus(status) {
        return (
            initialAPI.put('/profile/status', { status: status })
                .then((response) => {
                    return response.data
                })
        )
    },
    updateUserProfile(profile) {
        return (
            initialAPI.put('/profile', profile)
                .then((response) => {
                    return response.data
            })
        )
    },
    saveMyAvatar(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return (
            initialAPI.put('/profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return (
            initialAPI.get('/security/get-captcha-url')
        )
    }
}