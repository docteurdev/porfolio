import React, { useState } from 'react';
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import "./tastimonial.scss";

const testimonial = [
  {
    name: "Shaban",
    image: images.about01,
    company: "Riduc",
    feedback: "bon boulot, satisfait"
  },
  {
    name: "Erick",
    image: images.about02,
    company: "Delax",
    feedback: "bon boulot, satisfait"
  },
  {
    name: "Chen chi",
    image: images.about03,
    company: "Faraz",
    feedback: "bon boulot, satisfait"
  }
]


function Tastimonial() {

  const [currentIndex, setcurrentIndex] = useState(0);
 
  const handleClick = (index) =>{
    setcurrentIndex(index)
  }
  

  return (
    <>
      {
        testimonial.length && (
          <>
            <div className="app__testimonial-item app__flex">
              <img src={testimonial[currentIndex].image} alt="" />
              <div className="app__tesimonial-content">
                <p className="p-text">{testimonial[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text"> {testimonial[currentIndex].name} </h4>
                  <h5 className="p-text"> {testimonial[currentIndex].company} </h5>
                </div>
              </div>

            </div>

            <div className="app__testimonial-btns app__flex">
              <div className="app__flex"
               onClick={() => handleClick(currentIndex === 0 ? testimonial.length - 1 : currentIndex -1  ) }
              >
                <HiChevronLeft/>
              </div>
              <div className="app__flex"
               onClick={() => handleClick(currentIndex === testimonial.length ? 0 : currentIndex +1  ) }
              >
                <HiChevronRight/>
              </div>
            </div>
          </>
        )
      }
      <div className="app__testimonial-brands app__flex">
        
      </div>
    </>
  )
}

export default Tastimonial