import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import { SmallButton } from './Texts'
import { formatDateTime } from '@/functions/Dates'
import { CarProps, IFavourite } from '@/types/Types'
import { ComponentProps } from 'react'
import { useFetchFavourites } from '@/hooks/useFavourites'
import { useFetchRents } from '@/hooks/useFetchRents'
import { getFavourite, getRent } from '@/functions/miscs'
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/database/firebase'
import { useUser } from '@clerk/nextjs'

const CarDisplay = ({car, ...props}:{car:CarProps} & ComponentProps<'div'>) => {
    const {favourites} = useFetchFavourites();
    const {rents} = useFetchRents();
    const rented = getRent(rents, car?.id);
    const favourite = getFavourite(favourites, car?.id);
    const {user} = useUser();

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
    <div {...props}   className="flex border p-3 rounded-lg flex-col gap-4 w-72 md:w-64" >
        <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row gap-3">
            {
            car.new &&
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
            favourite?
            <IoMdHeart onClick={handleRemoveFavourite}  className='cursor-pointer' color='#3A80F4' />
            :
            <IoIosHeartEmpty onClick={handleMakeFavourite}  className='cursor-pointer' color='#3A80F4' />
        }
        </div>

        <Link href={`/cars/${car.id}`}  className="flex cursor-pointer flex-col w-full">
            <div className="flex flex-row justify-end w-full h-36 relative">
                <Image src={car?.photos[0]} alt='car_image' className='rounded object-cover' fill />
            </div>

            <div className="flex flex-col gap-1">
                <span className='text-[#9498A5] text-[0.75rem]' >{car.name} | {car.model}</span>
                <div className="flex flex-row justify-between">
                <span className='tex-[0.7rem]' >{car.brand}, {car.year}</span>
                <span className='tex-[0.8rem]' >${car?.price}/<small className='text-[0.65rem]' >day</small> </span>
                </div>
            </div>

        </Link>

    </div>
  )
}

export default CarDisplay