import Image from 'next/image'
import React from 'react'

const Expertise = () => {
    return (
        <>
            <div className=' flex container '>
                <div className='w-1/2 pt-8 pb-14'>
                    <h1 className='text-5xl font-bold'>Symbiote Expertise</h1>
                    <div className='text-base mt-8'>
                        Symbiote is a global services provider for the life sciences industry, specializing in advanced marketing technologies. We offer end-to-end, tailor-made strategies to build omnichannel excellence from any point and level of digital maturity. Our team of experts is dedicated to implementing best-in-class omnichannel projects and communication strategies for the global pharmaceutical market.By leveraging our expertise, we ensure your brand achieves digital maturity and excels in engaging healthcare professionals and patients worldwide. Partner with Symbiote to transform your digital marketing efforts and drive impactful results in the pharma sector.
                    </div>
                    
                </div>
                <div className='w-1/2 flex justify-end items-center'>
                    <Image
                        src={"/images/symbiote_expertise.svg"}
                        width={1000}
                        height={1000}
                        className="w-3/4 flex-shrink-0"
                    />
                </div>
            </div>

        </>
    )
}

export default Expertise