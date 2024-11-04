'use client'
import { getTimeDifferenceInDays, getTimeDifferenceInHours, today } from '@/functions/Dates'
import { CarProps } from '@/types/Types'
import React, { useEffect, useState } from 'react'
import { RoundButton } from './Texts'
import DialogItem from '@/misc/Dialog'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

const CarPayment = ({car}:{car:CarProps}) => {
    const [start, setStart] = useState<Date>(new Date())
    const [end, setEnd] = useState<Date>(new Date());
    const [totalTime, setTotalTime] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const {isLoaded, isSignedIn} = useUser()



    useEffect(()=>{
        if(car?.pricePerHour){
            const time = getTimeDifferenceInHours(start, end)
            setTotalAmount(time*car?.pricePerHour)
            setTotalTime(time);
        }else if(car?.pricePerDay)
            {
            const time = getTimeDifferenceInDays(start, end);
            setTotalAmount(time*car?.pricePerDay)
            setTotalTime(time);
        }
    },[start, end, car])

    const text="This car has already been booked. Be the first to get notified after it has been realeased by placing an order. Continue?"
    if((car?.rented && car.rentedBy === '1') || !isLoaded) return null

  return (
   
    <div className='flex flex-col text-white gap-6 p-4 mt-6 md:mt-0 rounded-2xl dark:border  grow md:m-4 bg-[#080D1B]' >
        <DialogItem text={text} title='Place Order' open={open} onClickYes={async()=>{}} setOpen={setOpen} />
        <div className="flex flex-col md:flex-row gap-3 items-start justify-between">
            <div className="flex flex-col w-full md:w-[45%] gap-2">
                <span className='text-[0.8rem] text-slate-500' >Pick-up date and time</span>
                <input className='bg-[#232B3F] rounded-lg w-full px-1 py-3 text-white text-[0.8rem]' min={today(new Date())} onChange={(e)=>setStart(new Date(e.target.value))} type="datetime-local" />
            </div>

            <div className="flex flex-col w-full md:w-[45%] gap-2">
                <span className='text-[0.8rem] text-slate-500' >Drop-off date and time</span>
                <input className='bg-[#232B3F] rounded-lg w-full px-1 py-3 text-white text-[0.8rem]' min={today(start)} onChange={(e)=>setEnd(new Date(e.target.value))} type="datetime-local" />
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Total time</small>
                <small className="font-bold" >{car?.pricePerHour? totalTime.toFixed(2) + ' hours':totalTime.toFixed(2)+' days'}</small>
            </div>
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Price</small>
                <small className="font-bold" >${totalAmount.toFixed(2)}</small>
            </div>
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Taxes</small>
                <small className="font-bold" >$0</small>
            </div>
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Insurance</small>
                <small className="font-bold" >$2</small>
            </div>
        </div>

        <div className="flex flex-row items-center justify-between">
            <span>Total price: ${totalAmount === 0 ? 0:(totalAmount+2).toFixed(2)}</span>
            {
                !isSignedIn ?
                    <Link href='/sign-in' >
                        <RoundButton 
                            text='Sign-in' className='bg-[#3A80F4] px-4 py-2 hover:bg-[#3575db]' 
                        />
                    </Link>
                    :
                <RoundButton 
                    onClick={car?.rented ? ()=>setOpen(true) : ()=>{}} 
                    text={car?.rented ?'Place order':'Rent car'} className='bg-[#3A80F4] px-4 py-2 hover:bg-[#3575db]' 
                />
            }
        </div>
    </div>
     
  )
}

export default CarPayment