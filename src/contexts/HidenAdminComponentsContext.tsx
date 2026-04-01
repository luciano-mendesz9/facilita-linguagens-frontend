'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import UserType from '@my-types/user.type';

type HidenAdminComponents = {
  showComponents: boolean;
  setShowComponents: (v: boolean) => void;
}

const HidenAdminComponentsContext = createContext<HidenAdminComponents | undefined>(undefined);

export function HidenAdminComponentsProvider({ children }: { children: ReactNode}) {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <HidenAdminComponentsContext.Provider value={{ showComponents, setShowComponents }}>
      {children}
    </HidenAdminComponentsContext.Provider>
  )
}

export function useAdminControllScreen() {
  const context = useContext(HidenAdminComponentsContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }

  return context
}
