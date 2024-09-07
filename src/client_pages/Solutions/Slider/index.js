import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
        <div className=' relative mt-10'>
            <div className=' pb-10 flex space-x-4 justify-center'>
                <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[0])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[0].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[32px] h-[2px]  rounded-3xl`}></div>
                <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[1])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[1].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[32px] h-[2px]  rounded-3xl `}></div>
                <div onClick={() => setActiveSlide(MAIN_SECTION_ARRY[2])} className={`cursor-pointer ${activeSlide.id === MAIN_SECTION_ARRY[2].id ? "bg-white" : "bg-[#494949]"} transition-all duration-100 delay-75 w-[32px] h-[2px]  rounded-3xl `}></div>
            </div>
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
            {/* side icons */}

            {/* side icons */}

        </div>
    )
}

export default Slider