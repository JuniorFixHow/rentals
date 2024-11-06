import HowItWorks from "@/components/features/HowItWorks"
import OurServices from "@/components/features/OurServices"
import Link from "next/link"

const Services = () => {
  return (
    <div id="services" className="flex flex-col gap-6 md:gap-10 w-full scroll-mt-8" >
        <OurServices/>
        <HowItWorks/>
        <Link className="self-center" href='/cars' >
          <span className='text-blue-700 underline text-xl font-semibold' >Browse through our collection</span>
        </Link>
    </div>
  )
}

export default Services