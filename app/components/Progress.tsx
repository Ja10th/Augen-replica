'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'



const Progress = () => {
  return (
    <div className='bg-[#0F1012]'>
        <div className='py-20'>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
            className=' max-w-4xl pl-10 mx-auto text-sm font-thin text-white py-10 '>Our Progress</motion.p>
            <div className='max-w-4xl mx-auto flex pl-10 gap-40 '>
                <motion.div
                initial={{filter:'blur(4px)', opacity: 0}}
                whileInView={{filter:'blur(0px)',  opacity: 1}}
                transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                >
                    <h2 className='text-2xl font-light  text-white pb-6'>The new Method</h2>
                    <div className='flex items-center'>
                        <div className='py-1 px-4 rounded-2xl border border-blue-400 mr-2'>
                        <IoIosArrowRoundForward className='text-blue-500'/>
                        </div>
                        <p className='text-blue-500'>Go to Updates</p>
                    </div>
                </motion.div>
                <div>
                <motion.p 
                initial={{y: 100, opacity: 0}}
                whileInView={{y:0,  opacity: 1}}
                transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                className='text-white text-sm pb-4 font-extralight'>
                    Where the future is wearable
                    </motion.p>

                    <motion.p 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y:0,  opacity: 1}}
                    transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                    className='max-w-[12rem] text-sm text-gray-500 font-extralight pb-10'>We blend innovation and
                        insight to transform bold
                        visions into reality, redefining
                        the future of human
                        enhancement with
                        cutting-edge wearable
                        technologies such as A¹
                        Sense, B¹ Eye, and A¹ Neuro.
                    </motion.p>
                    <motion.p 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y:0,  opacity: 1}}
                    transition={{delay: 1.1, duration: 1.2, ease: 'easeInOut'}}
                    className='max-w-[12rem] text-sm text-gray-500 font-extralight mx-auto'>
                    These devices are not merely
                        products; they are keys to
                        unparalleled human
                        augmentation. With a mission
                        focused on enhancing the
                        human experience, our
                        company leads in the fields of
                        Invisible Sense, Spatial, and
                        Neural Computing, aiming for
                        a future where technology
                        amplifies human potential and
                        makes every moment
                        extraordinary.
                    </motion.p>
                </div>
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                className='text-gray-500 font-light'>
                    <p>*</p>
                    <p className='max-w-[10rem] text-sm mx-auto'>Committed to advancing Wearable & Neural Technologies for the Intelligence Age.</p>
                </motion.div>
            </div>
        </div>
        <motion.div
        initial={{x:-200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{ delay: 1.2, duration: 1.5, ease: 'easeIn'}} 
        className="flex justify-end">
        <hr className='w-[75%]  mt-24 border-t-1 border-gray-600'/>
        </motion.div>
        <div className='py-20'>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
            className=' max-w-4xl pl-10 mx-auto text-sm font-thin text-white py-10 '>Our Aim</motion.p>
            <div className='max-w-4xl mx-auto flex pl-10 gap-40 '>
                <motion.div
                initial={{filter:'blur(4px)', opacity: 0}}
                whileInView={{filter:'blur(0px)',  opacity: 1}}
                transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                >
                    <h2 className='text-2xl font-light max-w-[12rem] text-white pb-6'>A Radical Impact for Our Life</h2>
                    <div className='flex items-center'>
                        <div className='py-1 px-4 rounded-2xl border border-blue-400 mr-2'>
                        <IoIosArrowRoundForward className='text-blue-500'/>
                        </div>
                        <p className='text-blue-500'>Go to Programs</p>
                    </div>
                </motion.div>
                <div>
                    <motion.p 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y:0,  opacity: 1}}
                    transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                    className='text-white text-sm pb-4 font-extralight'>The future lies in our hands</motion.p>
                    <motion.p 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y:0,  opacity: 1}}
                    transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                        className='max-w-[12rem] text-sm text-gray-500 font-extralight pb-10'>We aim to create advanced
                    technological devices that
                    are seamlessly integrated
                    with the human body,
                    ensuring stability in their use.
                    </motion.p>
                    <motion.p 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y:0,  opacity: 1}}
                    transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                    className='max-w-[12rem] text-sm text-gray-500 font-extralight mx-auto'>
                                        We always keep the
                    end-users of our products in
                    mind, prioritizing safety,
                    accessibility, and reliability
                    throughout our engineering
                    process.                    
                    </motion.p>
                </div>
                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                 transition={{delay: 1.1, duration: 1.2, ease: 'easeIn'}}
                className='text-gray-500 font-light'>
                    <p>*</p>
                    <p className='max-w-[10rem] text-sm mx-auto'>Envisioning the future with a Pro-Human approach.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Progress