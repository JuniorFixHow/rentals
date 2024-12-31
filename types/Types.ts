import { FieldValue, Timestamp } from "firebase/firestore"
import { ReactNode } from "react"

export type NavbarProps = {
    id:number,
    icon:ReactNode,
    link?:string
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
    price:number;
    new:boolean;
    year:string;
}

export interface IRent{
    id:string;
    userId:string;
    carId:string;
    rentedFrom?:Timestamp;
    rentedTo?:Timestamp;
    price:number;
    email:string;
    name:string;
    phone?:string;
    createdAt:FieldValue;
}

export interface IFavourite{
    id:string;
    userId:string;
    carId:string;
    createdAt:FieldValue;
}

export interface IFavouriteData{
    id:string;
    userId:string;
    createdAt:FieldValue;
    car:CarProps;
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
    time:FieldValue,
}

export type ResponseProps = {
    message:string;
    error:boolean;
} | null