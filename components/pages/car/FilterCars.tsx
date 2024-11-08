import { CarTypes, ColoursData, InsuranceData, RentalTypes } from '@/data/Dummy';
import {Small, SmallButtonText, Subtitle} from '@/components/features/Texts'
import {  Slider, Switch } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'

export type FilterProps = {
    // brand:string,
    // model:string,
    colour:string[],
    type:string[],
    insurance:string[],
    rented:boolean,
    rentType:string,
    price:number[],

    setBrand:Dispatch<SetStateAction<string>>,
    setModel:Dispatch<SetStateAction<string>>,
    setColour:Dispatch<SetStateAction<string[]>>,
    setType:Dispatch<SetStateAction<string[]>>,
    setInsurance:Dispatch<SetStateAction<string[]>>,
    setRented:Dispatch<SetStateAction<boolean>>,
    setRentType:Dispatch<SetStateAction<string>>,
    setPrice:Dispatch<SetStateAction<number[]>>,
    toggleNav:boolean
}

const FilterCars = ({
    toggleNav,
    setBrand,
    setModel,
    colour, setColour,
    type, setType,
    insurance, setInsurance,
    rented, setRented,
    rentType, setRentType,
    price, setPrice
}:FilterProps) => {

    const minDistance = 10;

    const resetFilter = () =>{
        setBrand('All');
        setModel('All');
        setColour([]);
        setType([]);
        setInsurance([]);
        setRented(false);
        setRentType('Any');
        setPrice([0,1000])
    }

    // const [range, setRange] = useState<number[]>([50, 1000]);
    // const [checkedType, setCheckedTypes] = useState<string[]>([]);
    // const [checkedColours, setCheckedColours] = useState<string[]>([]);
    // const [checkedInsurance, setCheckedInsurance] = useState<string[]>([]);
    // const [available, setAvailable] = useState<boolean>(false);

    const handleChange = (
      event: Event,
      newValue: number | number[],
      activeThumb: number,
    ) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
      } else {
        setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
      }
    };

    const handleCheckedTypes=(name:string)=>{
        setType((prev)=> prev.includes(name)
        ? prev.filter(item=>item !== name)
        :
        [...prev, name]
    )
    }

    const handleCheckedInsurance=(name:string)=>{
        setInsurance((prev)=> prev.includes(name)
        ? prev.filter(item=>item !== name)
        :
        [...prev, name]
    )
    }

    const handleCheckedColours=(name:string)=>{
        setColour((prev)=> prev.includes(name)
        ? prev.filter(item=>item !== name)
        :
        [...prev, name]
    )
    }
  
    // console.log(available)

  return (
    <>
        <div className={`bg-[#F5F5F5] z-10 ml-4 md:ml-0 dark:bg-slate-700 absolute mt-10 ${toggleNav?'flex':'hidden'} xl:mt-0 xl:sticky xl:flex flex-col gap-4 py-5 px-4 rounded-2xl`} >
            <div className="flex flex-row justify-between items-center">
                <Subtitle className='dark:text-white' text='Filters' />
                <SmallButtonText onClick={resetFilter} text='Reset' />
            </div>

            <div className="flex flex-row gap-3 justify-between">
                <select onChange={(e)=>setBrand(e.target.value)}  className='shadow-lg text-black rounded-xl py-1 px-2 border-none outline-none' defaultValue='All'>
                    <option className='dark:bg-black dark:text-white' value="All">All</option>
                    <option className='dark:bg-black dark:text-white' value="Toyota">Toyota</option>
                    <option className='dark:bg-black dark:text-white' value="Honda">Honda</option>
                </select>

                <select onChange={(e)=>setModel(e.target.value)}  className='shadow-lg text-black rounded-xl py-1 px-2 border-none outline-none' defaultValue='All'>
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
                    value={price}
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
                                <input className='rounded' onChange={()=>handleCheckedTypes(item)} checked={type.includes(item)} type="checkbox" name={item} id={item} />
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
                                <div style={{backgroundColor:item.code, borderColor:colour.includes(item.name) ? item.secondary:'', borderWidth:2}}  className={`p-2 shadow-lg rounded-full`}/>
                                <span className='text-[0.8rem]' >{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full border border-slate-200"/>

            <div className="flex flex-row gap-4 items-center">
                <Small text='Available now only' />
                <Switch checked={!rented} onChange={()=>setRented(e=>!e)} />
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
                            <input className='rounded' onChange={()=>handleCheckedInsurance(item)} checked={insurance.includes(item)} type="checkbox" name={item} id={item} />
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