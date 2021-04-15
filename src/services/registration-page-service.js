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
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())
}

const api = {
    findUserByUsername,
    createUser,
    register
}

export default api