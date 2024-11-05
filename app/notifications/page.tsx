import MainProvider from '@/components/Main'
import NotificationMain from '@/pages/notification/NotificationMain'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: "Notifications",
  description: 'View notifications',
}

const page = () => {
  return (
    <div className='w-full' >
      <MainProvider>
        <NotificationMain/>
      </MainProvider>
    </div>
  )
}

export default page