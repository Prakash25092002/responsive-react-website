import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
 const GoToTop = () => {
  const [isVisible , setIsVisible] = useState(false);
  const goToBtn = ()=>{
    window.scroll({top:0, left:0, behavior:'smooth'})
  };
  const listenToScroll = () => {
    
    let hightToHidden = 200;
    const winScroll = document.body.scrollTop||document.documentElement.scrollTop;

    if (winScroll> hightToHidden){
setIsVisible(true);

    }else {
setIsVisible(false)
    }
  }

   useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
    return() => window.removeEventListener("scroll", listenToScroll)
   }, []);
  return (
    <div className=''>
      {isVisible && (
    <div className='bg-gray-200 fixed bottom-[380px] md:bottom-[280px] right-6   md:right-3 rounded-full  ' onClick={goToBtn}><h1 className='border bg-blue-700 rounded-full  p-5 text-[20px] w-[4rem] h-[4rem] cursor-pointer z-[300pz] hover:bg-gray-500 hover:scale-95 ' ><FaArrowUp /></h1></div> )}
    </div>
  )
}
export default GoToTop;
