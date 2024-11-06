'use client'

import { ServiceData } from "@/data/Dummy"
import ServiceLeft from "@/components/misc/ServiceLeft"
import ServiceRight from "@/components/misc/ServiceRight"
import { ServiceProp } from "@/types/Types"
import { useState } from "react"

const HowItWorks = () => {
    const [serviceCard, setServiceCard] = useState<ServiceProp>(ServiceData[0])
  return (
    <div className="flex flex-row items-start justify-around" >
        <ServiceLeft serviceCard={serviceCard} setServiceCard={setServiceCard} />
        <ServiceRight serviceCard={serviceCard} />
    </div>
  )
}

export default HowItWorks