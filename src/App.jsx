import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Part1 from './Component/Page/Part1'
import Pc from './Component/Card/Pc'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonials/Testimonial'
import Help from './Component/Help/Help'
import Footer from './Component/Footer/Footer'
import { VideoPlayer } from './Component/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false)
  return (
    <>
    <Navbar/>
    <Part1/>
    <div className="container">
      <Title subTitle='our program' title='what we offer'/>
     <Pc/> 
     <About setPlayState={setPlayState}/>
    
     <Title subTitle='our Campus' title='Campus photos'/>
    {/* <Contact/> */}                                                      
    <Campus/>
    <Title subTitle='testimonials' title='what student says'/>
    <Testimonial/>
    <Title subTitle='contact us' title='get in touch'/>
  <Help/>
  <Footer/>
    </div>
   <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    
    </>
  )
}

export default App