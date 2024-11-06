import  { ComponentProps } from 'react'
import { GoButton } from './Texts'
import Link from 'next/link'
import { formatDateTime } from '@/functions/Dates'
import { MdDelete } from "react-icons/md";
import { NotificationProps } from '@/types/Types'

type NotificationItemProps = {
  noti:NotificationProps,
  isOpen:boolean,
  handleClick:()=>void
} & ComponentProps<'div'>

const NotificationItem = ({className, handleClick, isOpen, noti, ...props}:NotificationItemProps ) => {
 
  return (
    <div {...props}  className={`flex flex-col rounded shadow p-4 gap-2 bg-white dark:bg-transparent dark:border ${className}`} >
      <div className="flex flex-col gap-1">
        <span  onClick={handleClick}  className={`text-[0.9rem] w-fit ${noti.read ? 'text-slate-600 dark:text-slate-500':'text-slate-900 dark:font-bold dark:text-white'} cursor-pointer  ${!isOpen && 'underline'}`} >{noti.title}</span>
        
        {
          isOpen &&

          <>
          <small className='text-[0.8rem]' >{noti.content}</small>
          <div className="flex gap-4 items-center justify-end py-2">
            {
              noti?.carId &&
              <Link href={`cars/${noti.carId}`} >
                <GoButton className='px-2 py-1 rounded bg-blue-700 hover:bg-blue-800 dark:hover:bg-black dark:hover:border-blue-700 text-white dark:bg-black dark:border' text='View Car' />
              </Link>
            }
            {
              noti?.orderId &&
              <GoButton className='px-2 py-1 rounded bg-blue-700 hover:bg-blue-800 dark:hover:bg-black dark:hover:border-blue-700 text-white dark:bg-black dark:border' text='Complete Payment' />
            }
          </div>
            <hr className='border-slate-300 w-full' />
          </>
        }
          <div className="flex justify-end items-center gap-4">
            <small className='text-[0.7rem]' >{formatDateTime(noti.time)}</small>
            <MdDelete className='text-red-700 dark:text-white cursor-pointer' />
          </div>
      </div>
    </div>
  )
}

export default NotificationItem