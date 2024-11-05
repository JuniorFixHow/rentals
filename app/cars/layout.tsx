import MainProvider from "@/components/Main";
import { ReactNode } from "react";

export default function Layout ({children}:{children:ReactNode}){
    return(
        <MainProvider>
            {children}
        </MainProvider>
    )
}