import { ComponentProps, ReactNode } from "react";

export type ServiceItemProps = {
    icon:ReactNode,
    title:string,
    text:string
} & ComponentProps<'div'>

const ServiceItem = ({icon, title, text, className, ...props}:ServiceItemProps) => {
  return (
    <div {...props}  className={`cursor-default flex p-4 flex-col shadow-lg gap-6 rounded-lg bg-[#182230] w-[20rem] md:w-[15rem] lg:w-[18rem] ${className}`} >
        <div className="flex w-fit items-center justify-center p-1 rounded-full bg-[#333F53]">
            <div className="flex items-center justify-center p-2 rounded-full bg-[#475467]">
                {icon}
            </div>
        </div>

        <div className="flex flex-col gap-3">
            <span className="text-[0.9rem] text-white font-bold" >{title}</span>
            <span className="text-slate-500 text-[0.7rem]" >{text}</span>
        </div>
    </div>
  )
}

export default ServiceItem