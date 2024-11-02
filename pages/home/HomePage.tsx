import React from 'react'
import Landing from './Landing'
import Services from './Services'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-5 w-full px-4 pb-[6rem]' >
      <Landing/>
      <Services/>
    </div>
  )
}

export default HomePage