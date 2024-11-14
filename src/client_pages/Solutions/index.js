"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ServicesCard from './ServicesCard'
import { AnimatePresence, motion } from 'framer-motion'
import AboutUs from './AboutUs'
import RecentBlogs from './RecentBlogs'
import ContactUsFrom from '@/components/ContactForm/Form'
import Slider from './Slider'
import { CONTENT_FORMATS, OUR_SERVICES } from '@/constants'
import OurPortfolio from './OurPortfolio'
import Journey from './Journey'
import WhatClientSay from './WhatClientSay'

const ARR = [
  {
    title: "AI Solutions",
    src: "/icons/ai_solutions.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Content Production Hub",
    src: "/icons/content_hub.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Omnichannel Marketing",
    src: "/icons/omnichal_marketing.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Digital Composition",
    src: "/icons/digital_competition.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Modular Approach",
    src: "/icons/modular_approach.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "eDetailing",
    src: "/icons/e-detailing.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Email Marketing",
    src: "/icons/email_marketing.svg",
    description: "Help us build a school in a remote village in Africa"
  },
]


const MAIN_SECTION_ARRY = [
  {
    id: 1,
    title: "Modular Approach",
    description: <>
      Our adaptive content strategy is revolutionizing digital marketing for Pharma <br />and Life Sciences by enabling rapid, compliant content production at scale
    </>
  },
  {
    id: 2,
    title: "Omnichannel Marketing",
    description: <>
      Our adaptive content strategy is revolutionizing digital marketing for Pharma <br />and Life Sciences by enabling rapid, compliant content production at scale
    </>
  },
  {
    id: 3,
    title: "AR Services",
    description: <>
      Our adaptive content strategy is revolutionizing digital marketing for Pharma <br />and Life Sciences by enabling rapid, compliant content production at scale
    </>
  },

]


const DCF_IMPLEMENTATION = [
  {
    title: "Dedicated to Pharma",
    description: "Viseven has >13 years of experience providing interactive content development service for Pharma & Life science. We have medical experts on board and are able to deliver Medical writing and Medical Marketing services.",
    icon: "/icons/medals.svg"
  },
  {
    title: "Advanced Customer Care",
    description: "Viseven DCF provides a dedicated Customer Success Team to answer any inquiries and a Customer Support Team available 24/7.",
    icon: "/icons/users.svg"
  },
  {
    title: "All in one place",
    description: "Viseven DCF provides a dedicated Customer Success Team to answer any inquiries and a Customer Support Team available 24/7.",
    icon: "/icons/small-board.svg"
  },
  {
    title: "Agility & Scalability",
    description: "Flexibility in operational processes, resources planning and content production process allow rapid services scaling and fast reaction on changes without losing productivity.",
    icon: "/icons/navigation.svg"
  },
  {
    title: "Advanced performance analytics",
    description: "Viseven DCF provides customized dashboards and advanced reporting introduced in Power BI.",
    icon: "/icons/pro.svg"
  },

]

