import React from 'react'

const Footer = () => {
    return (
        <footer id='contactus' className=' my-4 rounded-lg shadow-xl text-white py-20 px-40 gap-12 bg-[#04091e] grid grid-cols-2 md:grid-cols-3'>
            <div className='flex flex-col space-y-4'>
                <h2 className='text-xl font-bold'>About Us</h2>
                <p className='text-gray-600 text-sm tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
                <span className='text-gray-400'>Copyright ©2022 All rights reserved | This template is made with  by Colorli</span>
            </div>
            <div className='flex flex-col space-y-4'>
                <h2 className='text-xl font-bold'>Newsletter</h2>
                <p className='text-gray-400 capitalize'> update with our latest</p>
                <input type="text" className='border-none rounded-lg outline-none py-2 px-2 bg-black text-white' placeholder='Enter your Email' />
            </div>
            <div className='flex flex-col space-y-4'>
                <h2 className='text-xl '>Follow Us</h2>
                <p className='text-gray-500'>Let us be social</p>
            </div>
        </footer>
    )
}

export default Footer