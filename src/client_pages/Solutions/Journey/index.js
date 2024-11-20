import React from 'react'

const STEPS = [
    {
        title: "EVOLVING",
        details: [
            'Ad hoc operations',
            'Decentralized storage',
            'Lack of content performance tracking & analysis'
        ]
    },
    {
        title: "01 FOUNDATIONAL",
        details: [
            'Centralized ops alignment & DAM',
            'Tech stack set up',
            'Operational workflow set up Templatization & Content standards Content reuse strategy & KPIs'
        ]
    },
    {
        title: "EVOLVING",
        details: [
            'Strategic metadata and tagging Modular content',
            'Content planning & personalization',
            'Deeper content analytics Multi/Omnichannel comm strategy'
        ]
    },
    {
        title: "EVOLVING",
        details: [
            'AI\ML automation',
            'Content auto-tagging',
            'Personalized content',
            'Cross-channel content usage and tracking'
        ]
    },


]


const Journey = () => {
    return (
        <>
            <div className='container text-center py-10'>
                <h1 className='hidden lg:block text-4xl font-semibold'>Pharma digital transformation journey<br />to future-ready smart content</h1>
                <h1 className='lg:hidden text-4xl font-semibold'>Pharma digital transformation journey to future-ready smart content</h1>

                <p className='py-8'>
                    symbiote offers a holistic approach from the content operational foundation
                    development to the seamless adoption of innovation
                </p>
            </div>


            <div className='relative grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center xl:items-start container xl:w-[100%]'>
                {
                    STEPS.map((item, index) => (
                        <div className={` ${index===0?"bg-secondary rounded-3xl xl:rounded-r-3xl xl:rounded-l-none text-accent":""} py-10 px-10 h-[300px] xl:h-[350px] cursor-pointer hover:shadow-2xl hover:rounded-3xl w-[300px]  xl:w-[350px]  `}>
                            <div  className=' text-left mb-6 text-2xl font-bold'>{item.title}</div>
                            <ul className=' list-disc '>

                                {
                                    item.details.map((dt) => (
                                        <li>{dt}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Journey