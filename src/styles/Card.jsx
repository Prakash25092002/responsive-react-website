import React from 'react'


const Card = (props) => {
  return (
    <div>
      <div className='flex flex-col justify-center w-[250px] h-[300px] border rounded-md p-2 hover:scale-105 duration-300   my-4'>
        <img src={props.image} alt="" srcset="" />
        <h2 className=' flex justify-center font-semibold'>{props.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  non dicta repellat et?</p>
        <button className='border flex justify-center m-3 mx-14 w-[100px] text-blue-600'>Read More</button>
      </div>
    </div>
  )
}

export default Card