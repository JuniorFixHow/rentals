'use client'
import { formatDateTime } from '@/functions/Dates'
import Image from 'next/image'
import { ComponentProps, useState } from 'react'
import { GoButton } from './Texts'
import Link from 'next/link'
import DialogItem from '@/components/misc/Dialog'
import { CarsData } from '@/data/Dummy'
import { deleteDoc, doc, Timestamp } from 'firebase/firestore'
import { db } from '@/lib/database/firebase'
import { useFetchRents } from '@/hooks/useFetchRents'
import { getCurrency, getRent } from '@/functions/miscs'
import { IRent } from '@/types/Types'

const OrderItem = ({order, className, ...props}:{order:IRent} & ComponentProps<'div'>) => {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const car = CarsData?.filter((item)=>item?.id === order?.carId)[0];
    // const date = new Date('12-11-2024')
    const message = `You're about to cancel the order for ${car?.brand} ${car.model}. Proceed?`
    const title = 'Cancel Order'

    const {rents} = useFetchRents();
    const rented = getRent(rents, order?.carId);

    const cancelOrder = async()=>{
            try {
                setLoading(true);
                if(order){
                    await deleteDoc(doc(db, 'Orders', order?.id))
                }
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
    

  return (
    <div {...props}  className={`flex flex-col shadow-lg dark:border w-fit gap-4 p-4 rounded-lg bg-white dark:bg-transparent dark:bolder ${className}`} >
        <Image className='h-[12rem]' alt='image' height={200} width={300} src={car?.photos[0]} />
        <DialogItem open={open} setOpen={setOpen} onClickYes={cancelOrder} title={title} text={message} />
        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <small className='text-slate-400' >{car?.name}</small>
                    <span>{car?.brand} {car?.model}</span>
                </div>
                <span>{getCurrency(car)}{car?.price}</span>
            </div>

            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Amount</small>
                <small className='font-bold' >{getCurrency(car)}{order?.price} (Pending)</small>
            </div>
            
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Ordered on</small>
                <small className='font-bold' >{formatDateTime((order?.createdAt as Timestamp)?.toDate())}</small>
            </div>
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Pick-up Date</small>
                <small className='font-bold' >{formatDateTime(order?.rentedFrom!.toDate())}</small>
            </div>
            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Drop-off Date</small>
                <small className='font-bold' >{formatDateTime(new Date())}</small>
            </div>

            <div className="flex flex-row items-center justify-between py-1 border-b">
                <small>Car Status</small>
                <small className='font-bold' >{rented?'Rented':'Available'}</small>
            </div>

            <Link href={`cars/${car?.id}`} >
                <GoButton text='View Car' className='bg-[#3A80F4] hover:bg-blue-700 rounded text-white dark:bg-black dark:hover:bg-black dark:hover:border-[#3A80F4] py-2 w-full' />
            </Link>
            <GoButton onClick={()=>setOpen(true)} text={loading ? 'loading...' : 'Cancel Order'} className='bg-red-800 hover:bg-red-700 rounded text-white dark:bg-black dark:hover:bg-black dark:hover:border-red-800 py-2 w-full' /> 
        </div>
    </div>
  )
}

export default OrderItem