const base =  `https://dwightshayplace-api.herokuapp.com/`

class Adapter {
  getMaze(id) {
    const baseURL = `${base}mazes/${id}`
    return fetch(baseURL).then(r => r.json())
  }

  getMazes() {
    const baseURL = `${base}mazes`
    console.log("IN GET MAZES")
    return fetch(baseURL).then(r => r.json())
  }

  createUser(user) {
    const baseURL =  `${base}users`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    return fetch(baseURL, options).then(r => r.json())
  }

  getCharacters() {
    const baseURL = `${base}characters/`
    return fetch(baseURL).then(r => r.json())
  }

  createTime(id, duration) {
    const baseURL = `${base}maze_users/${id}`
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        maze: {
          finished_time: duration
        }
      })
    }
    return fetch(baseURL, options).then(r => r.json())
  }

  createMazeUser(mazeUser) {
    const baseURL = `${base}maze_users`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mazeUser)
    }
    return fetch(baseURL, options).then(r => r.json())
  }

  getMazeUsers() {
    const baseURL = `${base}maze_users/`
    return fetch(baseURL).then(r => r.json())
  }
}
