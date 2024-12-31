import {Small, SmallButtonText, Subtitle} from '@/components/features/Texts'
import {  Slider } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import { getCarBrands, getCarColours, getCarModels } from '@/functions/miscs';

export type FilterProps = {
    // brand:string,
    // model:string,
    colour:string[],
    price:number[],

    setBrand:Dispatch<SetStateAction<string>>,
    setModel:Dispatch<SetStateAction<string>>,
    setColour:Dispatch<SetStateAction<string[]>>,
    setPrice:Dispatch<SetStateAction<number[]>>,
    toggleNav:boolean
}

const FilterCars = ({
    toggleNav,
    setBrand,
    setModel,
    colour, setColour,
    price, setPrice
}:FilterProps) => {

    const minDistance = 10;

    const resetFilter = () =>{
        setBrand('All');
        setModel('All');
        setColour([]);
        
        setPrice([0,5000])
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

    // const handleCheckedTypes=(name:string)=>{
    //     setType((prev)=> prev.includes(name)
    //     ? prev.filter(item=>item !== name)
    //     :
    //     [...prev, name]
    // )
    // }

    // const handleCheckedInsurance=(name:string)=>{
    //     setInsurance((prev)=> prev.includes(name)
    //     ? prev.filter(item=>item !== name)
    //     :
    //     [...prev, name]
    // )
    // }

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
                    {
                        getCarBrands().map((item)=>(
                            <option key={item}  className='dark:bg-black dark:text-white' value={item}>{item}</option>

                        ))
                    }
                </select>

                <select onChange={(e)=>setModel(e.target.value)}  className='shadow-lg text-black rounded-xl py-1 px-2 border-none outline-none' defaultValue='All'>
                    <option className='dark:bg-black dark:text-white' value="All">All</option>
                    {
                        getCarModels().map((item)=>(
                            <option key={item} className='dark:bg-black dark:text-white' value={item}>{item}</option>

                        ))
                    }
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <Small text='Prie range per hour' />
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={price}
                    max={5000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={(range:number)=>range.toString()}
                    disableSwap
                />
            </div>

            

            <div className="flex flex-col gap-2">
                <Small text='Colour' />
                <div className="grid grid-cols-3 gap-3">
                    {
                        getCarColours().map((item)=>(
                            <div onClick={()=>handleCheckedColours(item)}  className="flex flex-row items-center gap-1 cursor-pointer" key={item} >
                                <div style={{backgroundColor:item.toLowerCase(), borderColor:colour.includes(item) ? 'red':'', borderWidth:2}}  className={`p-2 shadow-lg rounded-full`}/>
                                <span className='text-[0.8rem]' >{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full border border-slate-200"/>

            

            

            
        </div>
    </>
  )
}

export default FilterCars