'use client'
import { NavbarHelps, NavbarLinks } from "@/data/Links"
import { useState } from "react";

const ButtonNav = () => {
    const [currentLink, setCurrentLink] = useState<number>(1);
  return (
    <div className="md:hidden fixed bottom-8 w-full flex justify-center" >
        <div className="flex flex-col px-6 py-4 rounded-full gap-2 bg-gradient-to-br from-[#F7C579] to-[#F4743B] dark:from-black dark:to-blue-200 ">
            <div className="flex flex-row gap-2">
                {
                     NavbarLinks.map((item)=>(
                        <div onClick={()=>setCurrentLink(item.id)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-[1rem] ${currentLink === item.id ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-full items-center justify-center p-2`} key={item.id} >
                            {item.icon}
                        </div>
                    ))
                }

            </div>
            <div className="flex flex-row self-center gap-2">
                {
                    NavbarHelps.map((item)=>(
                        <div onClick={()=>setCurrentLink(item.id)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-[1rem] ${currentLink === item.id ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-full items-center justify-center p-2`} key={item.id} >
                            {item.icon}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ButtonNav