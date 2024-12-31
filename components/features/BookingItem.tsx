import { formatDateTime, formatTimeRemaining } from '@/functions/Dates'
import Image from 'next/image'
import React, { ComponentProps } from 'react'
import { GoButton } from './Texts'
import Link from 'next/link'
import {  IRent } from '@/types/Types'
import { checkTimeSince } from '@juniorfixhow/durationjs'
import { CarsData } from '@/data/Dummy'

const BookingItem = ({rent, className, ...props}:{rent:IRent} & ComponentProps<'div'>) => {
    const car = CarsData?.filter((item)=>item.id === rent?.carId)[0];
    // const date = new Date('12-11-2024')
  return (
    <div {...props}  className={`flex flex-col dark:border shadow-lg w-fit gap-4 p-4 rounded-lg bg-white dark:bg-transparent dark:bolder ${className}`} >
        <Image className='h-[12rem]' alt='image' height={200} width={300} src={car?.photos[0]} />
        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <small className='text-slate-400' >{car?.name}</small>
                    <span>{car?.brand} {car?.model}</span>
                </div>
                <span>GHC{car?.price}</span>
            </div>

            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Amount Paid</small>
                <small className='font-bold' >GHC{rent?.price}</small>
            </div>
            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Pick-up Date</small>
                <small className='font-bold' >{formatDateTime(rent?.rentedFrom!.toDate())}</small>
            </div>
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Drop-off Date</small>
                <small className='font-bold' >{formatDateTime(rent?.rentedTo!.toDate())}</small>
            </div>
            {
                <div className="flex flex-row items-center justify-between py-1 border-b">
                    <small>Status</small>
                    <small className='font-bold' >{new Date() > rent?.rentedTo!.toDate() ? `${formatTimeRemaining(rent?.rentedTo!.toDate())}`:`Due ${checkTimeSince(rent?.rentedTo!.toDate())}`}</small>
                </div>
            }

            <Link href={`cars/${car?.id}`} >
                <GoButton text='View Car' className='bg-[#3A80F4] hover:bg-blue-700 rounded text-white dark:bg-black dark:hover:bg-black dark:hover:border-[#3A80F4] py-2 w-full' />
            </Link>
        </div>
    </div>
  )
}

export default BookingItem