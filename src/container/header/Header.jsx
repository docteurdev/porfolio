import './header.scss';
import React from 'react';
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView:{
    // scale: [0, 1],
     opacity:[0, 1],
    transition:{
      duration: 1,
      ease: 'easInOut'
    }
  }
}
function Header() {
  return (
    <div  className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], option: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-bagde">
          <div className="badge-cmp app__flex">
            <span>👋🏽</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello  je suis <a href="exp://192.168.1.133:19000/app?payeToken=pay_01010">OPen App</a></p>
              <h1 className="header-text">Adje</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"> Web & Mobile  </p>
            <p className="p-text"> Developpeur Frontend </p>

          </div>
        </div>
      </motion.div>
      <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration: 0.5, delayChildren: 0.5}}
       className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration: 1, ease: "easeInOut"}}
          src={images.circle}
          alert="pofile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
       
       whileInView={{opacity: [0, 1], scale:[0, 1] }}
       transition={{duration: 1, ease: "easeIn"}}
       className="app__header-circles"
      >
        {
        [images.react, images.redux, images.sass].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`index${index}`} >
            <img src={circle} alt="circle" />
          </div>
        ))
        }
      </motion.div>
      <motion.div>
        
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "acceuil")