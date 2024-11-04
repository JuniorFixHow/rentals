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
        icon:<Link href='/' ><CiHome/></Link> 
    },
    {
        id:2,
        icon:<Link href='/cars' ><BiTaxi/></Link> 
    },
    {
        id:3,
        icon:<Link href='/bookings' ><IoCalendarOutline/></Link>
    },
    {
        id:4,
        icon:<Link href='/favourites' ><FaRegHeart/></Link>
    },
    {
        id:5,
        icon:<Link href='/orders' ><GoPackage/></Link>
    },
]

export const NavbarHelps:NavbarProps[] = [
    {
        id:6,
        icon:<Link href='/notifications' ><FaRegBell/></Link>
    },
    {
        id:7,
        icon:<Link href='mailto:diamondtoursgh@gmail.com' ><IoMdHelpCircleOutline/></Link>
    },
    {
        id:8,
        icon:<RiLogoutCircleRLine color="crimson" />
    },
    
] 