'use client'
import { NotificationsData } from '@/data/Dummy';
import NotificationItem from '@/features/NotificationItem'
import { useState } from 'react';

const AllNotifications = () => {
  const [currentNotiId, setcurrentNotiId] = useState<string | null>(null);

  const handleNotiClick = (notiId:string)=>{
    
    setcurrentNotiId(currentNotiId === notiId ? null : notiId)
  }
  return (
    <div className='w-full gap-6 flex flex-col' >
      {
        NotificationsData.map((noti)=>(
          <NotificationItem isOpen={currentNotiId === noti.id}  handleClick={()=>handleNotiClick(noti.id)} key={noti.id} noti={noti} />
        ))
      }
    </div>
  )
}

export default AllNotifications