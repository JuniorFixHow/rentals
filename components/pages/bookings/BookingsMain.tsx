import Back from '@/components/misc/Back'
import React from 'react'
import AllBookings from './AllBookings'

const BookingsMain = () => {
    // const router = useRouter()
  return (
    <div className='flex flex-col gap-6 w-full pb-8 px-4' >
        <div className="flex flex-row relative items-center justify-center w-full">
            <Back className='absolute left-0' />
            <span className='font-bold' >Bookings</span>
        </div>
        <AllBookings/>
    </div>
  )
}

export default BookingsMain