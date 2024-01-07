import React  from 'react'
import Button from '../styles/Button'
import{NavLink} from "react-router-dom"
// import { AppContext } from '../context';
import { useGlobalContext } from '../context'


const Hero = (props) => {
   const {name, image} = useGlobalContext();
  const data={
     name: "Hire ME"
  }
  return (
    <div className='  flex flex-col gap-4 items-center justify-center md:justify-center md:items-center md:flex md:gap-16 md:flex-row-reverse   md:py-16 py-7 bg-gray-300'>
       <div className=' w-auto  md:w-[300px]  md:h-[200px]'>
        <img src={image} alt=""  />
      </div>
      <div className=' mb-10 ' >
        <p className='text-gray-800'>This is me</p>
        <h1 className='text-4xl font-bold mb-3 '>{props.name}</h1>
        <p className='mb-3'> I'm  {name} A <span className='font-bold text-sky-900'>Frontend Devloper</span></p>
        <NavLink to= "/Contact" ><Button {...data} ></Button ></NavLink>
      </div>
     
    </div>
  )
}

export default Hero