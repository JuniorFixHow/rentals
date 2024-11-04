import Back from '@/misc/Back'
import React from 'react'
import AllNotifications from './AllNotifications'


const NotificationMain = () => {
  return (
    <div className='flex flex-col gap-6 px-4 pb-8' >
        <div className="flex flex-row relative items-center justify-center w-full">
            <Back className='absolute left-0' />
            <span className='font-bold' >Notifications</span>
        </div>
        <AllNotifications/>
    </div>
  )
}

export default NotificationMain