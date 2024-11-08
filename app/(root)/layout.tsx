import ButtonNav from "@/components/ButtonNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const   Layout = ({children}:{children:ReactNode})=>{
    return (
      <main  className="flex flex-col dark:text-white bg-white dark:bg-[#0D0F11] font-inter">
          <Header />
          <div className="flex flex-row gap-4 mt-4">
          <Navbar />
          {children}
          </div>
          <ButtonNav />
          <Footer />
      </main>
    )
  }

export default Layout