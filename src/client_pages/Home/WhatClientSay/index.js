import React from 'react'
import './style.css'
import Image from 'next/image'



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
            <div className='flex min-h-[600px] mt-20  px-[10%] bg-cover bg-no-repeat bg-center' style={{
                background: `url(/images/landing_background.svg)`
            }}>
                <div className='w-1/2 text-white flex flex-col justify-center '>

                    <h1 className='text-4xl font-semibold text-left '>What our Clients say <br />About Us</h1>
                    <p className='mt-10 text-left w-1/2'>
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success
                        for our clients. Here's what some of our satisfied clients have to say about their experience working with us
                    </p>
                </div>
                <div className='w-1/2 text-sm text-accent grid gap-5 grid-cols-2'>
                    {
                        ARRAY.map((item)=>(
                            <div className='card_type_1 min-h-[200px] p-4 rounded-xl space-y-4 '>
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
            </div>

        </>
    )
}

export default WhatClientSay