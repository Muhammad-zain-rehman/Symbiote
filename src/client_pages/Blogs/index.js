import ContactUsFrom from '@/components/ContactForm/Form'
import Image from 'next/image'
import React from 'react'


const DATA = [
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Viseven’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Viseven team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Viseven’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Viseven team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Viseven’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Viseven team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Viseven’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Viseven team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Viseven’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Viseven team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },
    {
        image: "/images/blogs_dummy_image.svg",
        name: "Viseven’s Q2 Calendar: Unmissable Life Science Events ",
        date: "07-25-2024",
        description: "Viseven team embarked on a global journey, traversing continents to attend and participate in the world’s most prominent pharmaceutical events.",
    },

]

const Blogs = () => {
    return (
        <>
            <div className='bg-secondary h-[400px] py-2'>
                <div className='  container rounded-b-3xl h-full  bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center'
                style={{
                    backgroundImage:`url(/images/Group_21387.png)`
                }}
                >
                    <div className='w-full container space-y-10  bg-cover bg-no-repeat text-sm py-3 relative '>
                        <h1 className='text-[50px] text-center font-bold text-white'>Our Pharma Marketing</h1>
                        <h2 className='text-[50px] text-center font-bold text-white'>Services in Action</h2>
                        <div className='text-center  w-[80%] mx-auto  text-[#E6E6E6] text-lg'>
                            Unlock your content with the help of Viseven. We provide custom solutions and services actively used by the top 50 Pharma and Life Sciences companies in over 50 countries worldwide
                        </div>
                    </div>
                </div>
            </div>


            <div className='py-20'>
                <div className=' container'>
                    <div className='grid grid-cols-2 gap-10'>
                        {
                            DATA.map((item) => (
                                <div>
                                    <Image src={item.image} width={1000} height={1000} className='' />
                                    <h1 className='text-3xl font-bold mt-12'>{item.name}</h1>
                                    <div className='mt-4 bg-[#B9B7B7] w-fit rounded-lg py-2 text-sm px-4'>{item.date}</div>
                                    <div className='mt-8 '>{item.description}</div>
                                    <div>
                                        <button className='btn btn-primary mt-8 !px-4 !text-sm'>Learn More</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-24'>
                    <h1 className='text-5xl text-center font-bold '>Connect with Us for Personalized<br /> Support</h1>

                    <div className='mt-20'>
                        <ContactUsFrom />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blogs