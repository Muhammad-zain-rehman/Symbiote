"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ServicesCard from './ServicesCard'
import { AnimatePresence, motion, useMotionValue, animate } from 'framer-motion'
import AboutUs from './AboutUs'
import RecentBlogs from './RecentBlogs'
import ContactUsFrom from '@/components/ContactForm/Form'
import { UP_ANIMATION } from '@/utils'
import Link from 'next/link'

const ARR = [
  {
    title: "AI Solutions",
    src: "/icons/ai_solutions.svg",
    description: "AI Solutions for Doctors, Patients, and Pharma Companies Our AI-driven solutions revolutionize the pharmaceutical landscape"
  },
  {
    title: "Content Production Hub",
    src: "/icons/content_hub.svg",
    description: "our Content Production Hub stands as a beacon of efficiency and innovation."
  },
  {
    title: "Omnichannel Marketing",
    src: "/icons/omnichal_marketing.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Digital Composition",
    src: "/icons/digital_competition.svg",
    description: "As a provider of marketing technology services, we offer a comprehensive suite of digital production solutions designed to elevate your Pharma and Life Sciences business."
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


const HomePage = () => {

  const [activeSlide, setActiveSlide] = useState(MAIN_SECTION_ARRY[0])



  return (
    <>
      <div className='bg-primary'>
        <div className='text-white h-[450px] container  relative bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center'
          style={{
            backgroundImage: `url(/images/home_main_bg.png)`
          }}
        >
          <AnimatePresence mode='wait'>
            <motion.h1
              key={`${activeSlide.title}_h1`}
              {...UP_ANIMATION}
              // initial={{
              //   // y: "-100%",
              //   opacity: 0
              // }}
              // animate={{
              //   // y: "0%",
              //   opacity: 1,
              //   transition: {
              //     type: "tween",
              //     duration: 0.5,
              //     // delay: 0.3
              //   }
              // }}
              // exit={{
              //   opacity: 0,
              //   // y: "-100%",
              //   transition: {
              //     type: "tween",
              //     duration: 0.5

              //   }
              // }}
              className='text-4xl text-white font-semibold text-center'>
              {activeSlide.title}

            </motion.h1>
            <motion.div
              key={`${activeSlide.title}_description`}
              initial={{
                // y: "100%",
                opacity: 0
              }}
              animate={{
                // y: "0%",
                opacity: 1,
                transition: {
                  type: "tween",
                  duration: 0.5,
                  // delay: 0.3
                }
              }}
              exit={{
                opacity: 0,
                // y: "100%",
                transition: {
                  type: "tween",
                  duration: 0.5,
                  // delay:0.3

                }
              }}
              className='text-white font-light text-center px-4 md:px-0 text-lg md:text-xl mt-8'>
              {activeSlide.description}
            </motion.div>

          </AnimatePresence>


              
            <div {...UP_ANIMATION} className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-5 mt-10'>
            <Link href={"/services"}  className=' btn btn-primary uppercase border-[1px] border-white/30'>
              Our Services
            </Link>
            <Link href={"/about-us"} className='bg-white py- btn uppercase text-black  text-sm '>
                {/* <button className=''> */}
                  Find out More
                {/* </button> */}
            </Link>
          </div>



          {/* side icons */}
          <motion.div  {...UP_ANIMATION} className='absolute top-1/2 -translate-y-1/2 right-3 flex flex-col space-y-3'>
            <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[0])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[0].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[2px] h-8  rounded-3xl`}></div>
            <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[1])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[1].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[2px] h-8  rounded-3xl `}></div>
            <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[2])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[2].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[2px] h-8  rounded-3xl `}></div>
          </motion.div>
          {/* side icons */}

        </div>


      </div>

      <div className='container'>
        <div className='flex gap-x-5 pt-5 rounded-b-2xl bg-[#262626] relative h-[130px]'>
          <div className='bg-[#262626] py-3 px-8 min-w-[265px] text-white rounded-full text-sm absolute -top-5 left-1/2 -translate-x-1/2'>
            Trusted By 250+ Companies
          </div>

          <div class="overflow-hidden">

            <div class="flex -mx-4 img-ticker">

              <Image
                src={"/images/zapier.svg"}
                width={4000}
                height={4000}
                alt='zapier'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/spotify.svg"}
                width={4000}
                height={4000}
                alt='spotify'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/slack.svg"}
                width={4000}
                height={4000}
                alt='slack'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/amazon.svg"}
                width={4000}
                height={4000}
                alt='amazon'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/adobe.svg"}
                width={4000}
                height={4000}
                alt='adobe'
                className='w-64  mx-4 self-start flex-none'
              />


              <Image
                src={"/images/zapier.svg"}
                width={4000}
                height={4000}
                alt='zapier'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/spotify.svg"}
                width={4000}
                height={4000}
                alt='spotify'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/slack.svg"}
                width={4000}
                height={4000}
                alt='slack'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/amazon.svg"}
                width={4000}
                height={4000}
                alt='amazon'
                className='w-64  mx-4 self-start flex-none'
              />
              <Image
                src={"/images/adobe.svg"}
                width={4000}
                height={4000}
                alt='adobe'
                className='w-64  mx-4 self-start flex-none'
              />

            </div>
          </div>
        </div>


        <motion.div {...UP_ANIMATION} className='mt-10 space-y-5'>
          <div className='text-center  text-4xl mt-10 font-semibold'>
            Digital transformation for Life<br />
            Sciences and Pharma
          </div>
          <div className='text-center text-sm'>

            Unlock your content with the help of Symbiotic. We provide custom solutions and services actively used by the top 50 Pharma <br />
            and Life Sciences companies in over 50 countries worldwide.
          </div>


          <div className='mx-auto flex justify-center lg:sm-container'>
            <div className='py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
              <ServicesCard custom_class={"bg-primary text-accent h-[300px]"} item={ARR[0]} />
              <ServicesCard item={ARR[1]} custom_class={"h-[250px] xl:h-[180px] bg-primary text-accent"} />
              <ServicesCard custom_class={"bg-[#F7F7F7] h-[250px] xl:h-[265px]"} item={ARR[2]} />
              <ServicesCard  custom_class={"bg-primary text-accent h-[250px] xl:h-[265px] xl:-mt-[15px]"} item={ARR[3]} />
              <div className='flex flex-col space-y-10 lg:space-y-6 mt-24 xl:mt-0'>
                <ServicesCard item={ARR[4]} custom_class={"h-[250px] xl:h-[180px] bg-primary text-accent -mt-[94px] xl:-mt-[134px]"} />
                <ServicesCard item={ARR[5]} custom_class={"h-[250px]  xl:h-[180px] bg-primary text-accent"} />

              </div>
              <ServicesCard custom_class={"bg-primary text-accent h-[250px] xl:h-[300px] xl:-mt-[50px]"} item={ARR[6]} />
            </div>
          </div>

        </motion.div>
      </div>
      <motion.div {...UP_ANIMATION} className=' h-[400px] lg:h-[350px] flex flex-col  justify-center items-center bg-cover bg-no-repeat text-accent bg-primary'
        style={{
          backgroundImage: `url(/images/landing_background2.svg)`
        }}
      >
        <h1 className='font-bold text-3xl lg:text-4xl text-center container '>Innovative Health Engagement<br />Solutions</h1>
        <p className='text-center w-[80%] lg:w-[60%] mt-8'>
          Empowering your digital presence with cutting-edge strategies tailored for the <br />
          pharmaceutical sector.
          At Symbiotic, we provide custom solutions and services actively <br /> used by industry leaders across the globe.
        </p>
      </motion.div>
      <AboutUs />
      <motion.div {...UP_ANIMATION}><RecentBlogs /></motion.div>
      <motion.div {...UP_ANIMATION} className='my-10 lg:my-20'>
        <h1 className='text-center text-4xl font-bold mb-10'>Connect with Us for Personalized<br /> Support</h1>
        <ContactUsFrom />
      </motion.div>

    </>
  )
}

export default HomePage