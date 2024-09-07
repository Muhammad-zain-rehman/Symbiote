import Image from 'next/image'
import React from 'react'
import WhoWeAre from './WhoWeAre'

const AppsAndPortalsDevelopment = () => {
    // mobile_apps_main.svg
    return (
        <>
            <div className='bg-primary'>
                <div className='text-white min-h-[450px] container  relative  flex justify-between '>
                    <div className='w-1/2 pt-8 pb-14'>
                        <h1 className='text-5xl font-bold'>Apps and Portals <br />Development from</h1>
                        <div className='text-base mt-8'>
                            Symbiote is your go-to partner for cutting-edge digital marketing in the pharmaceutical and life sciences sectors. We offer a comprehensive suite of services, from virtual reality technology to mobile app development
                        </div>
                        <div className='mt-10'>
                            <button className='bg-white text-black py-3 px-4 text-sm rounded-lg'>
                                Start the conversation
                            </button>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-end items-center'>
                        <Image
                            src={"/images/mobile_apps_main.svg"}
                            width={1000}
                            height={1000}
                            className="w-3/4 flex-shrink-0"
                        />
                    </div>
                </div>
            </div>
            <WhoWeAre />

        </>
    )
}

export default AppsAndPortalsDevelopment