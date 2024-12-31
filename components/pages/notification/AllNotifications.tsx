'use client'
import NotificationItem from '@/components/features/NotificationItem'
import { useState } from 'react';
import { useFetchNotifications } from '@/hooks/useNotifications';
import NotAvailable from '@/components/features/NotAvailable';

const AllNotifications = () => {
  const [currentNotiId, setcurrentNotiId] = useState<string | null>(null);
  const {notis} = useFetchNotifications();

  const handleNotiClick = (notiId:string)=>{
    
    setcurrentNotiId(currentNotiId === notiId ? null : notiId)
  }
  return (
    <div className='w-full gap-6 flex flex-col' >
      { notis.length > 0 ?
        notis.map((noti)=>(
          <NotificationItem isOpen={currentNotiId === noti.id}  handleClick={()=>handleNotiClick(noti.id)} key={noti.id} noti={noti} />
        ))
        :
        <NotAvailable text='You have no notifications at the moment.' />
      }
    </div>
  )
}

export default AllNotifications