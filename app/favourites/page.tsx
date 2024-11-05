import MainProvider from "@/components/Main"
import FavouritesMain from "@/pages/favourites/FavouritesMain"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Favourites",
  description: 'View all your favourite cars',
}

const page = () => {
  return (
    <div className='w-full' >
      <MainProvider>
        <FavouritesMain/>
      </MainProvider>
    </div>
    
  )
}

export default page