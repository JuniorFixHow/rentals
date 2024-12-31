'use client'
import React, { useState } from 'react'
import FilterCars from '../car/FilterCars';
import AllFavourites from './AllFavourites';


const FavouritesMain = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const [brand, setBrand] = useState<string>('All');
    const [model, setModel] = useState<string>('All');
    const [colour, setColour] = useState<string[]>([]);
    const [price, setPrice] = useState<number[]>([0,5000]);


    return (
      <div className='flex  flex-row gap-4 pb-10 md:pb-4 items-start relative' >
          <FilterCars 
            toggleNav={toggleNav}
            colour={colour} setColour={setColour}
            price={price} setPrice={setPrice}
            setBrand={setBrand} setModel={setModel} 
          />

          <AllFavourites 
            toggleNav={toggleNav} setToggleNav={setToggleNav} 
            brand={brand} model={model} colour={colour}
            price={price}
          />
      </div>
    )
  
}

export default FavouritesMain