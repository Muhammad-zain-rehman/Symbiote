import React from 'react'



const TESTINOMIALS = [
    {
        name: <>Training courses</>,
        custom_class: " lg:h-20 rounded-md"
    },
    {
        name: <>Platform for<br/>remote interactions</>,
        custom_class: "h-[100px]"
    },
    {
        name: <>Interactive<br/>educational <br/>content</>,
        custom_class: "h-[100px] lg:h-36"
    },
    {
        name: "Interactive presentations",
        custom_class: "h-[100px] lg:h-20"
    },
    {
        name: "Video (including 3D animations and video 360°)",
        custom_class: "h-[100px] lg:h-36 lg:-mt-16"
    },
    {
        name: "Questionnaires and surveys",
        custom_class: "h-[100px] lg:h-32 lg:-mt-12"
    },
    {
        name: "VR & AR apps",
        custom_class: "h-[100px] lg:h-20"
    },
    {
        name: "Education process and performance analytics",
        custom_class: "h-[100px] lg:h-36 lg:-mt-16"
    }
]

const OnlineLearning = () => {
    return (
        <>
            <h1 className='text-4xl font-bold  text-primary text-center'>Online Learning</h1>
            <div className='  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[80%] md:w-[60%] mt-10 mx-auto '>
                {
                    TESTINOMIALS.map((item) => (
                        <div className={`text-sm bg-primary px-4 flex flex-col justify-center items-center rounded-xl ${item.custom_class ? item.custom_class : "h-20"} `}>
                            <div className='text-center text-white'>{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default OnlineLearning