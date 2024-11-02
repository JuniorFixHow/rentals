import React from 'react'
import Landing from './Landing'
import Services from './Services'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-5 w-full px-4 pb-[8rem] md:pb-0' >
      <Landing/>
      <Services/>
    </div>
  )
}

export default HomePage