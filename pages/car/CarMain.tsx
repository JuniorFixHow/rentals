'use client'
import React, { useState } from 'react'
import FilterCars from './FilterCars'
import AllCars from './AllCars'

const CarMain = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className='flex  flex-row gap-4 pb-10 md:pb-0 items-start relative' >
        <FilterCars toggleNav={toggleNav} />
        <AllCars toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </div>
  )
}

export default CarMain