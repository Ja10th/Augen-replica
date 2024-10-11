import React from 'react'

const Mission = () => {
  return (
    <div className='bg-[#161719] py-20'>
        <div className='flex flex-col justify-center text-left max-w-xs pl-14 pt-6 mx-auto'>
            <p className='font-thin text-white'>At Augen</p>
            <p className='font-extralight text-blue-500'>We put Humans First</p>
        </div>

        <div className='flex max-w-8xl mx-auto gap-60  py-20 justify-center'>
            <div>
                <div>
                    <p className='text-gray-400 font-thin text-sm'>0.1</p>
                    <p className='text-white text-sm'>Our Mission</p>
                </div>
                <div className='py-10'>
                    <p className='text-gray-400 font-thin text-sm'>0.2</p>
                    <p className='text-white text-sm'>Our Vision</p>
                </div>
                <div>
                    <p className='text-gray-400 font-thin text-sm'>0.3</p>
                    <p className='text-white text-sm'>Our Ambition</p>
                </div>
            </div>
            <div>
                <p className='text-2xl font-light text-white'>Enhancement of human experience</p>
                <hr />
                <p className='text-2xl font-light py-14 text-gray-200'>Be the future of next-gen computing technologies</p>
                <hr className='mb-7'/>
                <p className='text-2xl font-light text-gray-400'>Enhance everyday life</p>

            </div>
        </div>

    </div>
  )
}

export default Mission