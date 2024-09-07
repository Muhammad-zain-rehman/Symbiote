import Image from 'next/image'
import React from 'react'
import WhatClientSay from '../WhatClientSay'

const ABOUT_US_ARR = [
    {
        title: "Managing Personal Finance",
        icon: "/icons/managing_finance.svg"
    },
    {
        title: "Saving for future",
        icon: "/icons/savings.svg"
    },
    {
        title: "Home Ownership",
        icon: "/icons/home_ownership.svg"
    },
    {
        title: "Education Funding",
        icon: "/icons/education.svg"
    },
]


const WHAT_WE_DO_ARRAY = [
    {
        title: "Startups and Entrepreneurs",
        icon: "/icons/startup.svg"
    },
    {
        title: "Business Expansion",
        icon: "/icons/business_export.svg"
    },
]


const AboutUs = () => {
    return (
        <>
            <div className=' container '>
                <div className=' text-secondary mt-10'>
                    <h1 className='text-4xl font-semibold'>Who We Are</h1>
                    <p className='text-lg mt-5'>
                        Symbiote is at the cutting edge of Digi-Tech,
                        seamlessly blending marketing prowess with advanced digital technology to drive
                        innovation and strategic growth. We deliver bespoke digital solutions designed to accelerate
                        marketing success for pharmaceutical companies, regardless of their size or digital maturity.
                        Our future-focused approach ensures that your brand not only adapts to the evolving digital landscape
                        but thrives in it. Partner with Symbiote to unlock unparalleled marketing growth and establish a powerful,
                        lasting presence in the pharma industry.
                    </p>
                </div>
                <div className='flex justify-between space-x-10 items-start my-10'>
                    <div className='w-[40%] relative '>
                        <div className=' grid grid-cols-2 gap-5 mt-5 ml-[3%]'>
                            {
                                ABOUT_US_ARR.map((item) => (
                                    <div className={`bg-primary text-accent  space-y-5  px-5 py-4  rounded-[20px] flex flex-col justify-center items-center`}>
                                        <Image
                                            src={item.icon}
                                            width={3000}
                                            height={4000}
                                            className={`w-20`}
                                        />
                                        <h2 className=' font-medium text-center'>{item.title}</h2>
                                    </div>
                                ))
                            }
                        </div>
                        <Image
                            src={"/images/about_us_bg.svg"}
                            width={2000}
                            height={2000}
                            className='w-32 absolute z-[-1] top-0 left-0'
                        />
                    </div>
                    <div className=' w-[50%] text-secondary mt-5'>
                        <h1 className='text-4xl font-semibold'>About Us</h1>
                        <p className='text-lg mt-5'>
                            Symbiote stands at the forefront of pharmaceutical digital marketing.
                            Our expertise lies in delivering an extensive array of digital solutions and services
                            that span the full spectrum of content lifecycle management. From initial concept development to creation,
                            through to adaptive reuse, repurposing, and precise localization strategies, Symbiote ensures global dissemination across affiliate networks.
                        </p>

                        <div className='my-10 flex space-x-20'>
                            <div className=' space-y-3'>
                                <h1 className='text-4xl font-bold'>12+</h1>
                                <div>years of Expeirence</div>
                            </div>
                            <div className=' space-y-3'>
                                <h1 className='text-4xl font-bold'>70%</h1>
                                <div>Certified specialists</div>
                            </div>
                        </div>
                        <button className=' btn btn-primary'>
                            Learn More
                        </button>

                    </div>
                </div>
                <div className='flex justify-between mt-32'>
                    <div className='w-[60%] '>
                        <h1 className='text-4xl font-semibold mb-5'>What we do</h1>
                        <div className='mb-5'>
                            At Symbiote, we specialize in merging marketing and digital technology to deliver
                            innovative solutions tailored for the pharmaceutical industry. Our expertise spans across all stages of
                            digital maturity, ensuring that as a pharma company, we can drive your marketing growth.
                            By leveraging cutting-edge technology and strategic insights, we help you connect with healthcare
                            professionals and patients more effectively, enhancing your brand’s reach and impact in the market.
                        </div>
                        <button className=' btn btn-primary'>
                            Learn More
                        </button>
                    </div>
                    <div className=' w-[30%]  relative flex flex-col justify-end items-end pt-5 pr-5 '>
                        {
                            WHAT_WE_DO_ARRAY.map((item) => (
                                <div className={`bg-primary text-accent w-[300px] mb-6  space-y-5  px-5 py-4  rounded-[20px] flex flex-col justify-center items-center`}>
                                    <Image
                                        src={item.icon}
                                        width={3000}
                                        height={4000}
                                        className={`w-20`}
                                    />
                                    <h2 className=' font-medium text-center'>{item.title}</h2>
                                </div>
                            ))
                        }
                        <Image
                            src={"/images/about_us_bg.svg"}
                            width={2000}
                            height={2000}
                            className='w-32 absolute z-[-1] top-0 right-0'
                        />
                    </div>
                </div>
            </div>
            <div className=' mt-20 flex flex-col items-center space-y-11 justify-center '>
                <h1 className='text-4xl'>HealthCare Presences</h1>
                <Image
                    src={"/images/map.svg"}
                    className=' w-1/2'
                    width={2000}
                    height={2000}

                />
            </div>
            <WhatClientSay/>

        </>
    )
}

export default AboutUs