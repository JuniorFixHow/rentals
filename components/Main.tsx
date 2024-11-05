"use client"
import Header from './Header'
import Navbar from './Navbar'
import ButtonNav from './ButtonNav'
import Footer from './Footer'
import { PropsWithChildren } from 'react'

export default function MainProvider ({children}:PropsWithChildren){
  return (
    <div className="flex flex-col dark:text-white bg-white dark:bg-[#0D0F11] font-inter">
        <Header />
        <div className="flex flex-row gap-4 mt-4">
        <Navbar />
        {children}
        </div>
        <ButtonNav />
        <Footer />
    </div>
  )
}

