'use client'
import Image from 'next/image'
import React from 'react'
import WhoWeAre from './WhoWeAre'
import Expertise from './Expertise'
import WinCompetition from './WinCompetition'
import OnlineLearning from './OnlineLearning'
import SuccessfullCases from './SuccessfullCases'
import AppProcess from './AppProcess'
import VisevenExpertise from './VisevenExpertise'
import { motion } from 'framer-motion'
import { UP_ANIMATION } from '@/utils'


const data = [
    {
        title: 'Digital Production Hub',
        description: 'Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development, designed to enhance patient engagement and streamline your digital transformation.',
        image: '/images/digital_production.svg'
    },
    {
        title: 'Interactive Email Marketing for Pharma',
        description: 'Interactive Emails — e-mail marketing solution featuring AMP emails components and creative design tools developed for building advanced communication with healthcare professionals, physicians, and patients, achieving  high personalization and audience engagement.',
        image: '/images/email_marketing.svg'
    },
    {
        title: 'Apps and Portals Development from',
        description: 'Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development.',
        image: '/images/mobile_apps_main.svg'
    },
    {
        title: 'Apps and Portals Development from',
        description: 'Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development.',
        image: '/images/mobile_apps_main.svg'
    },
    {
        title: 'Apps and Portals Development from',
        description: 'Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development.',
        image: '/images/mobile_apps_main.svg'
    },
    {
        title: 'eDetailing Pharma Solutions',
        description: 'Engage with healthcare professionals using the best interactive digital tools and turn them into loyal customers at reduced cost. Perfect for pharmaceutical companies, medical representatives, and marketing teams.',
        image: '/images/edetailing.svg'
    },
    {
        title: 'Omnichannel Marketing in Pharma ',
        description: 'Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development.',
        image: '/images/omnichannel.svg'
    },
    {
        title: 'Apps and Portals Development from',
        description: 'Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development.',
        image: '/images/mobile_apps_main.svg'
    },
    
    

];

const AppsAndPortalsDevelopment = ({index}) => {
    const { title, description, image } = data[index] || data[0];
    // mobile_apps_main.svg
    return (
        <>
            <div  className='bg-primary'>
                <motion.div {...UP_ANIMATION} className='text-white min-h-[450px] container  relative  flex justify-between '>
                    <div className='flex flex-col justify-center lg:w-1/2 pt-8 pb-14'>
                        <h1 className='text-5xl font-bold'>{title}</h1>
                        <div className='text-base mt-8'>
                            {description}
                        </div>
                        <div className='lg:hidden'>
                        <Image
                            src={image}
                            width={1000}
                            height={1000}
                            className="w-[550px]"
                            priority
                        />
                    </div>
                        <div className='mt-10 flex justify-center items-center lg:block'>
                            <button className='bg-white text-black py-3 px-4 text-sm rounded-lg'>
                                Start the conversation
                            </button>
                        </div>
                    </div>
                    <div className='hidden lg:flex w-1/2 justify-end items-center'>
                        <Image
                            src={image}
                            width={1000}
                            height={1000}
                            className="w-3/4 flex-shrink-0 xl:w-[550px]"
                            priority

                        />
                    </div>
                </motion.div>
            </div>
            <motion.div  {...UP_ANIMATION} className='py-20'>
                <AppProcess />
            </motion.div>
            <motion.div {...UP_ANIMATION}  className=''>
                <VisevenExpertise/>
            </motion.div>
            <motion.div {...UP_ANIMATION}  className='py-10 md:py-20'>
                <WhoWeAre />
            </motion.div>
            <motion.div {...UP_ANIMATION}  className='py-10 md:py-20'>
                <WinCompetition/>
            </motion.div>
            <motion.div {...UP_ANIMATION}  className=' h-[400px] flex flex-col justify-center  text-xl md:text-3xl font-bold text-[#262626] text-center bg-cover'
                style={{
                    backgroundImage: `url(/images/services/apps_portal_development/pharma-marketing.svg)`
                }}
            >
                <p className='container text-white'>
                Create a perfect web project for your<br/> pharma marketing campaign
                </p>

            </motion.div>
            {/* <div>
                <Expertise/>
            </div> */}
            <motion.div {...UP_ANIMATION} className='pt-10 lg:pt-20 pb-24 md:pb-32'>
                <OnlineLearning/>
            </motion.div>
            <motion.div {...UP_ANIMATION}  className='lg:pt-10 pb-32'>
                <SuccessfullCases/>
            </motion.div>

        </>
    )
}

export default AppsAndPortalsDevelopment