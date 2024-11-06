import React from 'react'
import { Subtitle } from './Texts'
import ServiceItem from '@/components/misc/ServiceItem'
import { MdOutlineDirectionsCarFilled } from 'react-icons/md'
import { BsShieldCheck } from "react-icons/bs";
import { PiPhoneCallDuotone } from "react-icons/pi";

const OurServices = () => {
  return (
    <div className='bg-[#0C111D] flex flex-col gap-3 rounded-xl dark:border w-full px-4 py-4 md:py-8' >
      <span className='text-blue-700 text-xl font-semibold' >Our Services</span>
      <div className="flex flex-col w-full gap-2 items-center md:flex-row md:items-start md:justify-between">
        <Subtitle className='text-white w-full md:w-[47%]' text='Our Premier services for your car rental needs'  />
        <span className='text-slate-400 text-[0.8rem] w-full md:w-[46%]' >We take pride in providing top-notch soultions! Our premier services ensure a seamless & simple car rental experience, offering cars that suit your prefences.</span>
      </div>
      <div className="flex flex-col items-center mt-6 gap-4 md:flex-row justify-around md:items-start">
        <ServiceItem 
          icon={<MdOutlineDirectionsCarFilled className="text-white" />} 
          title='Well-maintained Car'
          text='Enjoy your trip in peace and comfort with our car rental which offeres a well-maintained fleet, prioritizes the health and safety of our vehicles'
        />
        <ServiceItem 
          icon={<BsShieldCheck className="text-white" />} 
          title='Secure Payments'
          text='With a safe and reliable payment system, you can continue your journey with peace of mind, without worrying about tranaction security'
        />
        <ServiceItem 
          icon={<PiPhoneCallDuotone className="text-white" />} 
          title='24/7 Support'
          text="We understand that the journey doesn't always run smoothly. Therefore, our customer support team is ready to help you 24/7"
        />
        
      </div>
    </div>
  )
}

export default OurServices