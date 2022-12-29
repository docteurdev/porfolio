import './skills.scss';
import React,{useState } from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from 'framer-motion';
import { AppWrap,MotionWrap } from '../../wrapper'
import {images} from "../../constants"
import ReactTooltip from 'react-tooltip';

const skills= [
  {

    date: "2022",
    name: "React",
    logo: images.react,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend Developper frontend Developper frontend"
  },
  { 
    date: "2022",
    name: "React native",
    logo: images.reactNative,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },
  { 
    date: "2022",
    name:"Vue js",
    logo: images.vue,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },
  {
    date: "2022",
    name: "Sass",
    logo: images.sass,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },
  {  
    date: "2022",
    name: "Tailwind",
    logo: images.tailwind,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },

  { 
    date: "2022",
    name: "Typescript",
    logo: images.typescript,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },
  { 
    date: "2022",
    name: "Git",
    logo: images.git,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },
  { 
    date: "2022",
    name: "Bootstrap",
    logo: images.bootstrap,
    color: "#edf2f8",
    description: "lor dis dèh",
    function: "Developper frontend"
  },
  
]

const experiences = [
  { 
    date: "2022",
    name: "Coisa solutions",
    description: "développement du site internet de coisa solutions",
  },
  { 
    date: "2021",
    name: "Cst",
    description: "Création du site internet de cst.ci",
  },
  { 
    date: "2020",
    name: "Batison",
    description: "développement d'interfaces ",
  }
]

function Skills() {
  return (
    <>
    <h2 className="head-text">Compétences & Expériences</h2>

    <div className="app__sklls-container">
      <motion.div className="app__skills-list">
        {
          skills.map((skill, index) =>(
            <motion.div 
             whileInView={{ opacity: [0,1]}}
             transition={{duration: 0.5}}
             key={index}
             className="app__skills-item app__flex"
             >
              <div className="app__flex" style={{backgroundColor: skill.color}} >
                 <img src={skill.logo} alt={skill.name} />
              </div>
              <p className="p-text"> {skill.name} </p>
            </motion.div>
          ))
        }
      </motion.div>
      <motion.div className="app__skills-exp">
        {
          experiences.map((exp, index) =>(
            <>
             <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-exp-works"
              data-tip
              data-for={exp.name}
              key={index}
             > 
              <h4 className="bold-text">{exp.date}</h4>
              <div>
                <h4 className="bold-text">{exp.name}</h4>
                <p className="p-text"> {exp.description} </p>
              </div>
             </motion.div>
             {/* <ReactTooltip
              id={exp.name}
              effect="solid"
              arrowColor="#fff"
              className="skills-tooltip"
             >
              {exp.description}
             </ReactTooltip> */}
            </>
          ))
        }
      </motion.div>
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
   "competences",
   "app__whitebg"
   )