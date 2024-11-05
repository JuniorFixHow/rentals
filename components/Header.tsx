"use client";

// import { useTheme } from "@/context/ThemeProvider"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
// import Image from "next/image"

const Header = () => {
    // const {toggleTheme} = useTheme()
  return (
    <header className='flex px-4 flex-row items-center justify-between py-4' >
        <h1>LOGO</h1>
        {/* <div className="flex flex-row items-center p-[0.2rem] bg-black dark:bg-white rounded-full gap-1">
            <button onClick={toggleTheme}  className='bg-white text-black text-[0.7rem] rounded-full px-2 py-1' >Light Mode</button>
            <button onClick={toggleTheme}  className='bg-black border-0 text-white text-[0.7rem] rounded-full px-2 py-1' >Dark Mode</button>
        </div> */}

        {/* <Image alt="user" className="rounded-full" height={30} width={30} src='/user.png' /> */}
        <SignedOut>
          <div className="border px-2 py-1 hover:bg-slate-100 dark:hover:border-slate-400 dark:hover:bg-transparent dark:bg-black rounded-full dark:text-white" >
            <SignInButton mode='modal' />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </header>
  )
}

export default Header