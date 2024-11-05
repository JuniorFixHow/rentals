"use client"
import MainProvider from "@/components/Main";
// import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function Providers ({children}:{children:ReactNode}){
    return(
        <MainProvider>
            {children}
        </MainProvider>
    )
}