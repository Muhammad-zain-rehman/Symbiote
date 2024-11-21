import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
    return (
        <div className=' lg:flex container '>
            <div className='lg:w-1/2 pt-8 pb-14'>
                <h1 className='text-5xl font-bold'>Who We Are</h1>
                <div className='text-base mt-8'>
                Symbiotic is a global services provider for the life sciences industry, specializing in advanced marketing technologies. We offer end-to-end, tailor-made strategies to build omnichannel excellence from any point and level of digital maturity. Our team of over 700 seasoned experts is dedicated to implementing best-in-class omnichannel projects and communication strategies for the global pharmaceutical market. By leveraging our expertise, we ensure your brand achieves digital maturity and excels in engaging healthcare professionals and patients worldwide. Partner with Symbiotic to transform your digital marketing efforts and drive impactful results in the pharma sector.
                </div>
                <div className='lg:hidden relative'>
                <Image
                    src={"/images/who-we-are-services.svg"}
                    width={1000}
                    height={1000}
                    className="mt-5 w-[500px]"
                    priority
                />
                <Image
                    src={"/images/who-we-are-bg.svg"}
                    width={1000}
                    height={1000}
                    className="w-1/2 absolute top-0 right-0 "
                    priority
                />
            </div>
                <div className='mt-10 flex justify-evenly lg:space-x-20 '>
                    <Image
                        src={"/images/services/apps_portal_development/reliability.svg"}
                        width={1000}
                        height={1000}
                        className="w-20 flex-shrink-0"
                    />
                    <Image
                        src={"/images/services/apps_portal_development/quality_design.svg"}
                        width={1000}
                        height={1000}
                        className="w-28 flex-shrink-0"
                    />
                    <Image
                        src={"/images/services/apps_portal_development/high_conversion.svg"}
                        width={1000}
                        height={1000}
                        className="w-28 flex-shrink-0"
                    />


                </div>
            </div>
            <div className='relative hidden lg:flex w-1/2 justify-end items-center'>
                <Image
                    src={"/images/who-we-are-services.svg"}
                    width={1000}
                    height={1000}
                    className=" flex-shrink-0 w-[500px]"
                    priority
                />
                <Image
                    src={"/images/who-we-are-bg.svg"}
                    width={1000}
                    height={1000}
                    className="w-1/2 absolute top-0 right-0"
                    priority
                />
            </div>
        </div>
    )
}

export default WhoWeAre