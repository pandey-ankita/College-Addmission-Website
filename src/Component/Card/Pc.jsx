import React from 'react'
import "./Pc.css"
import card1 from "../../assets/student1.jpg"
import card2 from "../../assets/student2.jpg"
import card3 from "../../assets/student3.jpg"
import book from "../../assets/symbol1.png"
const Pc = () => {
  return (
    <div className='cards' id='Pc'>
<div className="card">
    <img src={card1} alt="" />
    <div className="book">
        <img src={book} alt=""/>
            <p>A good ending is the start of an even better beginning.</p>
    </div>
</div>
<div className="card">
    <img src={card2} alt="" />
    <div className="book">
        <img src={book} alt=""/>
            <p>Wherever you do, do it with all your heart.</p>
    </div>
</div>
<div className="card">
    <img src={card3} alt="" />
    <div className="book">
        <img src={book} alt=""/>
            <p>What once was a dream is now the reality. We made it.</p>
    </div>
</div>

    </div>
  )
}

export default Pc