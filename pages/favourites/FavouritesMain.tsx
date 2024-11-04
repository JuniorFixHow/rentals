'use client'
import React, { useState } from 'react'
import FilterCars from '../car/FilterCars';
import AllFavourites from './AllFavourites';


const FavouritesMain = () => {
    const [toggleNav, setToggleNav] = useState(false);
    return (
      <div className='flex  flex-row gap-4 pb-10 md:pb-4 items-start relative' >
          <FilterCars toggleNav={toggleNav} />
          <AllFavourites toggleNav={toggleNav} setToggleNav={setToggleNav} />
      </div>
    )
  
}

export default FavouritesMain