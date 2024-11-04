'use client'
import ButtonNav from '@/components/ButtonNav'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import { ClerkProvider } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

export function Providers({children}:{children:ReactNode}) {
  return (
    <ThemeProvider>
        <ClerkProvider>
          <div className="flex flex-col dark:text-white bg-white dark:bg-[#0D0F11] font-inter">
            <Header/>
            <div className="flex flex-row gap-4 mt-4">
            <Navbar/>
            {children}
            </div>
            <ButtonNav/>
            <Footer/>
        </div>
        </ClerkProvider>
    </ThemeProvider>
  )
}

