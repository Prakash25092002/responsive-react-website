import React, { useEffect } from 'react'
import Hero from './components/Hero'
import { useGlobalContext } from './context'
import Services from './Services'
import About from './About'
import Contact from './Contact'
const Home = () => {



  // const data = {
  //   name: " Divya Prakash Singh",
  //   image:"https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg"
  // };
  const {updateHomePage} = useGlobalContext();

useEffect(()=>{
  updateHomePage();

} , []);


  return (
    <>
    <Hero />
    
    <Services/>
    
    <Contact/>
    </>
  )
}

export default Home