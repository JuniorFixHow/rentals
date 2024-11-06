import Link from "next/link";
import { ComponentProps } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Continue = ({up, link, className, ...props}:{up?:boolean, link:string}&ComponentProps<'a'>) => {
  return (
    <Link {...props} href={link}  className={`flex flex-col gap-1 cursor-pointer items-center ${className}`} >
        {
            up?
            <FaArrowUp  className="text-blue-800" />:
            <FaArrowDown className="text-blue-800" />
        }
        <span className="text-blue-700" >Continue</span>
    </Link>
  )
}

export default Continue