"use client"
import Image from 'next/image'
import React from 'react'
import { nav_links } from '../header/links'
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Footer = () => {
  const path = usePathname();

  return (
    <div className=' min-h-[320px] bg-primary pt-8 bg-no-repeat bg-cover bg-center'
    // style={{
    //   backgroundImage: `url(/images/footer_bg.svg)`
    // }}
    >

      <div className='container space-y-12'>
        <div className=' flex flex-wrap flex-col md:flex-row text-sm justify-between items-center gap-y-5'>
          <Image src={"/images/logo.png"} className='w-[120px]' alt='footer-logo' width={1000} height={1000} />


          <div className='flex space-x-4 lg:space-x-8 text-sm'>
            {
              nav_links.map((item,index) => (
                <Link href={item.url} key={index}>
                  <div className={`group text-center cursor-pointer transition-all duration-500 ease-out relative ${path === item.url ? "text-white" : "text-[#A3A0A0] hover:text-white"}`}>
                    {item.name}
                    <div className={`${path === item.url ? "scale-x-[1]" : ""} origin-bottom-left transition-all duration-500 ease-out scale-x-[0] group-hover:scale-x-[1] h-1 mt-2 rounded-xl w-16 bg-white`}></div>
                  </div>
                </Link>
              ))
            }
          </div>


          <div className='flex space-x-4 border-[0px] px-2  rounded-xl py-4  items-center border-white '>
            {/* <div className='text-white text-sm'>Connect</div> */}
            <div className='bg-primary flex-shrink-0 rounded-lg p-2'><Image src={"/icons/facebook.svg"} alt='facebook-icon' className='w-6' width={1000} height={1000} /> </div>
            <div className='bg-primary flex-shrink-0 rounded-lg p-2'><Image src={"/icons/twitter.svg"} alt='twitter-icon' className='w-6' width={1000} height={1000} /> </div>
            <div className='bg-primary flex-shrink-0 rounded-lg p-2'><Image src={"/icons/linkdIn.svg"} alt='linkedIn-icon' className='w-6' width={1000} height={1000} /> </div>
          </div>



        </div>
        <div className='text-accent text-sm  lg:w-[35%]'>
          We are a forward-thinking Digital Marketing Solutions provider, combining marketing expertise with cutting-edge digital technology. Our innovative solutions are designed to drive marketing growth for businesses of all sizes and at any stage of digital transformation.
          {/* By leveraging our expertise, we ensure your brand achieves digital maturity and excels in engaging healthcare professionals and patients worldwide.
          Partner with Symbiotic to transform your digital marketing efforts and drive impactful results in the pharma sect */}
        </div>

        <div className='flex flex-wrap justify-between'>
          <div className='text-accent flex flex-wrap gap-x-10 '>
            <div className="flex gap-x-3 items-center border-b py-2 border-b-white ">
              <MdEmail className="text-white text-lg" />
              <span className=''>Kashi.novartis@gmail.com</span>
            </div>
            <div className="flex gap-x-3 items-center border-b py-2 border-b-white ">
              <FaPhone className="text-white text-md" />
              <span>+973 3437 0033</span>
            </div>
            <div className="flex gap-x-3 items-center border-b py-2 border-b-white ">
              <IoLocationSharp className="text-white text-lg" />
              {/* <span>Auckland, GB #102, USA</span> */}
              <span>Bahrain</span>
            </div>
          </div>
          <div className='text-accent text-sm'>© 2023 Symbiotic. All rights reserved.</div>
        </div>
      </div>

      <div className='flex justify-end mt-10'>
        <Image src={"/images/footer_line.svg"} alt='footer-line' width={500} height={500} className=' w-[90%]' />
      </div>



    </div>
  )
}

export default Footer