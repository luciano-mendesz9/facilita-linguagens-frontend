'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function RouteProgress() {
  const pathname = usePathname()

  useEffect(() => {
    NProgress.start()

    const timeout = setTimeout(() => {
      NProgress.done()
    }, 200)

    return () => clearTimeout(timeout)
  }, [pathname])


  return null
}
