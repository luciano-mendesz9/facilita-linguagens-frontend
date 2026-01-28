'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type ScreenContextData = {
  screenLoading: boolean;
  setScreenLoading: (v: boolean) => void;
}

const ScreenContext = createContext<ScreenContextData | undefined>(undefined)

export function ScreenProvider({ children }: { children: ReactNode }) {
  const [screenLoading, setScreenLoading] = useState<boolean>(false);

  return (
    <ScreenContext.Provider value={{ screenLoading, setScreenLoading }}>
      {children}
    </ScreenContext.Provider>
  )
}

export function useScreen() {
  const context = useContext(ScreenContext)

  if (!context) {
    throw new Error('useScreen deve ser usado dentro de ScreenProvider')
  }

  return context
}
