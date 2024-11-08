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
  const [type, setType] = useState<string[]>([]);
  const [insurance, setInusrance] = useState<string[]>([]);
  const [rented, setRented] = useState<boolean>(false);
  const [rentType, setRentType] = useState<string>('Any');
  const [price, setPrice] = useState<number[]>([0,1000]);

  return (
    <div className='flex  w-full flex-row gap-4 pb-10 md:pb-0 items-start relative' >
        <FilterCars 
          toggleNav={toggleNav}
          colour={colour} setColour={setColour}
          type={type} setType={setType}
          insurance={insurance} setInsurance={setInusrance}
          rented={rented} setRented={setRented}
          rentType={rentType} setRentType={setRentType}
          price={price} setPrice={setPrice}
          setBrand={setBrand} setModel={setModel}
         />
        <AllCars 
          toggleNav={toggleNav} setToggleNav={setToggleNav}
          brand={brand} model={model} colour={colour}
          type={type} insurance={insurance}
          rented={rented} rentType={rentType} price={price}
          />
    </div>
  )
}

export default CarMain