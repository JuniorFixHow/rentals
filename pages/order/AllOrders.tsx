import { CarsData } from '@/data/Dummy'
import OrderItem from '@/features/OrderItem'
import React from 'react'

const AllOrders = () => {
  return (
    <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5' >
        {/* <span className='font-bold' >You have booked the following cars</span> */}
        {/* <NotAvailable text='You do not have any orders yet' /> */}
        {
            CarsData.filter((item)=>item.rentedBy==='1' && item.rented).map((car)=>(
                <OrderItem key={car.id} car={car} />
            ))
        }
    </div>
  )
}

export default AllOrders