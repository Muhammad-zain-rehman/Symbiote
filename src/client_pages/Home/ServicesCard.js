import Image from 'next/image'
import React from 'react'

const ServicesCard = ({ item,custom_class }) => {
    return (
        <div>
            <div className={`${custom_class?custom_class:"bg-primary text-white text-accent"}  space-y-5 w-[300px] rounded-[20px] p-8 flex flex-col justify-center items-center`}>
                <Image
                    src={item.src}
                    width={3000}
                    height={4000}
                    className='w-32'
                />
                <h2 className=' font-bold t'>{item.title}</h2>
                <div className=' text-sm text-center'>
                {item.description}
                </div>
            </div>
        </div>
    )
}

export default ServicesCard