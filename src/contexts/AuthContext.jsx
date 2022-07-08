import { useContext, useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify'

import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const isAuthenticated = !!user

  useEffect(() => {
    const token = localStorage.getItem('@tudu:token')

    if (token) {
      api.get('/users/me').then(response => {
        const { id, name, email } = response.data

        setUser({ id, name, email })
      })
    }
  }, [])

  async function signIn({ email, password }) {
    try {
      const response = await api.post('sessions', {
        email,
        password
      })

      const { token, user: { name, email: userEmail } } = response.data

      localStorage.setItem('@tudu:token', token)

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser({ name, email: userEmail })
    } catch (err) {
      toast.error('Erro ao tentar fazer o login')
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
