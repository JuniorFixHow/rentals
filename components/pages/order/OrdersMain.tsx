import Back from '@/components/misc/Back'
import React from 'react'
import AllOrders from './AllOrders'


const OrdersMain = () => {
  return (
    <div className='flex flex-col gap-6 px-4 pb-8' >
        <div className="flex flex-row relative items-center justify-center w-full">
            <Back className='absolute left-0' />
            <span className='font-bold' >Orders</span>
        </div>
        <AllOrders/>
    </div>
  )
}

export default OrdersMain