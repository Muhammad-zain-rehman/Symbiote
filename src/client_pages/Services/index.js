import ContactUsFrom from '@/components/ContactForm/Form'
import { OUR_SERVICES } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <>
            <div className='bg-secondary'>
                <div className='min-h-[400px]  bg-cover bg-no-repeat container flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: `url(images/landing_background.svg)`
                    }}
                >
                    <div className='w-full container space-y-10  bg-cover bg-no-repeat text-sm py-3 relative '>
                        <h1 className='text-[30px] md:text-[50px] text-center font-bold text-white'>Our Services</h1>
                        <div className='text-center  w-[80%] mx-auto  text-[#E6E6E6] text-md lg:text-lg'>
                            Explore our comprehensive range of services designed to meet the unique needs of the pharmaceutical and life sciences industries. From tailored digital marketing solutions to advanced omnichannel strategies,
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-20 container'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {
                        OUR_SERVICES.map((item, index) => (
                            <Link href={item.url}>
                                <div className='bg-primary h-52 text-accent flex flex-col justify-start hover:cursor-pointer transition-all duration-150 delay-75 shadow-xl hover:-translate-y-4 items-center text-lg text-center rounded-xl'>
                                    <div className='w-full h-full flex justify-center flex-col items-center'>
                                        <Image src={item.icon} width={1000} height={1000} className='w-14' />
                                        <div className='pt-3'>{item.name}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>

            <div className=' bg-secondary min-h-[500px]  flex flex-col justify-center items-center'>
                <div className='w-full container space-y-10  bg-cover bg-no-repeat text-sm py-10 md:py-3 relative '>
                    <Image width={1000} height={1000} className='w-14 mx-auto' src={"/images/logo_without_name.svg"} />
                    <h1 className='text-[30px] text-center font-bold text-white leading-10'>Bring Your Digital Vision to Life with Us</h1>
                    <div className='text-center  w-[80%] mx-auto  text-[#E6E6E6] text-md md:text-lg'>
                        Regardless of the services you select, we are dedicated to delivering outstanding results that surpass your expectations. Our multidisciplinary team collaborates seamlessly to ensure a cohesive approach and a unified vision for your digital projects.
                    </div>

                    <div className='flex justify-center'>
                        <button className='btn bg-white'>Additional Insights</button>
                    </div>
                </div>
            </div>
            <div className='py-12 md:py-24 space-y-8 md:space-y-14'>
                <h1 className='text-3xl md:text-5xl text-center font-bold '>Contact Us to Discover More About<br />Our Services</h1>
                <ContactUsFrom />
            </div>


        </>
    )
}

export default Services