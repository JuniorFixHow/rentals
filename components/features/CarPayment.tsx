"use client"
import {  getTimeDifferenceInDaysV2, today } from '@/functions/Dates'
import { CarProps, IRent, ResponseProps } from '@/types/Types'
import React, {  FormEvent, useEffect, useRef, useState } from 'react'
import { RoundButton } from './Texts'
import DialogItem from '@/components/misc/Dialog'
import { useUser } from '@clerk/nextjs'
// import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { addDoc, collection, deleteDoc, doc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '@/lib/database/firebase'
import { Alert } from '@mui/material'
import { useFetchRents, useFetchUserRents } from '@/hooks/useFetchRents'
import {  getRent } from '@/functions/miscs'
import { useFetchOrders } from '@/hooks/useOrders'

const CarPayment = ({car}:{car:CarProps}) => {
    const [start, setStart] = useState<Date>(new Date())
    const [end, setEnd] = useState<Date>(new Date());
    const [totalTime, setTotalTime] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<ResponseProps>(null);
    const {isLoaded, isSignedIn, user} = useUser();
    const {rents} = useFetchRents();
    const {userRents} = useFetchUserRents();
    const {orders} = useFetchOrders();
    const buttonRef = useRef<HTMLButtonElement>(null);


    useEffect(()=>{
        const time = getTimeDifferenceInDaysV2(start, end)
        setTotalAmount(time*car?.price)
        setTotalTime(time);
        
    },[start, end, car])

    

    const handleNewRent = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            setLoading(true)
            const body:Partial<IRent> = {
                rentedFrom:Timestamp.fromDate(start),
                rentedTo: Timestamp.fromDate(end),
                userId:user?.id,
                carId:car?.id,
                name:user?.fullName as string,
                phone:user?.phoneNumbers[0]?.toString()|| '',
                email:user?.emailAddresses[0]?.toString(),
                price:totalAmount,
                createdAt: serverTimestamp()
            }
            await addDoc(collection(db, 'Rents'), body);
            setResponse({message:'Rented successfully', error:false});
        } catch (error) {
            console.log(error);
            setResponse({message:'Error occured processing your rent.', error:true});
        }finally{
            setLoading(false);
        }
    }

    const handleNewOrder = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            setLoading(true)
            const body:Partial<IRent> = {
                rentedFrom:Timestamp.fromDate(start),
                rentedTo: Timestamp.fromDate(end),
                userId:user?.id,
                carId:car?.id,
                name:user?.fullName as string,
                phone:user?.phoneNumbers[0]?.toString()|| '',
                email:user?.emailAddresses[0]?.toString(),
                price:totalAmount,
                createdAt: serverTimestamp()
            }
            await addDoc(collection(db, 'Orders'), body);
            setResponse({message:'Ordered successfully', error:false});
            setOpen(false);
        } catch (error) {
            console.log(error);
            setResponse({message:'Error occured processing your order.', error:true});
        }finally{
            setLoading(false);
        }
    }

    const rented = getRent(rents, car?.id);
    const ordered = getRent(orders, car?.id);


    const cancelOrder = async()=>{
        try {
            setLoading(true);
            if(ordered){
                await deleteDoc(doc(db, 'Orders', ordered?.id))
            }
            setResponse({message:'Order canceled successfully', error:false});
        } catch (error) {
            console.log(error);
            setResponse({message:'Error occured. Please retry', error:true})
        }finally{
            setLoading(false);
        }
    }


    const clickOrder = async()=>{
        buttonRef.current?.click()
    }


    const text="This car has already been booked. Be the first to get notified after it has been realeased by placing an order. Continue?"
    if((getRent(userRents, car?.id)) || !isLoaded) return null

  return (
   
    <form onSubmit={ rented ? handleNewOrder : handleNewRent}  className='flex flex-col text-white gap-6 p-4 mt-6 md:mt-0 rounded-2xl dark:border  grow md:m-4 bg-[#080D1B]' >
        <DialogItem text={text} title='Place Order' open={open} onClickYes={clickOrder} setOpen={setOpen} />
        <div className="flex flex-col md:flex-row gap-3 items-start justify-between">
            <div className="flex flex-col w-full md:w-[45%] gap-2">
                <span className='text-[0.8rem] text-slate-500' >Pick-up date and time</span>
                <input required  className='bg-[#232B3F] rounded-lg w-full px-1 py-3 text-white text-[0.8rem]' min={(rented && rented?.rentedTo!.toDate() > new Date()) ? today(rented?.rentedTo!.toDate()) : today(new Date())} onChange={(e)=>setStart(new Date(e.target.value))} type="datetime-local" />
            </div>

            <div className="flex flex-col w-full md:w-[45%] gap-2">
                <span className='text-[0.8rem] text-slate-500' >Drop-off date and time</span>
                <input required  className='bg-[#232B3F] rounded-lg w-full px-1 py-3 text-white text-[0.8rem]' min={today(start)} onChange={(e)=>setEnd(new Date(e.target.value))} type="datetime-local" />
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Total time</small>
                <small className="font-bold" >{totalTime.toFixed(2)+' days'}</small>
            </div>
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Price</small>
                <small className="font-bold" >GHC{totalAmount.toFixed(2)}</small>
            </div>
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Taxes</small>
                <small className="font-bold" >GHC0</small>
            </div>
            <div className="flex flex-row items-center border-slate-600 justify-between border-b py-1">
                <small className='text-slate-500' >Dicounts</small>
                <small className="font-bold" >GHC0</small>
            </div>
        </div>

        {
            response?.message &&
            <Alert onClose={()=>setResponse(null)} severity={response.error ? 'error':'success'} >{response.message}</Alert>
        }

        <div className="flex flex-row items-center justify-between">
            <span>Total price: GHC{totalAmount === 0 ? 0:(totalAmount).toFixed(2)}</span>
            {
                !isSignedIn ?
                    <Link href='/sign-in' >
                        <RoundButton 
                            text='Sign-in' className='bg-[#3A80F4] px-4 py-2 hover:bg-[#3575db]' 
                        />
                    </Link>
                    :
                <>
                    {
                        totalAmount > 0 &&
                            <>
                            <RoundButton
                                type='button'
                                onClick={ordered ? cancelOrder : ()=>setOpen(true)} 
                                text={loading? 'loading...' : ordered ?'Cancel Order':'Order'} className={`${!rented && 'hidden'} bg-[#3A80F4] px-4 py-2 hover:bg-[#3575db] `} 
                            />
                            
                            <RoundButton
                                ref={buttonRef}
                                onClick={rented ? ()=>setOpen(true) : ()=>{}} 
                                text={loading? 'loading...' : rented ?'Place order':'Rent car'} className={`bg-[#3A80F4] px-4 py-2 hover:bg-[#3575db] ${rented && 'hidden'}`} 
                            />
                            </>
                    }
                </>
            }
        </div>
    </form>
     
  )
}

export default CarPayment