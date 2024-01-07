import React from 'react'

const Button = (props) => {
  
    
  
  return (
    <button className='border w-28 h-8 bg-blue-600 px-2  text-white  hover:bg-black hover:scale-95 hover:duration-300'>{props.name}</button>
  )
}

export default Button