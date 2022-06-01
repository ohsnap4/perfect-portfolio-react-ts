import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header id='home' style={{ position: "relative", minHeight: '96vh', borderRadius: ".5rem", width: "100%", overflow: "hidden", backgroundImage: 'url(/hero-background.webp)', backgroundPosition: "center", objectFit: "contain" }}>
            <Navbar />
            <Hero />
        </header>
    )

}

export default Header