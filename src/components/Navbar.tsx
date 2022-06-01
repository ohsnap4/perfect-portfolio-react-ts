import React from 'react'

const Navbar = () => {
    return (
        <nav className='max-w-[93rem] rounded-xl mx-auto fixed bg-blue-700 opacity-70 left-0 right-0 top-0 flex justify-between  px-40 py-8'>
            <div className='font-bold cursor-pointer text-white text-xl'>
                <a href="#logo">PORTFOLIO</a>
            </div>
            <div >
                <ul className='flex space-x-8 text-xs font-semibold text-white '>
                    <li className='cursor-pointer hover:text-green-700 '><a href="#home">HOME</a></li>
                    <li className='cursor-pointer hover:text-green-700 '><a href="#portfolio">PORTFOLIO</a></li>
                    <li className='cursor-pointer hover:text-green-700 '><a href="#services">SERVICES</a></li>
                    <li className='cursor-pointer hover:text-green-700 '><a href="#testimonials">TESTIMONIALS</a></li>
                    <li className='cursor-pointer hover:text-green-700 '><a href="#contactus">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar