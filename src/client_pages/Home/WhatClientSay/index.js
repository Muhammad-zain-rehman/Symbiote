import React from 'react'
import './style.css'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { UP_ANIMATION } from '@/utils'



const ARRAY = [
    {
        description:"I am thrilled with the results! They helped me achieve my business goals with their expertise and dedication.",
        name:"Mark Thompson",
        designation:"CEO of EventMasters"
    },
    {
        description:"I am thrilled with the results! They helped me achieve my business goals with their expertise and dedication.",
        name:"Mark Thompson",
        designation:"CEO of EventMasters"
    },
    {
        description:"I am thrilled with the results! They helped me achieve my business goals with their expertise and dedication.",
        name:"Mark Thompson",
        designation:"CEO of EventMasters"
    },
    {
        description:"I am thrilled with the results! They helped me achieve my business goals with their expertise and dedication.",
        name:"Mark Thompson",
        designation:"CEO of EventMasters"
    },
    {
        description:"I am thrilled with the results! They helped me achieve my business goals with their expertise and dedication.",
        name:"Mark Thompson",
        designation:"CEO of EventMasters"
    },
    {
        description:"I am thrilled with the results! They helped me achieve my business goals with their expertise and dedication.",
        name:"Mark Thompson",
        designation:"CEO of EventMasters"
    },

]

const WhatClientSay = () => {
    return (
        <>
            <motion.div {...UP_ANIMATION} className='lg:flex min-h-[600px] mt-20  px-[10%] bg-cover bg-no-repeat bg-center ' style={{
                background: `url(/images/landing_background.svg)`
            }}>
                <div className='lg:w-1/2 text-white flex flex-col justify-center  '>

                    <h1 className='hidden lg:block text-4xl font-semibold text-left  '>What our Clients say <br />About Us</h1>
                    <h1 className='lg:hidden text-4xl font-semibold text-left mt-10'>What our Clients say About Us</h1>
                    <p className='mt-10 text-left lg:w-1/2'>
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success
                        for our clients. Here's what some of our satisfied clients have to say about their experience working with us
                    </p>
                </div>
                <div className='flex flex-wrap lg:w-1/2 py-10 lg:py-0 text-sm text-accent lg:grid gap-5 grid-cols-2'>
                    {
                        ARRAY.map((item)=>(
                            <div className='mx-auto card_type_1 max-w-[250px] lg:w-auto min-h-[200px] p-4 rounded-xl space-y-4 '>
                                <div>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <Image
                                        src="/images/profile.png"
                                        width={70}
                                        height={70}
                                        className='w-12'
                                    />
                                    <div className='flex flex-col space-y-1'>
                                        <h1>{item.name}</h1>
                                        <p>{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>

        </>
    )
}

export default WhatClientSay