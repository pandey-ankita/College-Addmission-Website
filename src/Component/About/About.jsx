import React from 'react'
import "./About.css"
import picc from "../../assets/about-1.jpg"
import icon from "../../assets/video-icon.png"

const About = ({setPlayState}) => {
  return (<>
  <div className="about" id='About'>
   <div className="aboutleft">
   <img src={picc} alt="" className='img' />
<img src={icon} alt="" className='icon' onClick={()=>{
   setPlayState(true)
}} />
</div>

<div className="aboutright">
<h3>About hospital</h3>
<h2>welcome to my hospital hospital hospital</h2>
<p>College life is known as one of the most memorable years of one’s life. It is entirely different from school life. College life exposes us to new experiences and things that we were not familiar with earlier. For some people, college life means enjoying life to the fullest and partying hard. While for others, it is time to get serious about their career and study thoroughly for a brighter future.</p>
<p>Nonetheless, college life remains a memorable time for all of us. Not everyone is lucky enough to experience college life. People do not get the chance to go to college due to various reasons. Sometimes they do not have a strong financial background to do so while other times they have other responsibilities to fulfill. The ones who have had a college life always wish to turn back time to live it all once again.</p>
<p>Another college life experience I have seen people cherish the most is the annual fest. The annual fest created so much excitement and buzz amongst the students. Everyone welcomed other colleges with open arms and also made friends there. All the competitions were carried out in a good spirit and the students dressed their best to represent their college well.</p>
<p>TO KNOW MOST ABOUT THE CAMPUS PLZ CLICK ON THE VIDEO ICON.... </p>
</div>
   </div>
   </> )
}

export default About