'use client'
import { NavbarHelps, NavbarLinks } from '@/data/Links'
import { NavbarProps } from '@/types/Types';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
    const router = useRouter();
    const {isSignedIn} = useUser()
    // console.log(path)
    const path = usePathname();
    const checkCurrent =(item:NavbarProps):boolean=>{
        const isCurrent = path === item.link || path.startsWith(`${item.link}/`);
        return isCurrent
    }

    const navigateToScreen = (item:NavbarProps)=>{
        router.push(item.link!);
    }
   
  return (
    <div className='hidden md:flex py-4 flex-col items-center min-h-[calc(100vh-4rem)] w-28 bg-white dark:border-r dark:bg-[#0D0F11]' >
        <div className="flex flex-col h-[calc(100vh-8rem)] items-center justify-between">

            <div className="flex flex-col gap-4 items-center">
                {
                    NavbarLinks.map((item)=>{
                        const isCurrent = checkCurrent(item)
                    return( 
                            <div onClick={()=>navigateToScreen(item)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-2xl ${isCurrent ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-xl items-center justify-center p-2`} key={item.id} >
                                {item.icon}
                            </div>
                        )
                        })
                }
            </div>
            <div className="flex flex-col gap-4 items-center">
                {
                    NavbarHelps.slice(0,1).map((item)=>{
                        const isCurrent = checkCurrent(item)
                        return(
                            <div onClick={()=>navigateToScreen(item)}  className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-2xl ${isCurrent ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-xl items-center justify-center p-2`} key={item.id} >
                                {item.icon}
                            </div>
                        )
                    })
                }
                {
                    NavbarHelps.slice(1,2).map((item)=>{
                        const isCurrent = checkCurrent(item)
                        return(
                            <div   className={`flex hover:bg-blue-950 dark:hover:bg-slate-300 hover:text-white cursor-pointer text-2xl ${isCurrent ? 'bg-blue-950 text-white dark:bg-white dark:text-blue-950':'bg-white dark:bg-black dark:text-white'} rounded-xl items-center justify-center p-2`} key={item.id} >
                                {item.icon}
                            </div>
                        )
                    })
                }
                {
                    isSignedIn &&
                    <UserButton />
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar