import { NavbarProps } from "@/types/Types";
import { CiHome } from "react-icons/ci";
import { BiTaxi } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const NavbarLinks:NavbarProps[] = [
    {
        id:1,
        icon:<CiHome/>
    },
    {
        id:2,
        icon:<BiTaxi/>
    },
    {
        id:3,
        icon:<IoCalendarOutline/>
    },
    {
        id:4,
        icon:<FaRegHeart/>
    },
    {
        id:5,
        icon:<GoPackage/>
    },
]

export const NavbarHelps:NavbarProps[] = [
    {
        id:6,
        icon:<FaRegBell/>
    },
    {
        id:7,
        icon:<IoMdHelpCircleOutline/>
    },
    {
        id:8,
        icon:<RiLogoutCircleRLine color="crimson" />
    },
    
] 