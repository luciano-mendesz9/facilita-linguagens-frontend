'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import UserType from '@my-types/user.type';

type AuthContextData = {
  user: UserType | null;
  setUser: (data: UserType | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children, initialUser }: { children: ReactNode, initialUser: UserType | null }) {
  const [user, setUser] = useState<UserType | null>(initialUser);

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, logout, setUser }}>
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
