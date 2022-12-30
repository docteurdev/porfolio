import React, { useState } from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';
import './navbar.scss';
import { images } from "../../constants";



function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo' >
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['about me', 'projects', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`Link-${item.id}`} >
            <div />
            <a href={`#${item}`}> {item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        {!toggle ? <HiMenuAlt4 onClick={() => setToggle(true)} /> : <HiX onClick={() => setToggle(false)} /> }
        
        {
          toggle && (
            <div
            >
              <ul>
              {['about me', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <div />
                  <a href={`#${item}`} onClick={() => setToggle(false)}> {item}</a>
                </li>
              ))}
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar