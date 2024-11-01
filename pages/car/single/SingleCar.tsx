import React from 'react'
import CarDetails from './CarDetails'
import PaymentSide from './PaymentSide'
import { CarProps } from '@/types/Types';

const SingleCar = ({currentCar}:{currentCar:CarProps}) => {
   
  return (
    <div className='flex flex-col pb-[10rem] md:pb-4 items-center md:flex-row md:items-start gap-6 w-full' >
        <CarDetails car={currentCar} />
        <PaymentSide car={currentCar} />
    </div>
  )
}

export default SingleCar