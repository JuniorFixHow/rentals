import { CarsData } from "@/data/Dummy";
import SingleCar from "@/pages/car/single/SingleCar"
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Preview",
  description: 'Preview and book your car',
}

const page = async({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;
    const currentCar = CarsData.filter((car)=>car.id === id)[0];
  return (
    <SingleCar currentCar={currentCar} />
  )
}

export default page