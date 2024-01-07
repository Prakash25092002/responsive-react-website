import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin ,FaFacebook, FaTwitterSquare  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-blue-950 w-auto h-[300px] '>
    <div  className='flex justify-center '>
      <div className='flex justify-between  align-middle rounded-xl  bg-blue-100 border translate-y-[-50%] gap-3   md:w-[800px]
      p-7'>
        <div >
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>
        <div><NavLink to ="/"><button className='border w-28 h-8 bg-blue-600 px-2  text-white  hover:bg-black hover:scale-95 hover:duration-300'>Get Started</button></NavLink></div>
      </div>

      
    </div>
    <div className=' flex justify-center  '>
    <footer  className='flex mt-[-30px] mb-12 text-white md:w-[800px] justify-center gap-4 md:gap-7 md:justify-between '>
        <div className=' mx-5' >
          <h3 className='text-2xl'>Divya Prakash</h3>
          <p className=' w-full md:w-[500px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, repudiandae!.</p>
        </div>
        <div className='my-4 mr-5'><h3 className='text-2xl'>Follow Me</h3>
         <div className='flex gap-3 text-2xl px-2'>
         <a href="https://www.linkedin.com/in/divya-prakash-singh-091601263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'> <FaLinkedin/></a>
          <a href=""><FaFacebook/></a>
          
          <a href="https://twitter.com/Prakash97004001?t=FERUDtJEmEpZ0wx6_iDrvQ&s=09" target='blank'><FaTwitterSquare/></a>
         </div>
        </div>
      </footer>
      </div>
   {/* // footer section */}


   {/* footer bottom */}
   <div>
    <hr />
    <div className='flex justify-center gap-[100px] text-white bg-blue-950 pl-6 m-0 p-0'> 
      <p>PRIVACY POLICY</p>
      <p className='pr-4'>TERMS & CONDITIONS</p>
    </div>
   </div>
    </div>
  )
}

export default Footer