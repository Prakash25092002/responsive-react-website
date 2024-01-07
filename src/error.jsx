import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center bg-gray-100 '>
      <img className='h-[450px]' src="https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/error.svg" alt="" />
      <div className='flex justify-center'>
        <NavLink to="/">
      <button className='bg-blue-800   rounded-xl text-white flex justify-center mx-24 my-8 text-[1.3rem] p-2 hover:bg-black duration-300'>Go Back</button>
      </NavLink></div>

    </div>
    
  )
}

export default Error