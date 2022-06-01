import React from 'react'

const Hero = () => {
    return (
        <section className='min-h-[86vh] mt-20 flex justify-center items-center flex-col ' >
            {/* <div className='absolute inset-0 opacity-[30%] bg-black'></div> */}
            <p className='text-[#8ab92d] relative text-xs tracking-[.2rem] my-8'>NOW YOU CAN WATCH THE TALENT</p>
            <h1 className='text-7xl font-black relative text-white mb-8'>Let’s Explore Idea!</h1>
            <button className='bg-[#8ab92d]  relative text-white py-2 px-8 border-[#8ab92d] rounded-full font-semibold text-sm hover:bg-transparent hover:border-white border-[.1rem] my-4'>EXPLORE NOW</button>
        </section>
    )
}

export default Hero