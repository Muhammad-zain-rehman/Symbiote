import Image from 'next/image'
import React from 'react'
import { nav_links } from '../header/links'
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className=' min-h-[320px] bg-primary pt-8 bg-no-repeat bg-cover bg-center'
    // style={{
    //   backgroundImage: `url(/images/footer_bg.svg)`
    // }}
    >

      <div className='container space-y-12'>
        <div className=' flex flex-wrap flex-col md:flex-row text-sm justify-between items-center gap-y-5'>
            <Image src={"/images/logo.svg"} className='w-[120px]' alt='footer-logo'  width={5000} height={5000} />


            <div className='flex space-x-4 lg:space-x-8 text-sm'>
              {
                nav_links.map((item) => (
                  <div className='text-white'>
                    {item.name}
                  </div>
                ))
              }
            </div>
         

          <div className='flex space-x-4 border-[1px] px-2  rounded-xl py-4  items-center border-white '>
            <div className='text-white text-sm'>Stay Connected</div>
            <div className='bg-primary flex-shrink-0 rounded-lg p-2'><Image src={"/icons/facebook.svg"} alt='facebook-icon' className='w-4' width={1000} height={1000} /> </div>
            <div className='bg-primary flex-shrink-0 rounded-lg p-2'><Image src={"/icons/twitter.svg"} alt='twitter-icon' className='w-4' width={1000} height={1000} /> </div>
            <div className='bg-primary flex-shrink-0 rounded-lg p-2'><Image src={"/icons/linkdIn.svg"} alt='linkedIn-icon' className='w-4' width={1000} height={1000} /> </div>
          </div>



        </div>
        <div className='text-accent text-sm  lg:w-[35%]'>
          Symbiote is a global services provider for the life sciences industry, specializing in MarTech solutions.
          We offer end-to-end, tailor-made strategies to build omnichannel excellence from any point and level of digital maturity.
          Our team of industry professionals is dedicated to implementing best-in-class omnichannel projects and communication strategies for the global pharmaceutical market.
          {/* By leveraging our expertise, we ensure your brand achieves digital maturity and excels in engaging healthcare professionals and patients worldwide.
          Partner with Symbiote to transform your digital marketing efforts and drive impactful results in the pharma sect */}
        </div>

        <div className='flex flex-wrap justify-between'>
          <div className='text-accent flex flex-wrap gap-x-10'>
            <div className="flex gap-x-3 items-center">
              <MdEmail className="text-white text-lg" />
              <span className=''>hello@symbiote.com</span>
            </div>
            <div className="flex gap-x-3 items-center">
              <FaPhone className="text-white text-md" />
              <span>+913228001411</span>
            </div>
            <div className="flex gap-x-3 items-center">
              <IoLocationSharp className="text-white text-lg" />
              <spna>Auckland, GB #102, USA</spna>
            </div>
          </div>
          <div className='text-accent text-sm'>© 2023 SquareUp. All rights reserved.</div>
        </div>
      </div>

      <div className='flex justify-end mt-10'>
        <Image src={"/images/footer_line.svg"} alt='footer-line' width={500} height={500} className=' w-[90%]' />
      </div>



    </div>
  )
}

export default Footer