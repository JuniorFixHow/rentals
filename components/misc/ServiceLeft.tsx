import { ServiceData } from '@/data/Dummy'
import { ServiceProp } from '@/types/Types'
import React, { Dispatch, SetStateAction } from 'react'

export type ServiceLeftProps = {
    serviceCard:ServiceProp,
    setServiceCard?: Dispatch<SetStateAction<ServiceProp>>
}

const ServiceLeft = ({serviceCard, setServiceCard}:ServiceLeftProps) => {
  return (
    <div className='flex flex-col gap-5 p-4 w-full md:max-w-[49%]' >
        <div className="flex flex-col gap-1">
            <span className='text-blue-700 text-xl font-semibold' >How it works</span>
            <span className=' text-xl font-bold md:text-3xl' >Step by step to rent a car on our platform</span>
        </div>

        {
            ServiceData.map((service)=>(
                <div onClick={()=>setServiceCard!(service)} key={service?.id}  className={`${service.id === serviceCard.id && 'bg-slate-100 dark:bg-slate-600'} rounded flex cursor-pointer flex-row items-center gap-2 px-2 py-1 `}>
                    <div className={`flex items-center justify-center ${service?.id === serviceCard.id ? 'text-white bg-[#0C111D] dark:bg-white  dark:text-slate-800':'bg-white shadow text-slate-800 dark:text-white dark:bg-slate-800'} rounded-full dark:border p-2`}>
                        0{service?.id}
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className='font-semibold' >{service.title}</span>
                        {
                            service.id === serviceCard.id &&
                            <span className='text-[0.7rem] text-slate-600 dark:text-slate-300' >{service.text}</span>
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ServiceLeft