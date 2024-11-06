'use client'
import { NavbarHelps, NavbarLinks } from "@/data/Links"
import { NavbarProps } from "@/types/Types";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const ButtonNav = () => {
    const router = useRouter();
    const {isSignedIn} = useUser()
    // console.log(path)
    const path = usePathname();
    const checkCurrent =(item:NavbarProps):boolean=>{
        const isCurrent = path === item.link || path.startsWith(`${item.link}/`);
        return isCurrent
    }

  return (
    <div className="md:hidden fixed bottom-8 w-full flex justify-center" >
        <div className="flex flex-col px-6 py-4 rounded-full gap-2 bg-gradient-to-br from-[#F7C579] to-[#F4743B] dark:from-black dark:to-blue-200 ">
            <div className="flex flex-row gap-2">
                {
                     NavbarLinks.map((item)=>{
                        const isCurrent = checkCurrent(item)
                        return(
                        <div onClick={()=>router.push(item.link!)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-[1rem] ${isCurrent ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-full items-center justify-center p-2`} key={item.id} >
                            {item.icon}
                        </div>
                        )
                    })
                }

            </div>
            <div className="flex flex-row self-center gap-2">
                {
                    NavbarHelps.slice(0,1).map((item)=>{
                        const isCurrent = checkCurrent(item)
                        return(
                        <div onClick={()=>router.push(item.link!)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-[1rem] ${isCurrent ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-full items-center justify-center p-2`} key={item.id} >
                            {item.icon}
                        </div>
                        )
                    })
                }
                {
                    NavbarHelps.slice(1,2).map((item)=>{
                        const isCurrent = checkCurrent(item)
                        return(
                            <div  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-[1rem] ${isCurrent ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-full items-center justify-center p-2`} key={item.id} >
                                {item.icon}
                            </div>
                        )
                    })
                }
                {
                    isSignedIn && 
                    <UserButton/>
                }
            </div>
        </div>
    </div>
  )
}

export default ButtonNav