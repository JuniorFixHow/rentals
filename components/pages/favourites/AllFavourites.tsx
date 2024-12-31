'use client'
import CarDisplay from '@/components/features/CarDisplay'
import { SmallButtonText, Subtitle } from '@/components/features/Texts'
import React, { useState } from 'react'
import { IoFilterOutline } from 'react-icons/io5'
import { ToggleProps } from '../car/AllCars'
import { filterCars } from '@/functions/search'
import { useFetchFavourites } from '@/hooks/useFavourites'
import { getFavourites } from '@/functions/miscs'
import NotAvailable from '@/components/features/NotAvailable'

const AllFavourites = ({
  setToggleNav,
  brand,
  model,
  colour,  
  price, 
}:ToggleProps) => {

    const {favourites} = useFetchFavourites();
    const carData = getFavourites(favourites);
    // console.log(carData)
    const [range, setRange] = useState<number>(9)
    const cars = filterCars(carData, brand, model,
      colour,  price
    )
  return (
    <div className='flex flex-col pb-36 md:pb-8 gap-4 w-full md:w-fit sm:grow px-4' >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-4">
          <Subtitle  text='Your favourites' />
          <div onClick={()=>setToggleNav(e=>!e)}  className={`flex hover:bg-blue-800 xl:hidden dark:hover:bg-slate-300 hover:text-white cursor-pointer text-xl  bg-blue-950 text-white dark:bg-white dark:text-blue-950 rounded-md items-center justify-center px-2 py-1`} >
            <IoFilterOutline/>
          </div>
        </div>
        <SmallButtonText onClick={()=>setRange(cars.length)} text='View All' />
      </div>
      {
        cars?.length > 0 ?
        <div className={`flex w-full flex-col gap-5 items-center sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 sm:gap-4`}>
          {
            cars?.slice(0,range).map((car)=>(
              <CarDisplay key={car.id} car={car} />
            ))
          }
        </div>
        :
        <NotAvailable text='Nothing here at the moment. Try making some cars your favourites or reset your filters' />
      }

    </div>
  )
}

export default AllFavourites