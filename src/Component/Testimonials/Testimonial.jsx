import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/left.png";
import back_icon from "../../assets/right.png";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const sliderForward = () => {
    if (tx < 0) {
      tx += 25; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const sliderBackward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="test" id="Testimonial">
        <img src={next_icon} alt="" className="next-btn" onClick={sliderForward} />
        <img src={back_icon} alt="" className="back-btn" onClick={sliderBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>william jackson </h3>
                    <span>edusity,usa</span>
                  </div>
                </div>
                <p>You won’t be able to use everything you learned but you’ll have a great foundation to build on. And don’t underestimate the power of learning soft skills like teamwork, time management, and critical thinking as you work your way through group projects and deadlines.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} alt="" />
                  <div>
                    <h3>Harry Oliver</h3>
                    <span>edusity,usa</span>
                  </div>
                </div>
                <p>Don’t expect that you’ll be able to take in everything you need to study quickly and without difficulty. Give yourself the time to take small steps and divide big topics into smaller chunks. You’ll learn something new every day, which means you’re making progress every day
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} alt="" />
                  <div>
                    <h3>Sophia Mia</h3>
                    <span>edusity,usa</span>
                  </div>
                </div>
                <p>Mastering a skill means putting in the time and effort it takes to become good at something. It’s easy to see a master at work and forget that it took hours of work to get to that level. If you set your mind to it and train or study hard, you can learn any skill you want.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user4} alt="" />
                  <div>
                    <h3>Muhammad Leo</h3>
                    <span>edusity,usa</span>
                  </div>
                </div>
                <p>Too often we get stuck in a limbo of talking about or dreaming about beginning a project instead of just getting started. It’s the fear of failure that makes us come up with excuses but it’s okay to make mistakes. You’ll never grow if you don’t get started and make mistakes along the way.
                </p>
              </div>
            </li>
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;