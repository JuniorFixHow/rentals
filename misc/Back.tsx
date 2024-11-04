'use client'
import { useRouter } from "next/navigation"
import { ComponentProps } from "react";
import { MdKeyboardBackspace } from "react-icons/md"

const Back = ({className, ...props}:ComponentProps<'div'>) => {
    const router = useRouter();
  return (
    <div {...props} onClick={()=>router.back()}   className={`flex cursor-pointer flex-row gap-3 items-center ${className}`}>
        <MdKeyboardBackspace />
        <span className="" >Back</span>
    </div>
  )
}

export default Back