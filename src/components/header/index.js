import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks';
import Link from 'next/link';

const Header = () => {

  return (
    <div className='bg-primary py-4  '>
      <div className=' flex justify-between items-center container'>
        <Link href={"/"}>
          <Image src={"/images/logo.svg"} className='w-[120px]' width={5000} height={5000} />
        </Link>
        <NavLinks />
        <div>
          <Link href={"/contact-us"}>
            <button className='bg-white text-black py-3 px-4 text-sm rounded-lg'>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header