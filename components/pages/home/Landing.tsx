import React from 'react'

const Landing = () => {
  return (
    <div className='h-[65vh] md:h-[80vh] bg-[url(/car-160895_1920.png)] bg-contain bg-center bg-no-repeat flex flex-col gap-8 items-center justify-between' >
        <span className='text-4xl scroll-m-8 font-seaweed font-bold bg-gradient-to-r from-blue-950 to-orange-500 bg-clip-text text-transparent' >Diamond Fleet Rentals</span>
        <div className="flex flex-col gap-3 w-full">
            <div className="flex rounded-full w-fit self-center px-6 py-2 flex-row items-center gap-4 bg-gradient-to-br from-black to-blue-600 md:from-[#F7C579] md:to-[#F4743B]" >
                <span className='font-seaweed text-[2rem] text-white' >Rent.</span>
                <span className='font-seaweed text-[2rem] text-white' >Drive.</span>
                <span className='font-seaweed text-[2rem] text-white' >Discover</span>

            </div>
            {/* <Continue className='self-end' link='#services' /> */}
        </div>
    </div>
  )
}

export default Landing