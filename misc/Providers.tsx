'use client'
import { ThemeProvider } from '@/context/ThemeContext'
import { ClerkProvider } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

export function Providers({children}:{children:ReactNode}) {
  return (
    <ThemeProvider>
        <ClerkProvider>
            {children}
        </ClerkProvider>
    </ThemeProvider>
  )
}

