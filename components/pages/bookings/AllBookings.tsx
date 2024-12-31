'use client'
import BookingItem from '@/components/features/BookingItem'
import React from 'react'
import { useFetchUserRents } from '@/hooks/useFetchRents'
import NotAvailable from '@/components/features/NotAvailable';

const AllBookings = () => {
  const {userRents} = useFetchUserRents();
  // const cars = getRents(userRents)
  return (
    <div className="flex w-full">
      {
        userRents.length > 0 ?
        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5' >
            <>
              {/* <span className='font-bold' >You have booked the following cars</span> */}
              {
                userRents.map((car)=>(
                  <BookingItem key={car.id} rent={car} />
                ))
              }
            </>
        </div>
        :
        <NotAvailable text='You do not have any orders yet' />
      }
    </div>
  )
}

export default AllBookings