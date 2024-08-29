"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ServicesCard from './ServicesCard'
import { AnimatePresence, motion } from 'framer-motion'

const ARR = [
  {
    title: "AI Solutions",
    src: "/icons/ai_solutions.svg",
    description: "AI Solutions for Doctors, Patients, and Pharma Companies Our AI-driven solutions revolutionize the pharmaceutical landscape"
  },
  {
    title: "Content Production Hub",
    src: "/icons/content_hub.svg",
    description: "our Content Production Hub stands as a beacon of efficiency and innovation"
  },
  {
    title: "Omnichannel Marketing",
    src: "/icons/omnichal_marketing.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Digital Composition",
    src: "/icons/content_hub.svg",
    description: "As a provider of marketing technology services, we offer a comprehensive suite of digital production solutions designed to elevate your Pharma and Life Sciences business."
  },
  {
    title: "eDetailing",
    src: "/icons/content_hub.svg",
    description: "Help us build a school in a remote village in Africa"
  },
  {
    title: "Email Marketing",
    src: "/icons/content_hub.svg",
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
  const [loop, setLoop] = useState(false)
  const timerRef = useRef(null);


  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (activeSlide.id === MAIN_SECTION_ARRY[MAIN_SECTION_ARRY.length - 1]?.id) {
        setActiveSlide(MAIN_SECTION_ARRY[0])
        setLoop(true)
      } else {
        const findIndex = MAIN_SECTION_ARRY.findIndex((item) => item.id === activeSlide.id)
        if (findIndex != -1) {
          if (findIndex === MAIN_SECTION_ARRY.length - 1) {
            setActiveSlide(MAIN_SECTION_ARRY[0])
          } else {
            setActiveSlide(MAIN_SECTION_ARRY[findIndex + 1])
          }
        }
      }

      // Cleanup on unmount or when yearStep changes
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };

    }, 5000)
  }, [activeSlide])

  //   useEffect(() => {
  //     if (loop) {
  //         setTimeout(() => {
  //             setLoop(false)
  //         }, 500)
  //     }
  // }, [loop])


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
              initial={{
                // y: "-100%",
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
                // y: "-100%",
                transition: {
                  type: "tween",
                  duration: 0.5

                }
              }}
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
              className='text-white font-light text-center text-xl mt-8'>
              {activeSlide.description}
            </motion.div>

          </AnimatePresence>


          <div className='flex space-x-5 mt-10'>
            <button className=' btn btn-primary border-[1px] border-white/30'>
              Our Works
            </button>
            <button className='bg-white uppercase text-black py-3 px-8 text-sm rounded-lg'>
              Find out More
            </button>
          </div>



          {/* side icons */}
          <div className='absolute top-1/2 -translate-y-1/2 right-3 flex flex-col space-y-3'>
            <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[0])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[0].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[2px] h-8  rounded-3xl`}></div>
            <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[1])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[1].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[2px] h-8  rounded-3xl `}></div>
            <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[2])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[2].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[2px] h-8  rounded-3xl `}></div>
          </div>
          {/* side icons */}

        </div>


      </div>

      <div className='container'>
        <div className='flex space-x-5 pt-5 rounded-b-2xl bg-[#262626] relative'>
          <div className='bg-[#262626] py-3 px-8 text-white rounded-full text-sm absolute -top-5  left-1/2 -translate-x-1/2'>
            Trusted By 250+ Companies
          </div>
          <Image src={"/images/zapier.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/spotify.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/slack.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/amazon.svg"} width={4000} height={4000} className='w-56' />
          <Image src={"/images/adobe.svg"} width={4000} height={4000} className='w-56' />
        </div>

        <div className='mt-10 space-y-5'>
          <div className='text-center  text-4xl mt-10 font-semibold'>
            Digital transformation for Life<br />
            Sciences and Pharma
          </div>
          <div className='text-center text-sm'>

            Unlock your content with the help of Viseven. We provide custom solutions and services actively used by the top 50 Pharma <br />
            and Life Sciences companies in over 50 countries worldwide.
          </div>


          <div className='mx-auto flex justify-center sm-container'>
            <div className='py-10 grid grid-cols-3 gap-10'>
              <ServicesCard item={ARR[0]} />
              <ServicesCard item={ARR[1]} />
              <ServicesCard custom_class={"bg-[#F7F7F7]"} item={ARR[2]} />
              <ServicesCard item={ARR[0]} />
              <ServicesCard item={ARR[1]} />
              <ServicesCard custom_class={"bg-[#F7F7F7]"} item={ARR[2]} />
            </div>
          </div>

        </div>


      </div>

    </>
  )
}

export default HomePage