'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { PiStarOfDavidThin } from 'react-icons/pi'

const Product = () => {
  return (
    <div className='bg-white py-20'>
        <div className='flex flex-col justify-center items-center py-20'>
            <div className='bg-black bg-opacity-95 p-1 '>
                <PiStarOfDavidThin className='text-2xl text-white'/>
            </div>
            <p className='pt-4 font-extralight'>Meet Our</p>
        </div>
        <div className='relative'>
            <motion.h1 
            initial={{filter:'blur(4px)', opacity: 0}}
            whileInView={{filter: 'blur(0px)', opacity:1}}
            transition={{delay: 1.2, duration:1.5, ease:'easeInOut'}}
            className='text-[10rem] leading-tight mx-auto py-16 font-light text-blue-500 text-center max-w-3xl'>Wearable Devices</motion.h1>
            <div className='absolute top-24 left-1/2 transform -translate-x-1/2'>
                <img src="prod.webp" alt="Wearable Product of Augen" 
                className='h-80'
                />
            </div>
        </div>
        <div className='flex max-w-4xl gap-60 pl-8 mx-auto py-20  '>
            <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.2, duration:1.5, ease: 'easeInOut'}}
            >
                <p className='text-gray-500 max-w-xs pb-6'>We&apos;re currently in Research & Development
                phase on two innovative devices that will</p>
                <p className='text-black'>Enhance everyday life</p>
            </motion.div>
            <div className='pl-20 pt-4'>
                <p className='text-sm text-right pb-6'>
                    Explore in depth
                </p>
                <div>
                    <button className='bg-blue-500 text-white py-1 px-4 rounded-2xl'>A<sup>1</sup>Sense</button>
                    <button className='border-blue-500 border py-1 px-6 rounded-2xl ml-2'>B<sup>1</sup>Eye</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product