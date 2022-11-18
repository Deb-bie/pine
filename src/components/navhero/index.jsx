import React from 'react'
import Hero from '../hero'
import Navbar from '../navbar'

import "./navhero.css"

const NavHero = () => {
  return (
    <div className="navhero w-[100%] h-[100%] flex flex-col overflow-hidden ">
        <Navbar />
        <Hero />
    </div>
  )
}

export default NavHero