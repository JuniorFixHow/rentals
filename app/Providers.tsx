"use client"
import MainProvider from "@/components/Main";
import ThemeProvider from "@/context/ThemeContext";
import { ClerkProvider } from "@clerk/nextjs";
// import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function Providers ({children}:{children:ReactNode}){
    return(
        <ClerkProvider>
            <ThemeProvider>
            <MainProvider>
                {children}
            </MainProvider>
        </ThemeProvider>
        </ClerkProvider>
    )
}