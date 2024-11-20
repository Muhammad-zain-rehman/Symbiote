import Image from 'next/image'
import React from 'react'

const AppProcess = () => {

    return (
        <div className='container'>
            <div className='lg:flex justify-between relative z-10'>
                <div className='lg:w-[40%] mt-4'>
                    <h1 className='text-4xl font-semibold mb-10'>Process of App Design development work</h1>
                    <div className='text-xl font-light mb-5'>
                        for physicians, patients, and pharmacists
                    </div>
                
                </div>
                <div className=' relative flex flex-wrap justify-center items-center gap-x-5 3xl:gap-x-10 lg:justify-end lg:items-end '>


                    <div className={`bg-primary text-accent min-w-[150px] max-w-[300px] lg:max-w-none aspect-[3/2] lg:w-[42%] 3xl:w-[47%] mb-6 px-5 py-4 gap-y-3 rounded-[20px] flex flex-col justify-center items-center`}>
                        <div className='flex h-12 w-12 rounded-full bg-[#EEEEEE] text-[#3F3F3F] items-center justify-center font-bold text-xl'>01</div>
                        <h2 className=' font-medium text-2xl text-center'>MEDICAL PORTALS</h2>
                        <p className='font-light text-sm text-center'>Conduct thorough market of the researchfast target</p>
                    </div>
                    <div className={`bg-primary text-accent min-w-[150px] max-w-[300px] lg:max-w-none aspect-[3/2] lg:w-[42%] 3xl:w-[47%] mb-6 px-5 py-4 gap-y-3 rounded-[20px] flex flex-col justify-center items-center`}>
                        <div className='flex h-12 w-12 rounded-full bg-[#EEEEEE] text-[#3F3F3F] items-center justify-center font-bold text-xl'>02</div>
                        <h2 className=' font-medium text-2xl text-center'>PATIENT SUPPORT</h2>
                        <p className='font-light text-sm text-center'>Conduct thorough market of the researchfast target</p>
                    </div>

                </div>
            </div>

            <div className='hidden lg:block  -mt-10 lg:-mt-[52px] relative z-20'>
                <svg width="" height="154" viewBox="0 0 1590 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M651 147V76" stroke="#3F3F3F" stroke-width="3" />
                    <circle cx="651" cy="147" r="7" fill="#D9D9D9" />
                    <path d="M944 7L944 78" stroke="#3F3F3F" stroke-width="3" />
                    <circle cx="944" cy="7" r="7" transform="rotate(-180 944 7)" fill="#D9D9D9" />
                    <path d="M1391 7L1391 78" stroke="#3F3F3F" stroke-width="3" />
                    <circle cx="1391" cy="7" r="7" transform="rotate(-180 1391 7)" fill="#D9D9D9" />
                    <path d="M204 147V76" stroke="#3F3F3F" stroke-width="3" />
                    <circle cx="204" cy="147" r="7" fill="#D9D9D9" />
                    <path d="M0 77H1590" stroke="#3F3F3F" stroke-width="3" />
                </svg>

            </div>

            <div className='lg:flex justify-between relative z-10'>
                <div className='  relative flex flex-wrap justify-center items-center gap-x-5 3xl:gap-x-10 lg:justify-start lg:items-start pt-5 -mt-4 lg:-mt-12 '>


                    <div className={`bg-primary text-accent min-w-[150px] max-w-[300px] lg:max-w-none aspect-[3/2] lg:w-[42%] 3xl:w-[47%]  mb-6 px-5 py-4 gap-y-3 rounded-[20px] flex flex-col justify-center items-center `}>
                        <div className='flex h-12 w-12 rounded-full bg-[#EEEEEE] text-[#3F3F3F] items-center justify-center font-bold text-xl'>03</div>
                        <h2 className=' font-medium text-2xl text-center'>Briefing & Research</h2>
                        <p className='font-light text-sm text-center'>Conduct thorough market of the researchfast target</p>
                    </div>
                    <div className={`bg-primary text-accent min-w-[150px] max-w-[300px] lg:max-w-none aspect-[3/2] lg:w-[42%]  3xl:w-[47%] mb-6 px-5 py-4 gap-y-3 rounded-[20px] flex flex-col justify-center items-center`}>
                        <div className='flex h-12 w-12 rounded-full bg-[#EEEEEE] text-[#3F3F3F] items-center justify-center font-bold text-xl'>04</div>
                        <h2 className=' font-medium text-2xl text-center'>Briefing & Research</h2>
                        <p className='font-light text-sm text-center'>Conduct thorough market of the researchfast target</p>
                    </div>

                </div>
                <div className='lg:w-[40%] '>
                    <p className='text-xl font-light'>Crafting compelling digital experiences that captivate audiences and drive meaningful connections. Our digital agency combines innovation, strategy, and expertise to fuel your online success.</p>
                   
                </div>

            </div>

            
            <div className='py-10 lg:flex justify-between'>
                <div className='lg:w-[55%] mt-4'>
                    <h1 className='text-4xl font-semibold mb-10'>Symbiote Expertise</h1>
                    <div className='text-xl font-light' >
                    Symbiote is a global services provider for the life sciences industry, specializing in advanced marketing technologies. We offer end-to-end, tailor-made strategies to build omnichannel excellence from any point and level of digital maturity. Our team of experts is dedicated to implementing best-in-class omnichannel projects and communication strategies for the global pharmaceutical market.By leveraging our expertise, we ensure your brand achieves digital maturity and excels in engaging healthcare professionals and patients worldwide. Partner with Symbiote to transform your digital marketing efforts and drive impactful results in the pharma sector.
                    </div>
                
                </div>
                <div className=' lg:w-[35%]  relative flex justify-center items-center gap-x-5 lg:justify-end lg:items-end '>
                <Image src={'/images/services/Symbiote-Expertise.jpg'} width={5000} height={5000} className='w-[450px]' priority/>

                </div>
            

            </div>
        </div>
    )
}

export default AppProcess