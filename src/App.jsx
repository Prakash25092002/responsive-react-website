import { useState } from 'react'


import Home from './Home'
import About from "./About"
import Services from './Services'
import Contact from './Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header  from "./components/Header"
import Footer   from "./components/Footer"
import Error from './error';
import GoToTop from './components/GoToTop';

function App() {

  
  return (
    
    <BrowserRouter>
    
    <Header/>
    <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/services" element = {<Services/>} />
    <Route path="/contact" element = {<Contact/>} />
    <Route path="*" element = {<Error/>} />
    </Routes>
    <GoToTop/>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
