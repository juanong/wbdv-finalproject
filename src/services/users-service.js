// This service is responsible for handling all API calls related to user actions

const USERS_URL = "http://localhost:4000/api/internal/users"

export const findUserByUsername = (username) =>
    fetch(`${USERS_URL}/username/${username}`)
        .then(response => {
            return response.json()
        })

export const createUser = (newUser) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const register = (credentials) => {
    return fetch(USERS_URL, {
        method: 'POST',
        // Need this line so that we send and receive the right cookie
        credentials: 'include',
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
}

export const login = (credentials) =>
    fetch(`${USERS_URL}/login`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const logout = () =>
    fetch(`${USERS_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    }).then(response => response.text())

// Get the user who is currently logged in based on the cookie
export const profile = () =>
    fetch(`${USERS_URL}/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())


const api = {
    findUserByUsername,
    createUser,
    register,
    login,
    logout,
    profile
}

export default api