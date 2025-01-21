// import { useTheme } from '@/context/ThemeProvider'
import { RoundButton } from '@/components/features/Texts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
 
  return (
    <div className='bg-[#0C111D] px-8 pt-6 pb-[10rem] md:pb-4 flex flex-col gap-6 md:gap-10' >
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className='text-white' >Be the first to know when we update</span>
          <small className='text-white text-[0.7rem]' >Stay connected with us to get new update information</small>
        </div>

        <div className="flex flex-row items-center gap-2">
          <input placeholder='Enter your email' className='bg-[#182230] border rounded-full px-2 py-2 border-slate-600 text-slate-400 placeholder:text-[0.6rem] text-[0.7rem]' type="text" />
          <RoundButton className='text-white text-[0.7rem] bg-[#175CD3] py-2 px-4 hover:bg-blue-700' text='Subscribe' />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start md:flex-row gap-5 md:gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex relative w-24 h-20">
            <Image src={'/logo.png'} alt='logo' fill />
          </div>
          <small className='text-slate-400 text-[0.7rem] w-[16rem]' >Lysander Auto Rentals is an innovative solution to meet your car needs without any hassle. Easily rent a high-quality car through a simple and user-friendly app.</small>
        </div>

        <div className="flex  grow gap-10 flex-row items-start justify-around">

          <div className="flex flex-col gap-3">
            <small className='text-slate-400 text-[0.7rem]' >Product</small>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='/' >Overview</Link>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='/cars' >Cars</Link>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='/favourites' >Favourites</Link>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='/bookings' >Bookings</Link>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='/orders' >Orders</Link>
          </div>

          <div className="flex flex-col gap-3">
            <small className='text-slate-400 text-[0.7rem]' >Company</small>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='/notifications' >Updates</Link>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='mailto:lysanderautorentals@gmail.com' >Help</Link> 
          </div>

          <div className="flex flex-col gap-3">
            <small className='text-slate-400 text-[0.7rem]' >Socials</small>
            {/* <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='https://x.com' >X</Link>
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='https://linkedin.com' target='_blank' >LinkedIn</Link> 
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='https://facebook.com' target='_blank' >Facebook</Link>  */}
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='https://instagram.com/lysanderautorentals' target='_blank' >Instagram</Link> 
            <Link className='text-white hover:text-blue-700 hover:underline text-[0.8rem]' href='https://tiktok.com/@lysanderautorentals' target='_blank' >TikTok</Link> 
          </div>

        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <hr className='border-slate-600' />
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
          <span className='text-slate-400 text-[0.7rem]' >Copyright &copy; {new Date().getFullYear()}. Lysander Auto Rentals. All rights reserved</span>
          <div className="flex flex-row items-center text-slate-400">
          <Link href='/docs/LYSANDER AUTO RENTALS TnC.docx' download='/docs/LYSANDER AUTO RENTALS TnC.docx'  className='text-slate-400 text-[0.7rem] hover:text-blue-700 hover:underline' >User Terms & Conditions</Link>
          |
          <Link href='#'  className='text-slate-400 text-[0.7rem] hover:text-blue-700 hover:underline' >Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer