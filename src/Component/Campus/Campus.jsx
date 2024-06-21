import React from "react";
import "./Campus.css";
import cam1 from "../../assets/campus1.jpg";
import cam2 from "../../assets/campus2.jpg";
import cam3 from "../../assets/campus3.jpg";
import cam4 from "../../assets/campus4.jpg";
const Campus = () => {
  return (
    <>
    <div className="campus" id="Campus">
      <div className="g">
        <img src={cam1} alt="" />
        <img src={cam2} alt="" />
        <img src={cam3} alt="" />
         <img src={cam4} alt="" />
        
      </div>
      <button className="btn dark-btn">see mor here</button>
    </div>
    
    </>
  );
};

export default Campus;
