import Image from 'next/image'
import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import ContactUsFrom from '@/components/ContactForm/Form';



const ContactUsContainer = () => {
    return (
        <>
            <div className='bg-secondary h-[400px]'>
                <div className=' container  rounded-b-3xl h-full bg-cover bg-center bg-no-repeat   flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: `url(/images/Group_21387.png)`
                    }}
                >
                    <div className='w-full container space-y-10  bg-cover bg-no-repeat text-sm py-3 relative '>
                        <h1 className='text-[50px] text-center font-bold text-white'>Contact Us</h1>
                        <div className='text-center  w-[80%] mx-auto  text-[#E6E6E6] text-lg'>
                            Unlock your content with the help of Viseven. We provide custom solutions and services actively used by the top 50 Pharma and Life Sciences companies in over 50 countries worldwide                </div>
                    </div>
                </div>
            </div>
            <div className='py-20'>
                <div className='flex justify-center space-x-16'>
                    <div className='h-32 w-32 hover:-translate-y-2  transition-all duration-100 delay-75 rounded-2xl bg-primary flex flex-col justify-center items-center cursor-pointer'><FaFacebook className='text-6xl text-white ' /></div>
                    <div className='h-32 w-32 hover:-translate-y-2  transition-all duration-100 delay-75 rounded-2xl bg-primary flex flex-col justify-center items-center cursor-pointer'><SiLinkedin className='text-6xl text-white ' /></div>
                    <div className='h-32 w-32 hover:-translate-y-2  transition-all duration-100 delay-75 rounded-2xl bg-primary flex flex-col justify-center items-center cursor-pointer'><FaTwitter className='text-6xl text-white ' /></div>
                    <div className='h-32 w-32 hover:-translate-y-2  transition-all duration-100 delay-75 rounded-2xl bg-primary flex flex-col justify-center items-center cursor-pointer'><FaInstagram className='text-6xl text-white ' /></div>
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

export default ContactUsContainer