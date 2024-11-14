import Image from 'next/image'
import React from 'react'


const VisevenExpertise = () => {
    // mobile_apps_main.svg
    return (
        <div className='bg-black w-full py-20'>
            <div className='container flex flex-col justify-center items-center text-center lg:w-[76%] mx-auto '>
                <p className='text-3xl font-semibold text-white'>Viseven expertise in Health apps development for <br /> physicians, patients, and pharmacists</p>
                <div className='bg-[#f1f1f1] py-5 w-full mt-10 rounded-3xl lg:flex justify-between'>
                    <div className='lg:w-[60%] px-8 md:pl-16 md:pr-0 py-6'>
                        <p className='text-3xl font-semibold text-start mb-5'>CLM Mobile App for Healthcare <br />Marketing</p>
                        <ul className='grid grid-cols-2 md:grid-cols-3 list-disc text-start px-4 gap-y-4 mt-4'>
                            <li>Calender</li>
                            <li>Calls</li>
                            <li>Organizations</li>
                            <li>Contacts</li>
                            <li>Email Activity</li>
                            <li>Media Library</li>
                            <li>Events</li>
                            <li>Presentations​</li>

                        </ul>
                    </div>
                    <div className='flex max-w-[350px] lg:w-[35%] items-end justify-end mx-auto lg:mx-0'>
                        <Image src={'/Images/services/apps_portal_development/clm_app.png'} width={5000} height={5000} />

                    </div>
                </div>
                <div className='lg:flex w-full lg:h-[500px] mt-6'>
                    <div className='bg-[#f1f1f1]  px-8 md:px-16 py-11 lg:w-[46%] rounded-3xl lg:mr-[1%]'>
                        <div className=' text-start'>
                            <p className='text-3xl font-semibold mb-6'>Physician App​</p>
                            <p>App features to improve HCP performance and ease their daily tasks</p>
                            <div className='flex flex-col text-start gap-y-6 mt-4'>
                                <p>- <span className="ml-4">Treatment instructions</span></p>
                                <p>- <span className="ml-4">Patient visit calendar</span></p>
                                <p>- <span className="ml-4">Dosing calculators</span></p>
                                <p>- <span className="ml-4">File storage</span></p>


                            </div>
                        </div>

                    </div>
                    <div className="bg-[#f1f1f1] px-8 md:px-16 py-11 lg:w-[53%] h-full rounded-3xl relative mt-10 lg:mt-0">
                        <div className="relative z-10">
                            <p className="text-3xl font-semibold text-start">
                                CLM Mobile App for <br /> Healthcare Marketing
                            </p>
                            <ul className="flex flex-col list-disc text-start px-4 gap-y-6 mt-4">
                                <li>Increased work productivity of pharmacists</li>
                                <li>Profile maintaining</li>
                                <li>List of training courses (eLearning)</li>
                                <li>Personal rating view</li>
                            </ul>
                        </div>
                        <div className="absolute bottom-0 right-0   w-[70%] sm:w-[50%] lg:w-[80%] z-0">
                            <Image
                                src={'/Images/services/apps_portal_development/book_flight.png'}
                                width={5000}
                                height={5000}
                                alt="App Image"
                            />
                        </div>
                    </div>

                </div>
                <div className='lg:flex justify-between bg-[#f1f1f1] w-full h-full mt-6 rounded-3xl'>
                    <div className=' text-start px-8 md:pl-16 md:pr-0 py-11'>
                        <p className='text-3xl font-semibold mb-4'>Patient App</p>
                        <p className=''>App modules implemented for patient convenience</p>

                        <ul className='flex flex-col list-disc px-4 mt-4'>
                            <li>Health monitoring​</li>
                            <li>Programs to support</li>
                            <li>patients with chronic diseases​​​</li>
                            <li>Questionnaires, quizzes, and surveys​</li>
                            

                        </ul>
                    </div>
                    <div className='flex max-w-[350px] lg:w-[35%] items-end justify-end mx-auto lg:mx-0'>
                        <Image src={'/Images/services/apps_portal_development/patient_app.png'} width={5000} height={5000} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default VisevenExpertise