const HomePage = () => {

  return (
    <>
      <div className='bg-primary'>
        <div className='text-white min-h-[450px] container  relative  lg:flex '>
          <div className='lg:w-1/2 pt-8 lg:pb-14'>
            <h1 className='hidden lg:block text-5xl font-bold'>DIGITAL CONTENT<br /> FACTORY</h1>
            <h1 className='lg:hidden text-center text-5xl font-bold'>DIGITAL CONTENT FACTORY</h1>
            <div className='text-base mt-8'>
              Introducing Our Digital Content Factory, a cutting-edge solution designed to streamline and scale your content
              production for the Pharma and Life Sciences sector. Our platform enables you to efficiently generate high-quality
              digital assets—whether it's promotional content, educational materials, or multimedia assets—across various channels.
              With our advanced tools and intuitive interface, pharmaceutical companies can produce, manage, and distribute content
              quickly while maintaining compliance and consistency. This innovative approach not only accelerates your content creation
              process but also ensures that your marketing efforts are data-driven and impactful, helping you connect with your audience
              more effectively and drive business success.
            </div>
            <div className='mt-10'>
              <button className='bg-white text-black py-3 px-4 text-sm rounded-lg'>
                Start the conversation
              </button>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <Image
              src={"/images/map-white.svg"}
              className=''
              width={1000}
              height={1000}
            />
          </div>


        </div>


      </div>

      <div className='container'>
      <div className='flex gap-x-5 pt-5 rounded-b-2xl bg-[#262626] relative'>
          <div className='bg-[#262626] py-3 px-8 min-w-[265px] text-white rounded-full text-sm absolute -top-5  left-1/2 -translate-x-1/2'>
            Trusted By 250+ Companies
          </div>
          <div className='flex flex-wrap w-full justify-evenly'>
          <Image src={"/images/zapier.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/spotify.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/slack.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/amazon.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/adobe.svg"} width={4000} height={4000} className='w-56' />
          </div>
        </div>

        <div className='mt-10 md:my-20 space-y-5'>
          <div className='text-center  text-4xl mt-10 font-semibold'>
            Why Pharma needs Digital Content <br />
            Factory?
          </div>
          <div className='text-center text-sm'>

            DCF brings value at all stages of Global Pharma marketing operations
          </div>


          <div className='mx-auto flex justify-center lg:sm-container'>
            <div className='py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
              <ServicesCard item={ARR[0]} />
              <ServicesCard item={ARR[1]} />
              <ServicesCard custom_class={"bg-[#F7F7F7] h-[300px]"} item={ARR[2]} />

            </div>
          </div>

        </div>
      </div>
      <div className=' min-h-[600px] flex flex-col  justify-center items-center bg-cover bg-no-repeat text-accent bg-primary py-10 md:py-0'
        style={{
          backgroundImage: `url(/images/landing_background2.svg)`
        }}
      >
        <h1 className='font-bold text-4xl text-center container'>DCF provides flexible content development<br />services across channels</h1>
        <p className='text-center w-[60%] mt-8 container'>
          Empowering your digital presence with cutting-edge strategies tailored for the <br />
          pharmaceutical sector.
          At Symbiote, we provide custom solutions and services actively <br /> used by industry leaders across the globe.
        </p>
        <Slider />
      </div>
      <div>
        <div className='py-10 md:py-20 container'>
          <h1 className='text-center pb-10 md:pb-20 font-semibold text-4xl'>
            Digital Content Factory works with<br />numerous content formats
          </h1>
          <div className=' relative p-[3%]'>
            <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 md:gap-10'>
              {
                CONTENT_FORMATS.map((item, index) => (
                  <div className='bg-primary h-40 text-accent flex flex-col justify-start hover:cursor-pointer transition-all duration-150 delay-75 shadow-xl hover:-translate-y-4 items-center text-lg text-center rounded-xl'>
                    <div className='w-full h-full flex justify-center flex-col items-center'>
                      <Image src={item.icon} width={1000} height={1000} className='w-14' />
                      <div className='pt-3'>{item.name}</div>
                    </div>
                  </div>
                ))
              }
            </div>
            <Image
              src={"/images/about_us_bg.svg"}
              width={2000}
              height={2000}
              className=' absolute top-0 left-0 w-32 z-[-1]'
            />
            <Image
              src={"/images/about_us_bg.svg"}
              width={2000}
              height={2000}
              className=' absolute bottom-0 right-0 w-32 z-[-1]'
            />

          </div>
          <div className='flex justify-center mt-4'>
            <button className=' uppercase btn btn-primary '>
              Get A consulation
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-4xl font-semibold text-center'>Benefits of DCF implementation<br />for business</h1>
        <div className=' container gap-10 my-16  sm:grid-cols-2 grid md:grid-cols-3'>
          {
            DCF_IMPLEMENTATION.map((item) => (
              <div className=''>
                <div className='flex space-x-3 items-center font-bold mb-4'>
                  <div className='w-10 flex flex-col justify-center items-center rounded-md h-10 bg-primary'>
                    <Image
                      src={item.icon}
                      width={1000}
                      height={1000}
                      className='w-7'
                    />
                  </div>
                  <div className=''>
                    {item.title}
                  </div>
                </div>
                <div className='text-sm'>
                  {item.description}
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <OurPortfolio />
      <Journey/>
      <WhatClientSay/>
      <RecentBlogs />
    </>
  )
}

export default HomePage