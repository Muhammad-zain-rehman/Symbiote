"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import NavLinks from './NavLinks';
import Link from 'next/link';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isSidebarOpen]);

  return (
    <div className='bg-primary py-4 relative'>
      <div className='flex justify-between items-center container'>
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            className='w-[120px]'
            alt='header-logo'
            width={5000}
            height={5000}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className='hidden lg:flex mt-4'>
          <NavLinks />
        </div>

        {/* Contact Button for Desktop */}
        <div className='hidden lg:block'>
          <Link href={"/contact-us"}>
            <button className='bg-white text-black py-3 px-4 text-sm rounded-lg'>
              Contact Us
            </button>
          </Link>
        </div>

        {/* Menu Icon for Mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleSidebar} className='text-white'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full sm:w-1/2 h-full bg-black text-white transform z-[99] ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <Link href={"/"} onClick={toggleSidebar}>
            <Image
              src={"/images/logo.svg"}
              className='w-[120px]'
              alt='header-logo'
              width={5000}
              height={5000}
            />
          </Link>
          <button onClick={toggleSidebar} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-center space-y-6 mt-12">
          <NavLinks toggleSidebar={toggleSidebar} />
          <Link href={"/contact-us"} onClick={toggleSidebar}>
            <button className='bg-white text-black py-3 px-4 text-sm rounded-lg'>
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[98]"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

export default Header;
