import React from 'react'
import Card from './styles/Card'

const Services = () => {

  const data={
     name: " Web Devlopment",
     image:"https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg "
     
  }
  const data1={
    name: "FrontEnd Devloper",
    image:"https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
 }
 const data3={
  name: "BackEnd Devloper",
    image:"https://t4.ftcdn.net/jpg/03/15/02/27/240_F_315022751_vg1XCkEIsspb0LIP8bCwUKVhINP69wOv.jpg"}
const data4={
  name: "UI UX Designer",
  image:"https://t3.ftcdn.net/jpg/04/25/76/62/240_F_425766236_fm41y7M7TqMNrulUyyb9kbeOGJCe98Oe.jpg"
}
const data5={
  name: "DBMS",
  image: "https://t3.ftcdn.net/jpg/06/16/56/42/240_F_616564238_YT3U8F3JGROxjOzRSjSnLjB4iyc3HfJv.jpg"
}
const data6={
  name: "Android DeVloper",
  image:"https://t3.ftcdn.net/jpg/06/18/28/30/240_F_618283089_aPT4AO2Yx3cjmDg41m5Aca1aK2kKjYVL.jpg"
}
  return (
    <div>
    <div className='w-full h flex justify-center my-4 text-2xl font-bold'>Services
    </div>
    <div className='flex flex-wrap gap-6 md:gap-14 justify-center'>
    <Card {...data}/>
    <Card {...data1}/>
    <Card {...data3}/>
    
    </div>
    <div className='flex flex-wrap gap-6 md:gap-14 justify-center md:mb-[50px] mb-10'>
    <Card {...data4}/>
    <Card {...data5}/>
    <Card {...data6}/>
    
    </div>
    </div>
  )
}

export default Services