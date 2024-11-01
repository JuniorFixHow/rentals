import { CarProps } from '@/types/Types'
import React from 'react'

const NotAvailable = ({car}:{car:CarProps}) => {
  return (
    <span className='w-80 self-center' >This car has been rented by {car.rentedBy?.includes('1') ? 'you':'someone else. Check back later.'}</span>
  )
}

export default NotAvailable