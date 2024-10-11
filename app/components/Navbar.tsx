import React from 'react'
import { PiStarOfDavidThin } from 'react-icons/pi'

const Navbar = () => {
  return (
    <div 
    className='items-center max-w-7xl mx-auto fixed z-10 top-9 left-1/2 transform -translate-x-1/2 '>
        <div className='flex gap-2 items-center'>
            <div className='bg-gray-100  bg-opacity-95 p-2 rounded-full'>
            <PiStarOfDavidThin className='text-2xl'/>
            </div>
            <div className='bg-gray-100 bg-opacity-80 py-3 px-12 rounded-xl flex gap-10'>
                <p className='font-light text-sm'>Wearable</p>
                <p className='font-light text-sm'>Neural</p>
                <p className='font-light text-sm'>Programs</p>
                <p className='font-light text-sm'>Updates</p>
                <p className='font-light text-sm'>Search</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar