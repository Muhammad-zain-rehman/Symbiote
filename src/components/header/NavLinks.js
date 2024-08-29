"use client"
import React from 'react'
import { nav_links } from './links'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLinks = () => {
    const path = usePathname();

    return (
        <>
            <div className='flex text-sm space-x-8'>
                {
                    nav_links.map((item, index) => (
                        <Link href={item.url}  >
                            <div className={` group text-center cursor-pointer transition-all duration-500 ease-out relative ${path === item.url ? "text-white" : "text-[#A3A0A0] hover:text-white "}`}>
                                {item.name}
                                <div className={`${path === item.url ? "scale-x-[1]" : ""} origin-bottom-left transition-all duration-500 ease-out scale-x-[0] group-hover:scale-x-[1] h-1 mt-2 rounded-xl w-16 bg-white`}></div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default NavLinks