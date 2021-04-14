const USERS_URL = "http://localhost:4000/api/internal/users"

export const findUserByUsername = (username) =>
    fetch(`${USERS_URL}/${username}`)
        .then(response => response.json())

export const createUser = (newUser) => {
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const api = {
    findUserByUsername,
    createUser
}

export default api