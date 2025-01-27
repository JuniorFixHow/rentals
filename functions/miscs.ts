import { CarsData } from "@/data/Dummy";
import { CarProps, IFavourite,  IRent } from "@/types/Types";

export const getFavourite = (favourites:IFavourite[], carId:string):IFavourite|undefined=>{
    const favourite = favourites.find((fav)=>{
       return fav.carId === carId
    });

    return favourite
}

export const getRent = (rents:IRent[], carId:string):IRent|undefined=>{
    const rented = rents.find((rent)=>{
        return rent.carId === carId
    });
    return rented;
}

export const getFavourites = (favourites:IFavourite[]):CarProps[]=>{
    const list:CarProps[] = [];
    favourites.map((item)=>{
        const carItem =  CarsData.find((car)=>car.id === item.carId);
        if(carItem){
            list.push(carItem)
        }
    });

    return list;
}

export const getRents = (rents:IRent[]):CarProps[]=>{
    const list:CarProps[] = [];
    rents.map((item)=>{
        const carItem =  CarsData.find((car)=>car.id === item.carId);
        if(carItem){
            list.push(carItem)
        }
    });

    return list;
}

export const getCarBrands = (): string[] => {
    const items = CarsData
        .map((item) => item.brand)
        .filter((brand): brand is string => brand !== undefined && brand !== null);
    const uniqueBrands = [...new Set<string>(items)];
    return uniqueBrands;
};

export const getCarModels = (): string[] => {
    const items = CarsData
        .map((item) => item.model)
        .filter((model): model is string => model !== undefined && model !== null);
    const uniqueModels = [...new Set<string>(items)];
    return uniqueModels;
};

export const getCarColours = (): string[] => {
    const items = CarsData
        .map((item) => item.colour)
        .filter((colour): colour is string => colour !== undefined && colour !== null);
    const uniqueColours = [...new Set<string>(items)];
    return uniqueColours;
};



export const getCurrency =(car:CarProps):string=>{
    return car?.isDollar ? '$' : 'GHC'
}