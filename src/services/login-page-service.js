const USERS_URL = "http://localhost:4000/api/internal/users"

export const findUserByUsername = (username) =>
    fetch(`${USERS_URL}/username/${username}`)
        .then(response => response.json())

export const login = (credentials) =>
    fetch(`${USERS_URL}/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

const api = {
    findUserByUsername,
    login
}

export default api