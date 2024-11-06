'use client'
import { NavbarHelps, NavbarLinks } from '@/data/Links'
import React, { useState } from 'react'


const Navbar = () => {
    const [currentLink, setCurrentLink] = useState<number>(1);
   
  return (
    <div className='hidden md:flex py-4 flex-col items-center min-h-[calc(100vh-4rem)] w-28 bg-white dark:border-r dark:bg-[#0D0F11]' >
        <div className="flex flex-col h-[calc(100vh-8rem)] items-center justify-between">

            <div className="flex flex-col gap-4 items-center">
                {
                    NavbarLinks.map((item)=>(
                        <div onClick={()=>setCurrentLink(item.id)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-2xl ${currentLink === item.id ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-xl items-center justify-center p-2`} key={item.id} >
                            {item.icon}
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-4 items-center">
                {
                    NavbarHelps.map((item)=>(
                        <div onClick={()=>setCurrentLink(item.id)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-2xl ${currentLink === item.id ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-xl items-center justify-center p-2`} key={item.id} >
                            {item.icon}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar