"use client"
import { useTheme } from '@/context/ThemeProvider'
import { ServiceLeftProps } from './ServiceLeft'
import Image from 'next/image'

const ServiceRight = ({serviceCard}:ServiceLeftProps) => {
  const {isDark} = useTheme()
  // console.log('darki: ',isDark)
  return (
    <div className='bg-slate-100 hidden dark:bg-slate-800 md:flex relative rounded-lg p-3' >
        
        <div className="flex absolute -right-1 -top-1 p-2 text-white dark:text-[#0C111D] bg-[#0C111D] dark:bg-white shadow rounded-full justify-center items-center">
            0{serviceCard?.id}
        </div>
        {/* <div className={'h-[25rem] bg-black w-[20rem]'} ></div> */}
        <Image height={500} width={300} alt='service' src={isDark? serviceCard?.imageDark: serviceCard?.image}  />
    </div>
  )
}

export default ServiceRight