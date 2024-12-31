import { CarProps } from "@/types/Types";

export const filterCars = (
    cars:CarProps[],
    brand:string,
    model:string,
    colour:string[],
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
    .filter((item)=>{

        return item.price >= price[0] && item.price <= price[1];
    })

    return filteredCars;
}