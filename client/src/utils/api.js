import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token')

  if (token) {
    config.headers['Auth-Token'] = token
  }

  return config
})

export default api
