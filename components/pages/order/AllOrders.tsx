'use client'
import OrderItem from '@/components/features/OrderItem'
import React from 'react'
import { useFetchOrders } from '@/hooks/useOrders'
import NotAvailable from '@/components/features/NotAvailable'

const AllOrders = () => {
  const {orders} = useFetchOrders();
  return (
    <div className="flex w-full">

    {
      orders?.length > 0 ?
      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5' >
        {
          orders.map((order)=>(
            <OrderItem key={order.id} order={order} />
            ))
        }
      </div>
      :
    <NotAvailable text='You do not have any orders yet. Try Ordering some cars.' />
    }
    </div>
  )
}

export default AllOrders