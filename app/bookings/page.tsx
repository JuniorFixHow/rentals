import MainProvider from '@/components/Main'
import BookingsMain from '@/pages/bookings/BookingsMain'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: "Bookings",
  description: 'View Bookings',
}

const page = () => {
  return (
    <div className='w-full' >
      <MainProvider>

        <BookingsMain/>
      </MainProvider>
    </div>
  )
}

export default page