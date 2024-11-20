import Image from 'next/image'
import React from 'react'

const ServicesCard = ({ item,custom_class,img_class }) => {
    return (
        <div>
            <div className={`${custom_class?custom_class:"bg-primary text-accent h-[250px] space-y-5  "}  px-5 w-[300px] rounded-[20px] flex flex-col justify-center items-center`}>
                <Image
                    src={item.src}
                    width={120}
                    height={120}
                    className={`${custom_class?"w-20":"w-28"}`}
                />
                <h2 className=' font-bold t'>{item.title}</h2>
                <div className=' text-xs text-center'>
                {item.description}
                </div>
            </div>
        </div>
    )
}

export default ServicesCard