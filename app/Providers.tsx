'use client'
import { ThemeProvider } from '@/context/ThemeContext'
import { ContentProvider } from '@/misc/ContentProvider'
import { ClerkProvider } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

export function Providers({children}:{children:ReactNode}) {
  return (
    <ThemeProvider>
        <ClerkProvider>
          <ContentProvider>
            {children}
          </ContentProvider>
        </ClerkProvider>
    </ThemeProvider>
  )
}

