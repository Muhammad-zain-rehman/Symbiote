'use client'
import ContactUsFrom from '@/components/ContactForm/Form'
import Image from 'next/image'
import React from 'react'
import InfiniteLooper from './InfiniteLooper'
import { motion } from 'framer-motion'
import { UP_ANIMATION } from '@/utils'



const TESTINOMIALS = [
    {
        name: <>Customer experience<br />(CX) strategy</>,
        custom_class: " h-40 rounded-md"
    },
    {
        name: "Content auto-tagging",
        custom_class: "h-40 lg:h-32"
    },
    {
        name: "Content data management & analytics",
        custom_class: "h-40"
    },
    {
        name: "Medical marketing strategy",
        custom_class: "h-40 lg:h-32"
    },
    {
        name: "Corporate learning programs",
        custom_class: "h-40 lg:h-32"
    },
    {
        name: "Change management / Project management",
        custom_class: "h-40 lg:-mt-8"
    },
    {
        name: "Custom software development",
        custom_class: "h-40 lg:h-32"
    },
    {
        name: "Enterprise solutions production",
        custom_class: "h-40 lg:-mt-8"
    }
]

const AboutUs = () => {
    return (
        <>
            <div className=' container py-20 '>
                <motion.div {...UP_ANIMATION} className='flex h-[350px]'>
                    <div className='lg:w-1/2'>
                        <h1 className='font-bold text-4xl text-[#242424]'>About Our Company</h1>
                        <div className='mt-4 text-lg'>
                            Simbiote has been driving digital transformation in Pharma and Life Sciences since 2020. As a comprehensive Digital Marketing Solutions provider, we specialize in delivering complex, high-impact projects tailored to your business needs
                        </div>
                        <div className='lg:hidden mt-5'>
                            <Image
                                src={"/images/our_company.svg"}
                                width={2000}
                                height={2000}
                                className='w-[500px]'
                                priority

                            />
                        </div>
                        <div className='mt-5'>
                            <button className='btn btn-primary'>Initiate a Dialogue</button>
                        </div>
                    </div>
                    <div className='hidden lg:block w-1/2 relative '>
                        <Image
                            src={"/images/our_company.svg"}
                            width={2000}
                            height={2000}
                            
                            priority
                        />
                    </div>
                </motion.div>
                <motion.div {...UP_ANIMATION} className='flex mt-20 justify-between '>
                    <div className='lg:w-1/2'>
                        <h1 className='font-bold text-4xl text-[#242424]'>Who we are</h1>
                        <div className='mt-4 text-lg'>
                            Simbiote is a leading global provider of services for the Life Sciences sector, specializing in Digital Marketing Solutions. We deliver end-to-end, customized solutions designed to achieve omnichannel excellence, regardless of your digital maturity level. Our team of over 1000+ dedicated professionals is focused on executing top-tier omnichannel projects and communication strategies for the global pharmaceutical market.
                        </div>
                        <div className='lg:hidden'>
                            <Image
                                src={"/images/who_we_are.svg"}
                                width={2000}
                                height={2000}
                                className=''
                                priority
                            />
                        </div>
                        <div className='my-8 grid grid-cols-3 space-x-5'>
                            <div className='  border-primary/50 border-r-2 border-dashed'>
                                <div className='font-medium text-3xl md:text-5xl'>
                                    1000+
                                </div>
                                <div className='text-primary font-medium'>
                                    certified<br />specialists
                                </div>
                            </div>
                            <div className=' border-primary/50 border-r-2 border-dashed'>
                                <div className='font-medium text-3xl md:text-5xl'>
                                    3+
                                </div>
                                <div className='text-primary font-medium'>
                                    years of expertise
                                </div>
                            </div>
                            <div className=' '>
                                <div className='font-medium text-3xl md:text-5xl'>
                                    90+
                                </div>
                                <div className='text-primary font-medium'>
                                    clients in pharma &<br />Sciences
                                </div>
                            </div>

                        </div>
                        <div className='mt-5'>
                            <button className='btn btn-primary'>Learn More</button>
                        </div>
                    </div>
                    <div className='hidden lg:flex w-1/2 justify-end'>
                        <Image
                            src={"/images/who_we_are.svg"}
                            width={2000}
                            height={2000}
                            className='w-[500px]'
                            priority

                        />
                    </div>
                </motion.div>
                <motion.div {...UP_ANIMATION} className='mt-20 flex flex-col lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <Image
                            src={"/images/transforming_image.svg"}
                            width={1000}
                            height={1000}
                            className=''
                            priority

                        />
                    </div>
                    <div className='bg-primary -mt-4 lg:mt-0 min-h-[400px] py-10 lg:py-0 rounded-b-xl lg:rounded-br-[50px] lg:w-1/2 lg:rounded-l-[10px] px-10 space-y-5 flex flex-col justify-center text-white'>
                        <span className='text-white/90'>Welcome to your bank</span>
                        <h1 className='text-4xl font-medium'>Transforming Your Brand into an Impactful Narrative</h1>
                        <div className='text-[#B3B3B3]'>
                            Simbiote assists pharmaceutical companies in developing comprehensive omnichannel communication strategies. We offer highly customizable solutions, content, and channel integration to enhance your brand's presence and effectiveness.
                        </div>
                    </div>

                </motion.div>
            </div>
            <motion.div {...UP_ANIMATION} className='lg:mt-20 py-20 flex flex-col bg-cover bg-no-repeat bg-center justify-center items-center bg-primary text-center'
                style={{
                    backgroundImage: `url(images/landing_background.svg)`
                }}
            >
                <h1 className='text-4xl text-white font-semibold'>Client Testinomials</h1>
                <div className=' text-[#E6E6E6] w-[80%] md:w-[70%] mx-auto mt-8'>
                    At Simbiote, we are dedicated to delivering outstanding digital products and services that drive client success. Discover what some of our satisfied clients have to say about their experience working with us
                </div>


                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[80%] md:w-[60%] mt-10 '>
                    {
                        TESTINOMIALS.map((item) => (
                            <div className={`text-sm bg-white px-4 flex flex-col justify-center items-center rounded-xl ${item.custom_class ? item.custom_class : "h-40"} `}>
                                <div className='bg-[#E3E3E3] w-10 h-10 rounded-full'></div>
                                <div className='mt-4'>{item.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-16 space-y-5'>
                    <p className='text-center text-white'>Trusted By 250+ Companies</p>
                    <div className='container lg:w-[100%] flex justify-center items-center'>
                        <div className='flex flex-wrap justify-evenly gap-x-5 border-[1px] border-t-0 border-l-yellow-200/50 border-r-yellow-200/50 border-b-yellow-200/50'>
                            {/* <InfiniteLooper speed="10" direction="left"> */}

                            <Image src={"/images/zapier.svg"} width={4000} height={4000} className='w-56' priority />
                            <Image src={"/images/spotify.svg"} width={4000} height={4000} className='w-56' priority />
                            <Image src={"/images/slack.svg"} width={4000} height={4000} className='w-56' priority />
                            <Image src={"/images/amazon.svg"} width={4000} height={4000} className='w-56' priority />
                            <Image src={"/images/adobe.svg"} width={4000} height={4000} className='w-56' priority />
                            {/* </InfiniteLooper> */}
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div {...UP_ANIMATION} className=' h-[400px] flex flex-col justify-center  text-xl md:text-3xl font-bold text-[#262626] text-center '
                style={{
                    backgroundImage: `url(images/mesh2.png)`
                }}
            >
                <p className='container'>
                    Establish a cohesive workspace for your global and local<br />
                    marketing teams, as well as external agencies, streamlining<br />
                    product promotions into an efficient and well-coordinated process
                </p>

            </motion.div>
            <motion.div {...UP_ANIMATION}    className='my-12 lg:my-24'>
                <h1 className='text-3xl md:text-5xl text-center font-bold '>Get Customized Marketing Solutions<br /> for Your Business</h1>

                <div className='mt-10 lg:mt-20'>
                    <ContactUsFrom />
                </div>
            </motion.div>

        </>
    )
}

export default AboutUs