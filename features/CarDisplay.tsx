import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import { SmallButton } from './Texts'
import { formatDateTime } from '@/functions/Dates'
import { CarProps } from '@/types/Types'
import { ComponentProps } from 'react'

const CarDisplay = ({car, ...props}:{car:CarProps} & ComponentProps<'div'>) => {
  return (
    <div {...props}   className="flex border p-3 rounded-lg flex-col gap-4 w-[16rem]" >
        <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row gap-3">
            {
            car.new &&
            <SmallButton text='New' className='bg-gradient-to-br from-[#F7C579] to-[#F4743B] dark:from-transparent dark:to-transparent  cursor-default text-white text-[0.7rem] px-2 py-1' />
            }
            {
            car.rented ?
            <div className="flex items-center justify-center p-1 bg-[#9498A5] rounded-md dark:bg-transparent border">
                <span className='text-[0.6rem] text-white' >Booked till {formatDateTime(car.rentedTo!)}</span>
            </div>
            :
            <SmallButton text='Available' className='bg-[#11B990] dark:bg-transparent cursor-default text-white text-[0.7rem] px-2 py-1' />
            }
        </div>
        {
            car?.favourites.includes('1')?
            <IoMdHeart className='cursor-pointer' color='#3A80F4' />
            :
            <IoIosHeartEmpty className='cursor-pointer' color='#3A80F4' />
        }
        </div>

        <Link href={`/cars/${car.id}`}  className="flex cursor-pointer flex-col w-full">
            <div className="flex flex-row justify-end w-full h-[5rem]">
                <Image src={car?.photos[0]} alt='car_image' height={100} width={150} />
            </div>

            <div className="flex flex-col gap-1">
                <span className='text-[#9498A5] text-[0.75rem]' >{car.name} | {car.model}</span>
                <div className="flex flex-row justify-between">
                <span className='tex-[0.7rem]' >{car.brand}, {car.year}</span>
                {
                    car.pricePerHour ?
                    <span className='tex-[0.8rem]' >${car.pricePerHour}/<small className='text-[0.65rem]' >hour</small> </span>
                    :
                    <span className='tex-[0.8rem]' >${car.pricePerDay}/<small className='text-[0.65rem]' >day</small> </span>
                }
                </div>
            </div>

        </Link>

    </div>
  )
}

export default CarDisplay