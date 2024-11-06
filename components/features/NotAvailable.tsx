import React from 'react'

const NotAvailable = ({text}:{text:string}) => {
  return (
    <div className="flex items-center justify-center w-full h-[60vh]">
      <span className='w-[80%]  font-bold text-2xl text-center' >{text}</span>
    </div>
  )
}

export default NotAvailable