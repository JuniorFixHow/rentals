import { formatDateTime, formatTimeRemaining } from '@/functions/Dates'
import Image from 'next/image'
import React, { ComponentProps } from 'react'
import { GoButton } from './Texts'
import Link from 'next/link'
import { CarProps } from '@/types/Types'
import { checkTimeSince } from '@juniorfixhow/durationjs'

const BookingItem = ({car, className, ...props}:{car:CarProps} & ComponentProps<'div'>) => {
    // const date = new Date('12-11-2024')
  return (
    <div {...props}  className={`flex flex-col dark:border shadow-lg w-fit gap-4 p-4 rounded-lg bg-white dark:bg-transparent dark:bolder ${className}`} >
        <Image className='h-[12rem]' alt='image' height={200} width={300} src={car?.photos[0]} />
        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <small className='text-slate-400' >{car.name}</small>
                    <span>{car.brand} {car.model}</span>
                </div>
                <span>${car?.pricePerHour||car?.pricePerDay}</span>
            </div>

            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Rental Type</small>
                <small className='font-bold' >{car.rentType}</small>
            </div>
            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Amount Paid</small>
                <small className='font-bold' >${car.pricePerHour || car.pricePerDay}</small>
            </div>
            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Pick-up Date</small>
                <small className='font-bold' >{formatDateTime(new Date())}</small>
            </div>
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Drop-off Date</small>
                <small className='font-bold' >{formatDateTime(new Date())}</small>
            </div>
            {
                car?.rented &&
                <div className="flex flex-row items-center justify-between py-1 border-b">
                    <small>Status</small>
                    <small className='font-bold' >{new Date() > car.rentedTo! ? `${formatTimeRemaining(car.rentedTo!)}`:`Due ${checkTimeSince(car.rentedTo!)}`}</small>
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