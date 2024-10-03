import Image from 'next/image'
import React from 'react'

const WinCompetition = () => {
    return (
        <div >
            <h1 className='text-2xl text-center font-bold'>Win a competition<br />with a high-quality website</h1>
            <div className=' mt-10 rounded-3xl flex space-x-20 p-10 sm-container bg-primary '>
                <Image
                    src={"/images/services/apps_portal_development/bulb.png"}
                    width={1000}
                    height={1000}
                    className='w-40'
                />
                <div className='space-y-3 text-white w-60'>
                    <h2 className='  font-bold'>Our Solutions</h2>
                    <div className='text-sm'>
                        We develop web applications, websites, banners, eLearning portals,
                        virtual and augmented reality solutions for healthcare professionals,
                        patients, and caregivers
                    </div>
                </div>
                <Image
                    src={"/images/services/apps_portal_development/vector_v.png"}
                    width={1000}
                    height={1000}
                    className='w-32'
                />
                <div className='space-y-3 text-white'>
                    <h2 className='font-bold'>Your Result</h2>
                    <ul className='text-sm list-disc'>
                        Interactive and user-friendly website
                        <li>Information is available for customers 24/7</li>
                        <li>Gathering relevant customer data with built-in analytics</li>
                        <li>Improved market relations: users get information from a trusted source</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default WinCompetition