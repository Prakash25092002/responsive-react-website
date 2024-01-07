import React, { useState } from 'react'
import{NavLink} from "react-router-dom"
import { CgMenu,CgCloseR } from "react-icons/cg"
const Navbar = () => {
  const [nav ,setNav]= useState(false);
  return (
    <nav className=''>
    <div >
      <ul className='hidden md:flex gap-6 py-4 font-semibold text-2xl px-12 '>
        <li>
          <NavLink className=" hover:text-blue-700 hover:duration-300"to = "/">
             Home
          </NavLink>
          </li>
          <li>
          <NavLink className=" hover:text-blue-700  hover:duration-300" to = "/about">
             About
          </NavLink>
          </li>
          <li>
          <NavLink className=" hover:text-blue-700  hover:duration-300" to = "/services">
             Services
          </NavLink>
          </li>
          <li>
          <NavLink className=" hover:text-blue-700  hover:duration-300" to = "/contact">
             Contact
          </NavLink>
        </li>
      </ul>
      <div onClick={()=> setNav(!nav)} className='  my-4 z-10   text-gray-500 cursor-pointer px-4'>
        {nav ? <CgCloseR size={30} className='  absolute top-7 right-7 z-40' /> :<  CgMenu size={30} className='md:hidden '/> }

        
      </div>
      {nav && ( <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500' >
          <NavLink to = "/"><li className=' px-4 cursor-pointer capitalize py-4 text-4xl'>home</li></NavLink>
          <NavLink to = "/about" ><li className=' px-4 cursor-pointer capitalize py-4 text-4xl'>about</li></NavLink>
          <NavLink to = "/services"><li className=' px-4 cursor-pointer capitalize py-4 text-4xl'>services</li></NavLink>
          <NavLink to = "/contact"><li className=' px-4 cursor-pointer capitalize py-4 text-4xl'>contact</li></NavLink>
          
          
        </ul>)}
     
    </div>
    </nav>
  )
}

export default Navbar