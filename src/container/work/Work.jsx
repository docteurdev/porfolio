import React, { useState, useEffect } from 'react'
import './work.scss';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper'
import {images} from "../../constants"

const works = [
  { 
    tag: "Site web",
    title:"Coisa",
    image: images.coisa,
    name: "Coisa solution web site",
    description:"Web site of the company",
    website:"", // "https://coisa.io/site/",
    git: ""
  },
  { 
    tag: "web app",
    title:"Oronia",
    image: images.oronia,
    name: "Oronia",
    description:"It makes relation between  IT freelancers and IT companies",
    website: "",//"https://oronia.coisa.io/",
    git: ""
  },
  { 
    tag: "web app",
    title:"Meewa",
    image: images.meewa,
    name: "Meewa",
    description:" web and mobile application school and parents ",
    website:"", //"https://oronia.coisa.io/",
    git: ""
  },
  { 
    tag: "web Site ",
    title:"Meewa",
    image: images.meewa,
    name: "Meewa",
    description:"Web site of the company",
    website:"", // "https://oronia.coisa.io/",
    git: ""
  },
  { 
    tag: "web Site ",
    title:"Cst",
    image: images.cst,
    name: "Cst",
    description:"Web site of the company",
    website:"",// "http://www.cst.ci/",
    git: ""
  },
  // { title: "Digital Business Card",
  //   tag: "mobile app",
  //   image: images.dbc,
  //   name: "Digital Business Card",
  //   description: "génère des cartes de visite "
  // }
]

function Work() {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animaCard, setanimaCard] = useState({y: 0, opacity: 1});
  const [worksFiltered, setworksFiltered] = useState(works)


  const handleWorkFilter = (item) =>{
    setactiveFilter(item)
      setanimaCard({y: 100, opacity: 0})

      setTimeout(() =>{
      setanimaCard({y: 0, opacity: 1})
        if(item === "All"){
          setworksFiltered(works)
        }else{
          setworksFiltered( works.filter((work) => work.tag.toLowerCase().includes(item.toLowerCase())) )
        }

      }, 500)

    // let filtreWork =  works.filter((work) =>  work.tag.toLowerCase().includes(item.toLowerCase()) )
    // setworksFiltered(filtreWork)
  }

  return (
    <>
      <h2 className="head-text"> <span>Companies </span>Projects</h2>

      <div className="app__work-filter">
        {
        ['Web App', 'Web Site','All'].map((item, index) =>(
          <div
           className={`app__work-filter-item app__flex p-text ${activeFilter === item? 'item-active' : '' }`}
           key={index}
           onClick={() => handleWorkFilter(item) }
          >
            {item}
          </div>
        ))
        }
      </div>
      <motion.div
       
       className="app__work-portfolio"
       animate={animaCard}
       transition={{duration: 0.5, delayChildren: 0.5}}
       >
         {
          worksFiltered.map((work, index) =>(
            
            <div
             className="app__work-item app__flex"
             flex={index}
            >
              <div className="app__work-img app__flex">
                <img src= {work.image} alt={work.name} />

                <motion.div
                 whileHover={{ opacity: [0, 1] }}
                 transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5 }}
                 className="app__work-hov app__flex"
                >
                 { work.website && <a href={work.website} rel ="noreferre">
                    <motion.div
                    whileInView={{ scale :[0, 1]}}
                     whileHover={{ scale: [1, 0, 1] }}
                     transition={{ duration: 0.25,}}
                     className="app__flex" 
                    >
                      <AiFillEye/>
                    </motion.div>
                  </a>}

                  {work.git && <a href={work.git}  rel ="noreferre">
                    <motion.div
                    whileInView={{ scale :[0, 1]}}
                     whileHover={{ scale: [1, 0, 1] }}
                     transition={{ duration: 0.25,}}
                     className="app__flex" 
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text"> {work.title} </h4>
                <p className="p-text text-justify" style={{marginTop: 10}} > {work.description} </p>

                <div className="app__work-tag app__flex">
                  <div className="p-text">  </div>
                </div>
              </div>
            </div>
          ))
         }
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  "projects"
)