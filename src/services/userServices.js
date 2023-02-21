import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
// Referencia: https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token ? `JWT ${token}` : ''
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

const loginUser = (data) => axios.post(`${BASE_URL}/login`, data)

export { loginUser }
