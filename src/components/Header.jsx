import React from 'react'
import{NavLink} from "react-router-dom"
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className='bg-blue-100 w-full '>
    <header className='flex justify-between '>
      <NavLink to ="/">
        <h1 className='p-4 text-3xl font-extrabold'>DP</h1>
      </NavLink>
      <Navbar/>
    </header>
    </div>
  )
}

export default Header