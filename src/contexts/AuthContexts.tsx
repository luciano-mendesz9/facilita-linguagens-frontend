'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import UserType from '@my-types/user.type'
import { URL_API } from '../constants'

type AuthContextData = {
  user: UserType | null
  login: (data: { email: string, password: string }) => Promise<{ success: boolean }>
  register: (
    data: {
      firstName: string,
      lastName: string,
      email: string,
      password: string
    }
  ) => Promise<{ success: boolean }>
  logout: () => void
}

const AuthContext = createContext<AuthContextData | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  async function login(data: { email: string, password: string }): Promise<{ success: boolean }> {
    try {

      const res = await fetch(`${URL_API}/auth/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        throw new Error('Crendenciais Inválidas');
      }

      const user = await res.json() as UserType;

      alert(user.email);
      setUser(user);

      return { success: true }
    } catch (e) {
      console.log(e);
      return { success: false }
    }
  }

  async function register(
    data: {
      firstName: string,
      lastName: string,
      email: string,
      password: string
    }
  ): Promise<{ success: boolean }> {

    setUser(null)
    return { success: false }
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }

  return context
}
