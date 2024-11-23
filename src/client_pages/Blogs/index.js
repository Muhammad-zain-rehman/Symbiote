'use client'
import ContactUsFrom from '@/components/ContactForm/Form'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { UP_ANIMATION } from '@/utils'

const DATA = [
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Symbiotic’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Symbiotic team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Symbiotic’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Symbiotic team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Symbiotic’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Symbiotic team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Symbiotic’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Symbiotic team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Symbiotic’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Symbiotic team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Symbiotic’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Symbiotic team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },

]

const Blogs = () => {
    return (
        <>
            <div  className='bg-secondary h-[400px] py-2'>
                <div className='  container rounded-b-3xl h-full  bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: `url(/images/Group_21387.png)`
                    }}
                >
                    <motion.div {...UP_ANIMATION}>
                        
                    <h1 className='text-[30px] md:text-[50px] text-center font-bold text-white leading-tight'>Our Pharma Marketing </h1>
                    <h2 className='text-[30px] md:text-[50px] text-center font-bold text-white leading-tight mb-4'>Services in Action</h2>


                    <div className='text-center  w-[80%] mx-auto  text-[#E6E6E6] text-md md:text-lg'>
                        Unlock your content with the help of Symbiotic. We provide custom solutions and services actively used by the top 50 Pharma and Life Sciences companies in over 50 countries worldwide
                    </div>
                    </motion.div>

                </div>
            </div>


            <div className=' pb-10 pt-20 lg:py-20'>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                        scale: 0.95
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}
                    exit={{
                        opacity: 0,
                        y: -50,
                        scale: 1
                    }}
                    viewport={{
                        once: true,
                        amount: 0
                    }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 70
                    }}
                    className="container"
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                            DATA.map((item) => (
                                <div>
                                    <Image src={item.image} width={1000} height={1000} className='' />
                                    <h1 className='text-3xl font-bold mt-4 md:mt-12'>{item.name}</h1>
                                    <div className='mt-4 bg-[#B9B7B7] w-fit rounded-lg py-2 text-sm px-4'>{item.date}</div>
                                    <div className=' mt-4 md:mt-8 '>{item.description}</div>
                                    <div>
                                        <button className='btn btn-primary mt-4 md:mt-8 !px-4 !text-sm'>Learn More</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
                <motion.div {...UP_ANIMATION} className='mt-12 lg:mt-24'>
                    <h1 className='text-3xl md:text-5xl text-center font-bold container'>Connect with Us for Personalized<br /> Support</h1>

                    <div className='mt-10 lg:mt-20'>
                        <ContactUsFrom />
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default Blogs