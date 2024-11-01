'use client'
import { CarTypes, ColoursData, InsuranceData, RentalTypes } from '@/data/Dummy';
import {Small, SmallButtonText, Subtitle} from '@/features/Texts'
import {  Slider, Switch } from '@mui/material';
import React, { useState } from 'react'

const FilterCars = ({toggleNav}:{toggleNav:boolean}) => {

    const minDistance = 10;

    const [range, setRange] = useState<number[]>([50, 1000]);
    const [checkedType, setCheckedTypes] = useState<string[]>([]);
    const [checkedColours, setCheckedColours] = useState<string[]>([]);
    const [checkedInsurance, setCheckedInsurance] = useState<string[]>([]);
    const [available, setAvailable] = useState<boolean>(false);
    const [rentType, setRentType] = useState<string>('Any');

    const handleChange = (
      event: Event,
      newValue: number | number[],
      activeThumb: number,
    ) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
      } else {
        setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
      }
    };

    const handleCheckedTypes=(name:string)=>{
        setCheckedTypes((prev)=> prev.includes(name)
        ? prev.filter(item=>item !== name)
        :
        [...prev, name]
    )
    }

    const handleCheckedInsurance=(name:string)=>{
        setCheckedInsurance((prev)=> prev.includes(name)
        ? prev.filter(item=>item !== name)
        :
        [...prev, name]
    )
    }

    const handleCheckedColours=(name:string)=>{
        setCheckedColours((prev)=> prev.includes(name)
        ? prev.filter(item=>item !== name)
        :
        [...prev, name]
    )
    }
  
    console.log(available)

  return (
    <>
        <div className={`bg-[#F5F5F5] dark:bg-slate-700 absolute mt-10 ${toggleNav?'flex':'hidden'} xl:mt-0 xl:sticky xl:flex flex-col gap-4 py-5 px-4 rounded-2xl`} >
            <div className="flex flex-row justify-between items-center">
                <Subtitle className='dark:text-white' text='Filters' />
                <SmallButtonText text='Reset' />
            </div>

            <div className="flex flex-row gap-3 justify-between">
                <select className='shadow-lg text-black rounded-xl py-1 px-2 border-none outline-none' defaultValue='All'>
                    <option className='dark:bg-black dark:text-white' value="All">All</option>
                    <option className='dark:bg-black dark:text-white' value="Toyota">Toyota</option>
                    <option className='dark:bg-black dark:text-white' value="Honda">Honda</option>
                </select>

                <select className='shadow-lg text-black rounded-xl py-1 px-2 border-none outline-none' defaultValue='All'>
                    <option className='dark:bg-black dark:text-white' value="All">4X4</option>
                    <option className='dark:bg-black dark:text-white' value="4X4">4X4</option>
                    <option className='dark:bg-black dark:text-white' value="Civic">Civic</option>
                    {/* <option className='dark:bg-black dark:text-white' value="T">Honda</option> */}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <Small text='Prie range per hour' />
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={range}
                    max={1000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={(range:number)=>range.toString()}
                    disableSwap
                />
            </div>

            <div className="flex flex-col gap-2">
                <Small text='Type' />
                <div className="grid grid-cols-3 gap-4">
                    {
                        CarTypes.map((item)=>(
                            <div className="flex flex-row items-center gap-1" key={item} >
                                <input className='rounded' onChange={()=>handleCheckedTypes(item)} checked={checkedType.includes(item)} type="checkbox" name={item} id={item} />
                                <span className='text-[0.8rem]' >{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Small text='Colour' />
                <div className="grid grid-cols-3 gap-4">
                    {
                        ColoursData.map((item)=>(
                            <div onClick={()=>handleCheckedColours(item.name)}  className="flex flex-row items-center gap-1 cursor-pointer" key={item.code} >
                                <div style={{backgroundColor:item.code, borderColor:checkedColours.includes(item.name) ? item.secondary:'', borderWidth:2}}  className={`p-2 shadow-lg rounded-full`}/>
                                <span className='text-[0.8rem]' >{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full border border-slate-200"/>

            <div className="flex flex-row gap-4 items-center">
                <Small text='Available now only' />
                <Switch checked={available} onChange={()=>setAvailable(e=>!e)} />
            </div>

            <div className="flex flex-col gap-2">
                <Small text='Rental type' />
                <div className="flex flex-row items-center gap-4">
                    {
                        RentalTypes.map((item)=>(
                            <button onClick={()=>setRentType(item)} key={item}  className={`text-[0.7rem] shadow-lg rounded px-2 py-1 ${rentType === item ? 'text-white bg-[#3A80F4]':'text-black bg-white' }`} >{item}</button>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Small text='Car Insurance' />
                <div className="grid grid-cols-1 gap-2">
                {
                    InsuranceData.map((item)=>(
                        <div className="flex flex-row items-center gap-1" key={item} >
                            <input className='rounded' onChange={()=>handleCheckedInsurance(item)} checked={checkedInsurance.includes(item)} type="checkbox" name={item} id={item} />
                            <span className='text-[0.8rem]' >{item}</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default FilterCars