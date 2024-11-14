import Image from 'next/image'
import React from 'react'

const OurPortfolio = () => {
  return (
    <>
    <div>
        <div className='container relative w-fit flex justify-center mx-auto'>
            <Image
            src={"/images/our_portfolio.png"}
            width={1000}
            height={1000}
            className='w-[500px] mx-auto'
            alt='our-portfolio'

            />
            <h1 className='text-3xl md:text-4xl font-bold absolute top-0 left-1/2 text-nowrap -translate-x-1/2 '>
                Our portfolio
            </h1>
        </div>
        <div className=' container py-10 bg-secondary rounded-lg px-4 mt-10'>
            <div className='w-[90%] relative mx-auto'>
                <Image
                    src={"/images/dummy-portfolio.png"}
                    width={2000}
                    height={2000}
                    alt='dummy'
                    className=' mx-auto rounded-md'
                />
                <Image
                    src={"/icons/video_icon.svg"}
                    width={2000}
                    height={2000}
                    alt='video icon'
                    className='w-[100px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-default absolute mx-auto rounded-md'
                />
                
            </div>
        </div>
    </div>

    </>
  )
}

export default OurPortfolio