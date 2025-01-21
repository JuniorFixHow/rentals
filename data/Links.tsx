import { NavbarProps } from "@/types/Types";
import { CiHome } from "react-icons/ci";
import { BiTaxi } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

export const NavbarLinks:NavbarProps[] = [
    {
        id:1,
        icon:<CiHome/>,
        link:'/'
    },
    {
        id:2,
        icon:<BiTaxi/>,
        link:'/cars'
    },
    {
        id:3,
        icon:<IoCalendarOutline/>,
        link:'/bookings'
    },
    {
        id:4,
        icon:<FaRegHeart/>,
        link:'/favourites'
    },
    {
        id:5,
        icon:<GoPackage/>,
        link:'/orders'
    },
]

export const NavbarHelps:NavbarProps[] = [
    {
        id:6,
        icon:<FaRegBell/>,
        link:'/notifications'
    },
    {
        id:7,
        icon:<Link href='mailto:lysanderautorentals@gmail.com' target='_blank' ><IoMdHelpCircleOutline/></Link>,
    },
    {
        id:8,
        icon:<RiLogoutCircleRLine color="crimson" />,
    },
    
] 