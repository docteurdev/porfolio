import React, { useState, useEffect } from "react";
// import './SideProject.scss';
import { AiFillEye, AiFillGithub, } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { IconContext } from "react-icons";
import { FaEye } from "react-icons/fa";

const SideProjects = [
  {
    tag: "web app",
    title: "roqya",
    projects: [
      { 
        compagnie:'roqya',
        image: images.roqyaci,
        name: "Application web",
        description: "Foundation web application",
        website: "",
        git: "https://github.com/docteurdev/landing-immobilier.git",
        technos:["React js","Tailwind css", "Motion","Typescript"]
      },
      {
        compagnie:'roqya',
        image: images.roqyaci,
        name: "roqya dashboard",
        description:"Allowing to the health organization to manage thier patients",
        website: "https://roqya-front.vercel.app/",
        git: "https://github.com/docteurdev/roqya/tree/main/frontend",
        technos:["React js", "Readux", "Tailwind css", "Express js",]
      },
      {
        compagnie:'roqya',
        image: images.roqyaci,
        name: "Application mobile",
        description:"Allowing patients to track their appointments",
        website: "",
        git: "https://github.com/docteurdev/roqya/tree/main/roqya-client-app",
        technos:["React native","Typescript", "Readux", "Styled component",]
      },
      
    ],
  },
  
  {
    tag: "web app",
    title: "Projects",
    projects: [
      { 
        
        compagnie:'Projects',
        image: images.dbc,
        name: "Couture",
        description: " Mobile application, allowing designers to take measurements, set appointments for their customers",
        website: "",
        git: "https://gitlab.com/docteurdev/coutureapp",
        technos:["React native","Redux",]

      },
      {
        compagnie:'Projects',
        image: images.dbc,
        name: "Digital business Card",
        description: "It generate visit card",
        website: "",
        git: "https://gitlab.com/docteurdev/digitalcard",
        technos:["React native","Redux",]

      },
    ],
  },
];

function SideProject() {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animaCard, setanimaCard] = useState({opacity: 1, x:0});
  const [SideProjectsFiltered, setSideProjectsFiltered] = useState(SideProjects[0].projects);

  const handleSideProjectFilter = (item) => {
    setactiveFilter(item);
    setanimaCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setanimaCard({ y: 0, opacity: 1 });
      if (item === "Apps") {
        setSideProjectsFiltered(SideProjects);
      } else {
        setSideProjectsFiltered(
          SideProjects.filter((SideProject) =>
            SideProject.tag.toLowerCase().includes(item.toLowerCase())
          )
        );
      }
    }, 500);

    // let filtreSideProject =  SideProjects.filter((SideProject) =>  SideProject.tag.toLowerCase().includes(item.toLowerCase()) )
    // setSideProjectsFiltered(filtreSideProject)
  };

  return (
    <div className="bg-slate-100 w-full  md:h-[100vh]">

    <div className="bg-slate-100 md:w-11/12 mx-auto h-full md:h-[100vh] px-6 p-[5rem]">
      <h2 className="head-text mb-[4rem]">
         <span>Side</span> Projects
      </h2>
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <div className="w-full md:w-1/6">
            <ul
              className="flex justify-center  md:flex-col"
            >
          {SideProjects.map((item, index) => (
              <li 
                style={{
                    border: item.title.toLocaleLowerCase() === SideProjectsFiltered[0].compagnie.toLocaleLowerCase()? '2px solid #313bac': null, 
                    color: item.title.toLocaleLowerCase() === SideProjectsFiltered[0].compagnie.toLocaleLowerCase()? '#313bac': null, 
                }}
               key={index} onClick={() => {
                setanimaCard({opacity:[0, 0], x:-100})
                setTimeout(() =>{
                setanimaCard({opacity: 1, x:0})

                }, 700)
                setSideProjectsFiltered(item.projects)
            }}
                className="font-sembold text-sm text- cursor-pointer  my-2 px-4 py-1 border-2 transition-all hover:border-[#313bac] rounded-md"
              >
                {item.title}
              </li>
          ))}
          </ul>
        </div>
        <motion.div
          className=" flex flex-wrap gap-0 overflow-hidden p-5 w-full md:w-5/6"
          animate={animaCard}
        >
          {SideProjectsFiltered? SideProjectsFiltered.map((SideProject, index) => (
            <motion.div
            initial={{opacity:0, x: -100}}
            whileInView={animaCard}
            transition={{ duration: 0.7, delayChildren: 0.5 }} 
            className="w-full rounded-md md:w-auto shadow-md p-2"
             key={index}>
              <div className="">
                <img src={SideProject.image} alt={SideProject.name} className="w-[60px] h-[60px] object-contain" />
              </div>

              <div className="">
                {/* <h4 className="bold-text"> {SideProject.title} </h4> */}
                <p className="p-text mt-0">
                  {" "}
                  {SideProject.description}{" "}
                </p>

                <div className="flex items-center flex-col md:flex-row gap-1 mt-2 pb-3">
                <div className="font-semibold text-sm mb-1">{ SideProject.technos.length>1 ?'Technos':'Techno'} used</div>
                <div className="flex flex-wrap gap-1">
                 {SideProject.technos?.map((techno, index) =>
                  <span style={{marginLeft: index === 0? 0: null}}  key={index} className='w-[100px] h-[30px] md:w-auto text-[13px] font-normal bg-[#313bac] text-white px-3 py-1 rounded-md' > {techno} </span> )
                 }
                </div>
                </div>

                {/* {SideProject.map((project, index) => */}
                  
                  <div className="flex gap-4 items-center flex-wrap">
                    <p  className="flex gap-2  p-text mt-0">
                      <IconContext.Provider value={{className:"text-lg"}} >
                        <AiFillGithub/>
                      </IconContext.Provider>
                      <a className="text-[12px] transition-colors text-[#8892b0] hover:text-[#313bac]" href={SideProject.git}>Open the repos {SideProject.name} </a>
                    </p>

                    {!SideProject.website==''?
                     <p  className="flex gap-2  p-text mt-0">
                      <IconContext.Provider value={{className:"text-lg"}} >
                        <FaEye/>
                      </IconContext.Provider>
                      <a className="text-[12px] transition-colors text-[#8892b0] hover:text-[#313bac]" href={SideProject.website}> View {SideProject.name} </a>
                    </p>: null}
                  </div>
                  {/* )
                 } */}

              </div>
            </motion.div>
          )): null}
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default SideProject
 AppWrap(MotionWrap(SideProject, "app__SideProjects"), "bg-white");
