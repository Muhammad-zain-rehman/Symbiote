import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { UP_ANIMATION } from '@/utils'
const MAIN_SECTION_ARRY = [
    {
        id: 1,
        title: "Consulting",
        description: <>
            We provide consulting on :<br/>
            <ul className='list-disc'>
                <li>strategic content planning</li>
                <li>development and standardization;</li>
                <li>design best practices; </li>
                <li>content modularization, etc. to enhance customer experience and engagement in a cost effective way. </li>
            </ul>
        </>
    },
    {
        id: 2,
        title: "Authoring & Update",
        description: <>
          Medical writing service and authoring of new content pieces. Editing of existing digital assets with minor changes - localization, update/ switch/remove some parts, but structure remain original (changes up to 50% of asset)
        </>
    },
    {
        id: 3,
        title: "Design",
        description: <>
          Development of digital asset layouts based on Customer's guidelines, brand books and specifications.
        </>
    },

]


const Slider = () => {
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

    useEffect(() => {
        if (loop) {
            setTimeout(() => {
                setLoop(false)
            }, 500)
        }
    }, [loop])


    return (
        <div className='container relative mt-10'>
            <div className=' pb-10 flex space-x-4 justify-center'>
                <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[0])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[0].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[32px] h-[2px]  rounded-3xl`}></div>
                <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[1])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[1].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[32px] h-[2px]  rounded-3xl `}></div>
                <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[2])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[2].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[32px] h-[2px]  rounded-3xl `}></div>
            </div>
            <AnimatePresence mode='wait'>
                <motion.h1
                    key={`${activeSlide.title}_h1`}
                    {...UP_ANIMATION}
                    // initial={{
                    //     // y: "-100%",
                    //     opacity: 0
                    // }}
                    // animate={{
                    //     // y: "0%",
                    //     opacity: 1,
                    //     transition: {
                    //         type: "tween",
                    //         duration: 0.5,
                    //         // delay: 0.3
                    //     }
                    // }}
                    // exit={{
                    //     opacity: 0,
                    //     // y: "-100%",
                    //     transition: {
                    //         type: "tween",
                    //         duration: 0.5

                    //     }
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
                    className='text-white font-light w-[80%] sm:w-[60%] md:w-[40%] mx-auto text-md  mt-8'>
                    {activeSlide.description}
                </motion.div>

            </AnimatePresence>
            {/* side icons */}

            {/* side icons */}

        </div>
    )
}

export default Slider