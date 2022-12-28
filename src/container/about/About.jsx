import React,{useState, useEffect} from 'react'
import './about.scss';
import {motion} from "framer-motion"
import {images} from "../../constants";
// import {urlFor, client} from "../../client"
import { AppWrap, MotionWrap } from '../../wrapper';

const abouts = [
  {
    title: "Mobile Developpement",
    description: "Avec React Native",
    image:images.about02
  },
  {
    title: "Web Developpement",
    description: "Avec React js et Vue js",
    image: images.about04
  }
]


function About() {

//  const [abouts, setAbouts] = useState([])

//  useEffect(() =>{
  
//   const query = '*[_type == "abouts"]';

//   client.fetch(query)
//    .then((data) => setAbouts(data) )

//  }, [])

  return (
    <>

     <h2 className="head-text">Développeur <span>Web & Mobile</span><br /><span> </span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about, index) =>(
            <motion.div
             whileInView={{ opacity: 1 }}
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.5, type: 'tween' }}
             className="app__profile-item"
             key={about.title + index}
            >
              <img src={about.image} alt={about.title} />
              <h2 className="bold-text" style={{marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{marginTop: 10}} >
              {about.description}
              </p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
   " ",
   "app__whitebg"
   )