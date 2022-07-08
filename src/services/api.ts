import axios from 'axios'

const token = localStorage.getItem('@tudu:token')

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${token}`
  }
})