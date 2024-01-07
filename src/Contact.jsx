import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-gray-200 h-[810px] md:h-[810px]'>
      <h2 className='flex justify-center py-5 text-3xl font-semibold'>Feel Free To Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.719160505033!2d86.60330950000004!3d26.108084699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee555bff902981%3A0xe1f39a0b3e6ca31c!2sSupaul%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1704492895398!5m2!1sen!2sin" width="100%" height="230" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className=' flex justify-center my-6 border-b-8  '>
        <form className='  rounded-xl bg-gray-400 w-[300px] md:w-[400px]  ' action="https://formspree.io/f/xayryazy" method='POST'>
          <input className='border  py-4 my-4 mx-5 rounded-xl px-4 md:w-[360px] w-[260px]' type="text" name='username' placeholder='username' autoComplete='off' required />
          <input  className='border py-4 my-4  md:w-[360px] w-[260px] mx-5 rounded-xl px-4' type="email" name='Email' placeholder='Email' autoComplete='off' required />

          <textarea className='border resize-none md:w-[360px] w-[260px] mx-5 rounded-xl' name="message" id="" cols="30" rows="6"
          autoComplete='off' required  ></textarea>
           <div className=' flex justify-center '>
          <input className='border w-16 h-8 mt-5 mb-7 cursor-pointer bg-blue-700 text-white rounded-md hover:bg-white hover:text-black hover:border-blue-400 ' type="submit" value="send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact