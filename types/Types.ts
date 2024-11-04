import { ReactNode } from "react"

export type NavbarProps = {
    id:number,
    icon:ReactNode,
}

export type CarTypeProps = string

export type ColoursProps = {
    name:string,
    code:string,
    secondary:string
}

export interface CarProps {
    id:string;
    photos:string[];
    name:string;
    colour:string;
    brand:string;
    model:string;
    pricePerDay?:number;
    pricePerHour?:number;
    type:string; /*Sidan, Van, Pickup, Minivan, Wagon, Couple*/
    rented:boolean;
    rentedBy?:string,
    new:boolean;
    favourites:string[];
    year?:string;
    rentedFrom?:Date;
    rentedTo?:Date;
    rentType:'Per day'|'Per hour'|'Any';
    insurance:string; /*Lokking for things like: Collision Damage Waiver, Roadside Plus,Personal Injury Protection*/
    createdAt:Date;
    //ADD FAVOURITES LATER
}

export type ServiceProp ={
    id:number,
    title:string,
    text:string,
    image:string,
    imageDark:string
}

export type NotificationProps = {
    id:string /*number*/
    title:string,
    userId:string /*number*/
    orderId?:string /*number*/
    carId?:string /*number*/
    content:string,
    read:boolean,
    specialContent?:ReactNode,
    time:Date,
}