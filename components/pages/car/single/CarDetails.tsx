'use client'
import { SmallButton } from "@/components/features/Texts";
import { formatDateTime } from "@/functions/Dates";
import Back from "@/components/misc/Back";
import { CarProps, IFavourite } from "@/types/Types";
import Image from "next/image";
import { useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useFetchFavourites } from "@/hooks/useFavourites";
import { getCurrency, getFavourite, getRent } from "@/functions/miscs";
import { useFetchRents } from "@/hooks/useFetchRents";
import { useUser } from "@clerk/nextjs";
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/database/firebase";

const CarDetails = ({car}:{car:CarProps}) => {

    const [currentPhoto, setCurrentPhoto] = useState<string>(car?.photos[0]);
    const {favourites} = useFetchFavourites();
    const {rents} = useFetchRents();
    const {user} = useUser();

    const favourite = getFavourite(favourites, car?.id);
    const rented = getRent(rents, car?.id);

    const handleMakeFavourite = async()=>{
        if(user){
            const data:Partial<IFavourite> = {
                carId:car?.id,
                userId:user?.id,
                createdAt:serverTimestamp()
            }
            try {
                await addDoc(collection(db, 'Favourites'), data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleRemoveFavourite = async()=>{
        try {
            if(favourite){
                await deleteDoc(doc(db, 'Favourites', favourite.id));
            }
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className="flex flex-col gap-4" >

        <div className="flex flex-row items-center justify-between">
           <Back/>
           <span>{getCurrency(car)}{car?.price}/<small className="text-[0.7rem]" >day</small> </span>
        </div>

        <div className="flex gap-6 dark:border items-center flex-col p-4 shadow-md rounded-3xl">
            <div className="flex flex-col gap-2">
                <div style={{backgroundImage:`url(${currentPhoto})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}  className="flex h-[11rem] w-[18rem] md:w-[22rem] flex-col gap-5 rounded-xl p-4">
                    <div className="flex z-10 w-full flex-row justify-between items-center">
                        <div className="flex flex-row gap-2">
                        {
                            car?.new &&
                            <SmallButton text='New' className='bg-gradient-to-br from-[#F7C579] to-[#F4743B] dark:from-transparent dark:to-transparent  cursor-default text-white text-[0.7rem] px-2 py-1' />
                        }
                        {
                            rented ?
                            <div className="flex items-center justify-center p-1 bg-[#9498A5] rounded-md dark:bg-transparent border">
                                <span className='text-[0.6rem] text-white' >Booked till {formatDateTime(rented?.rentedTo!.toDate())}</span>
                            </div>
                            :
                            <SmallButton text='Available' className='bg-[#11B990] dark:bg-transparent cursor-default text-white text-[0.7rem] px-2 py-1' />
                        }
                        </div>
                        {
                            user &&
                            <>
                                {
                                favourite?
                                    <div className="flex items-center justify-center bg-white p-1 rounded-full">
                                        <IoMdHeart onClick={handleRemoveFavourite}  className='cursor-pointer' color='#3A80F4' />
                                    </div>
                                    :
                                    <div className="flex items-center justify-center bg-white p-1 rounded-full">
                                        <IoIosHeartEmpty onClick={handleMakeFavourite}  className='cursor-pointer' color='#3A80F4' />
                                    </div>
                                }
                            </>
                        }
                    </div>
                    {/* <Image width={250} height={150}  className="object-contain inset-0 absolute rounded-lg" src={currentPhoto!} alt="car" /> */}
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {
                        car?.photos?.map((photo)=>(
                        <div onClick={()=>setCurrentPhoto(photo)} key={photo}  className={`flex relative w-20 h-20 cursor-pointer rounded-lg border ${currentPhoto === photo ? 'border-[#3A80F4]':'bg-slate-100'} shadow`}>
                            <Image className="rounded-lg" src={photo} alt="image" fill />
                        </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <small className="text-slate-400 text-[0.7rem]" >{car?.name}</small>
                        <span>{car?.brand} {car?.model}</span>
                    </div>
                </div>

                {
                    car?.year &&
                    <div className="flex flex-row items-center justify-between border-b py-1">
                        <small>Year</small>
                        <small className="font-bold" >{car?.year}</small>
                    </div>
                }
                <div className="flex flex-row items-center justify-between py-1">
                    <small>Colour</small>
                    <div className="flex flex-row items-center gap-2">
                        <div style={{backgroundColor:car?.colour.toLowerCase()}}  className="p-2 rounded-full"/>
                        <small className="font-bold" >{car?.colour}</small>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default CarDetails