import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        <Image src={assets.logo} width={120} alt=''/>
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
        <div className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] cursor-pointer'>
      <Image src={assets.add_icon} width={28} alt='' />
      <p> Add Blogs</p>
        </div>
        <div className='flex items-center border border-black gap-3 mt-5 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] cursor-pointer'>
      <Image src={assets.blog_icon} width={28} alt='' />
      <p> Blog List</p>
        </div>
        <div className='flex items-center border border-black gap-3 mt-5 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] cursor-pointer'>
      <Image src={assets.email_icon} width={28} alt='' />
      <p>Subscription</p>
        </div>
        </div>

       
      </div>
    </div>
  )
}

export default Sidebar
