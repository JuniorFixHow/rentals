import CarMain from '@/components/pages/car/CarMain'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: "Collection",
  description: 'View all our car collections',
}

const page = () => {
  return (
    <div className='w-full' ><CarMain/></div>
  )
}

export default page