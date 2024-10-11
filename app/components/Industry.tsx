'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Industry = () => {
  return (
    <div className='bg-[#0F1012] py-20'>
        <motion.div 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 1.2, duration: 1.5, ease: 'easeInOut'}}
        className='max-w-6xl  flex justify-between items-center pl-[29rem] pt-6 mx-auto'>
            <div className='flex flex-col justify-center text-left '>
                <hr className='w-2 mb-2 border-blue-500'/>
                <p className='font-thin text-gray-300 text-sm pb-4'>Industries</p>
                <p className='font-extralight text-xl text-white'>Wearable & Neural technologies</p>
            </div>
            <div className='flex flex-col justify-center text-left '>
            <hr className='w-2 mb-2 border-blue-500'/>
                <p className='font-thin text-gray-300 pb-4'>Core Business</p>
                <p className='font-extralight text-xl text-white'>AI Wearable technologies</p>
            </div>
            <div className='flex flex-col justify-center text-left '>
            <hr className='w-2 mb-2 border-blue-500'/>
                <p className='font-thin text-sm text-gray-300 pb-4'>Domain</p>
                <p className='font-extralight text-xl text-white'>augen.pro</p>
            </div>
        </motion.div>
        <motion.div
        initial={{x:-200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{ delay: 1.2, duration: 1.5, ease: 'easeIn'}} 
        className="flex justify-end">
        <hr className='w-[75%]  mt-24 border-t-1 border-gray-600'/>
        </motion.div>
        <motion.div 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 1.2, duration: 1.5, ease: 'easeInOut'}}
        className='flex max-w-4xl gap-60 pl-8 mx-auto py-20 '>
            <div>
                <div>
                    <p className='text-gray-400 font-thin text-sm'>0.4</p>
                    <p className='text-white text-sm'>How We Talk</p>
                </div>
            </div>
            <div className='flex gap-10'>
                <div>
                    <p className='text-white text-xl'><span className='text-blue-500'>[</span>ehe<sup>1</sup><span className='text-blue-400'>]</span></p>
                    <p className='font-thin text-white text-sm pt-5'>Enhance</p>
                    <p className='font-thin text-white text-sm'>Human</p>
                    <p className='font-thin text-white text-sm'>Experience</p>
                </div>
                <div>
                    <p className='text-blue-500'>[<span className='text-white'>NGCT</span>]</p>
                    <p className='font-thin text-white text-sm pt-5'>Next-Gen</p>
                    <p className='font-thin text-white text-sm'>Computing</p>
                    <p className='font-thin text-white text-sm'>Technologies</p>
                </div>
                <div>
                    <p className='text-blue-500'>[<span className='text-white'>AIWC</span>]</p>
                    <p className='font-thin text-white text-sm pt-5'>Artificial</p>
                    <p className='font-thin text-white text-sm'>Intelligence</p>
                    <p className='font-thin text-white text-sm'>Wearable</p>
                    <p className='font-thin text-white text-sm'>Company</p>
                </div>

            </div>
        </motion.div>
         
    </div>
  )
}

export default Industry