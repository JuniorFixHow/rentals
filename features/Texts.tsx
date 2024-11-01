import React, { ComponentProps } from 'react'

export const Subtitle = ({text, className, ...props}:{text:string}& ComponentProps<'span'>) => {
  return (
    <span {...props}  className={`font-semibold text-xl ${className}`} >{text}</span>
  )
}

export const Small = ({text, className, ...props}:{text:string}& ComponentProps<'small'>) => {
  return (
    <small {...props}  className={`font-bold text-[0.8rem] dark:text-white ${className}`} >{text}</small>
  )
}

export const SmallButtonText = ({text, className, ...props}:{text:string}& ComponentProps<'button'>) => {
  return (
    <button className={`text-[#3A80F4] text-[0.8rem] hover:text-blue-700 ${className}`} {...props} >{text}</button>
  )
}


export const SmallButton = ({text, className, ...props}:{text:string}& ComponentProps<'button'>) => {
  return (
    <button className={`text-[0.8rem]  dark:border rounded-lg ${className}`} {...props} >{text}</button>
  )
}

