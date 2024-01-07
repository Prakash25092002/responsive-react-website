import React, {useEffect} from 'react'
import Hero from './components/Hero'
import { useGlobalContext } from './context';
const About = () => {
   
  // const data = {
  //   name: "Prakash Singh",
  //   image:"https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg"
  // };

  const {updateAboutpage } = useGlobalContext();

useEffect(()=> updateAboutpage()
, []);
  return (
   <Hero />//we use {...data} for using props 
  )
}

export default About