'use client'
import React, { useState } from 'react'
import FilterCars from './FilterCars'
import AllCars from './AllCars'

// brand:string,
// model:string,
// colour:string[],
// type:string,
// insurance:string[],
// rented:boolean,
// rentType:string,
// price:number[],

const CarMain = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const [brand, setBrand] = useState<string>('All');
  const [model, setModel] = useState<string>('All');
  const [colour, setColour] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([0,5000]);

  return (
    <div className='flex  w-full flex-row gap-4 pb-10 md:pb-0 items-start relative' >
        <FilterCars 
          toggleNav={toggleNav}
          colour={colour} setColour={setColour}
          price={price} setPrice={setPrice}
          setBrand={setBrand} setModel={setModel}
         />
        <AllCars 
          toggleNav={toggleNav} setToggleNav={setToggleNav}
          brand={brand} model={model} colour={colour}
          price={price}
          />
    </div>
  )
}

export default CarMain