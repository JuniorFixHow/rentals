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
        <BookingsMain/>
    </div>
  )
}

export default page