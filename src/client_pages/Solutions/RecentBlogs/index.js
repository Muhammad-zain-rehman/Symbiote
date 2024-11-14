import Image from 'next/image'
import React from 'react'

const RecentBlogs = () => {
    return (
        <div className='my-10 lg:my-20 container'>

            <h1 className='font-semibold mb-16 text-center text-4xl'>Our expertise converts into<br />successful cases</h1>

            <div className='  flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-4'>
                {
                    [1, 2, 3].map((item) => (
                        <div className=' rounded-xl  text-center flex flex-col justify-center items-center text-accent bg-secondary w-[300px] py-8'>
                            <Image
                                src={"/images/blog_dummy_image.png"}
                                width={3000}
                                height={2000}
                                className='w-3/4 mx-auto'
                            />
                            <div className=' mt-4'>
                                <h1 className='font-bold mb-3 '>
                                    eWizard Content<br />
                                    Experience Platform
                                </h1>
                                <p className='text-accent text-sm'>
                                    Help us build a school in a remote <br />village in Africa
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentBlogs