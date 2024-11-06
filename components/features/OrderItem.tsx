'use client'
import { formatDateTime } from '@/functions/Dates'
import Image from 'next/image'
import { ComponentProps, useState } from 'react'
import { GoButton } from './Texts'
import Link from 'next/link'
import { CarProps } from '@/types/Types'
import DialogItem from '@/components/misc/Dialog'

const OrderItem = ({car, className, ...props}:{car:CarProps} & ComponentProps<'div'>) => {
    const [open, setOpen] = useState<boolean>(false)
    // const date = new Date('12-11-2024')
    const message = `You're about to cancel the order for ${car?.brand} ${car.model}. Proceed?`
    const title = 'Cancel Order'
  return (
    <div {...props}  className={`flex flex-col shadow-lg dark:border w-fit gap-4 p-4 rounded-lg bg-white dark:bg-transparent dark:bolder ${className}`} >
        <Image className='h-[12rem]' alt='image' height={200} width={300} src={car?.photos[0]} />
        <DialogItem open={open} setOpen={setOpen} onClickYes={async()=>{}} title={title} text={message} />
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
                <small>Amount</small>
                <small className='font-bold' >${car.pricePerHour || car.pricePerDay} (Pending)</small>
            </div>
            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Ordered on</small>
                <small className='font-bold' >{new Date().toLocaleDateString()}</small>
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
                    <small>Car Status</small>
                    <small className='font-bold' >Booked</small>
                </div>
            }

            <Link href={`cars/${car?.id}`} >
                <GoButton text='View Car' className='bg-[#3A80F4] hover:bg-blue-700 rounded text-white dark:bg-black dark:hover:bg-black dark:hover:border-[#3A80F4] py-2 w-full' />
            </Link>
            <GoButton onClick={()=>setOpen(true)} text='Cancel Order' className='bg-red-800 hover:bg-red-700 rounded text-white dark:bg-black dark:hover:bg-black dark:hover:border-red-800 py-2 w-full' /> 
        </div>
    </div>
  )
}

export default OrderItem