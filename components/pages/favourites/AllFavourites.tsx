import CarDisplay from '@/components/features/CarDisplay'
import { SmallButtonText, Subtitle } from '@/components/features/Texts'
import React from 'react'
import { IoFilterOutline } from 'react-icons/io5'
import { ToggleProps } from '../car/AllCars'
import { CarsData } from '@/data/Dummy'

const AllFavourites = ({setToggleNav}:ToggleProps) => {
    // console.log(CarsData.filter((item)=>item.favourites.includes('1')).length)
  return (
    <div className='flex flex-col pb-36 md:pb-8 gap-4 w-full md:w-fit sm:grow px-4' >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-4">
          <Subtitle  text='Your favourites' />
          <div onClick={()=>setToggleNav(e=>!e)}  className={`flex hover:bg-blue-800 xl:hidden dark:hover:bg-slate-300 hover:text-white cursor-pointer text-xl  bg-blue-950 text-white dark:bg-white dark:text-blue-950 rounded-md items-center justify-center px-2 py-1`} >
            <IoFilterOutline/>
          </div>
        </div>
        <SmallButtonText text='View All' />
      </div>

      <div className={`flex w-full flex-col gap-5 items-center sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 sm:gap-4`}>
        {
          CarsData?.filter((item)=>item.favourites.includes('1')).slice(0,9).map((car)=>(
            <CarDisplay key={car.id} car={car} />
          ))
        }
      </div>
    </div>
  )
}

export default AllFavourites