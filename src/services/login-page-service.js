const USERS_URL = "http://localhost:4000/api/internal/users"

export const findUserByUsername = (username) =>
    fetch(`${USERS_URL}/username/${username}`)
        .then(response => response.json())

const api = {
    findUserByUsername
}

export default api