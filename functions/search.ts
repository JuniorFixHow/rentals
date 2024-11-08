import { CarProps } from "@/types/Types";

export const filterCars = (
    cars:CarProps[],
    brand:string,
    model:string,
    colour:string[],
    type:string[],
    insurance:string[],
    rented:boolean,
    rentType:string,
    price:number[],
):CarProps[]=>{
    const filteredCars:CarProps[] = cars.filter((a)=>{
        return brand === 'All' ? a : a.brand.toLowerCase() === brand.toLowerCase()
    })
    .filter((b)=>{
        return model === 'All' ? b : b.model.toLowerCase() === model.toLowerCase()
    })
    .filter((c)=>{
        return colour.length === 0 ? c : colour.includes(c.colour)
    })
    .filter((d)=>{
        return type.length === 0 ? d : type.includes(d.type)
    })
    .filter((e)=>{
        return insurance.length === 0 ? e : insurance.includes(e.insurance)
    })
    .filter((f)=>{
        return rented ? f.rented : !f.rented
    })
    .filter((g)=>{
        return rentType === 'Any' ? g : g.rentType === rentType
    })
    .filter((h)=>{
        if(h?.pricePerDay){
            return (h.pricePerDay >= price[0]) && (h.pricePerDay <= price[1])
        }else if(h?.pricePerHour){
            return (h.pricePerHour >= price[0]) && (h.pricePerHour <= price[1])
        }
        return false
    })

    return filteredCars;
}