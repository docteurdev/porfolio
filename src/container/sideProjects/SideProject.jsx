import React, { useState, useEffect } from "react";
// import './SideProject.scss';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const SideProjects = [
  {
    tag: "web app",
    title: "Coisa",
    projects: [
      { 
        compagnie:'coisa',
        image: images.coisa,
        name: "web site",
        description: "Coisa solution web site",
        website: "https://coisa.io/site/",
        git: "",
        technos:["Bootstrap"]
      },
      {
        compagnie:'coisa',
        image: images.oronia,
        name: "Oronia",
        description:
          "Plateforme de mise en relation entre freelance IT et entreprise IT",
        website: "https://coisa.io/site/",
        git: "",
        technos:["Vue js", "VueX", "Bootstrap",]
      },
    ],
  },
  //   {
  //     tag: "web app",
  //     title: "Oronia",
  //     image: images.oronia,
  //     name: "Oronia",
  //     description: "Freelacing plateform",
  //     website: "https://oronia.coisa.io/",
  //     git: "",
  //   },
  {
    tag: "web app",
    title: "Cst",
    projects: [
      { 
        
        compagnie:'Cst',
        image: images.cst,
        name: "Cst",
        description: "Cst web site ",
        website: "http://www.cst.ci/",
        git: "",
        technos:[ "Bootstrap",]

      },
      {
        compagnie:'Cst',
        image: images.cst,
        name: "Cst",
        description: "Cst app web ",
        website: "http://www.cst.ci/",
        git: "",
        technos:[]

      },
    ],
  },
  // {
  //   tag: "mobile app",
  //   title:"Mobile app",
  //   image: images.mobile,
  //   name: "Roqya mobile app",
  //   description:"Roqya ong Coran guerrit ci client app",
  // },
  // { title: "App mobile",
  //   tag: "mobile app",
  //   image: images.bolt,
  //   name: "Couture",
  //   description: "App dédiée aux couturier"
  // },
//   {
//     title: "Digital Business Card",
//     tag: "mobile app",
//     image: images.dbc,
//     name: "Digital Business Card",
//     description: "génère des cartes de visite ",
//   },
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
    <div className="bg-white h-[100vh]">

    <div className="bg-white md:w-9/12 mx-auto h-[100vh] px-6 p-[5rem]">
      <h2 className="head-text mb-[4rem]">
        Section de <span>Projets personnels </span>
      </h2>
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <div className="w-full md:w-1/6">
            <ul
              className="flex justify-center  md:flex-col"
            >
          {SideProjects.map((item, index) => (
              <li 
                style={{
                    background: item.title.toLocaleLowerCase() === SideProjectsFiltered[0].compagnie.toLocaleLowerCase()? '#313bac': null, 
                    color: item.title.toLocaleLowerCase() === SideProjectsFiltered[0].compagnie.toLocaleLowerCase()? '#fff': null, 
                }}
               key={index} onClick={() => {
                setanimaCard({opacity:[0,1, 0], x:-100})
                setTimeout(() =>{
                setanimaCard({opacity: 1, x:0})

                }, 700)
                setSideProjectsFiltered(item.projects)
            }}
                className="font-sembold text-sm text- cursor-pointer  my-4 px-4 py-1 border-2 transition-all hover:border-slate-400 rounded-md"
              >
                {item.title}
              </li>
          ))}
          </ul>
        </div>
        <motion.div
          className=" overflow-hidden pl-5 w-full md:w-5/6"
          animate={animaCard}
        >
          {SideProjectsFiltered? SideProjectsFiltered.map((SideProject, index) => (
            <motion.div
            initial={{opacity:0, x: -100}}
            whileInView={animaCard}
            transition={{ duration: 0.7, delayChildren: 0.5 }} 
            className=""
             key={index}>
              <div className="">
                <img src={SideProject.image} alt={SideProject.name} className="w-[60px] h-[60px] object-contain" />

                {/* <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className=""
                >
                  {SideProject.website && (
                    <a href={SideProject.website} rel="noreferre">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0, 1] }}
                        transition={{ duration: 0.25 }}
                         className="app__flex"
                      >
                        <AiFillEye /> 
                      </motion.div>
                    </a>
                  )}

                  {SideProject.git && (
                    <a href={SideProject.git} rel="noreferre">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0, 1] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  )}
                </motion.div> */}
              </div>

              <div className="">
                {/* <h4 className="bold-text"> {SideProject.title} </h4> */}
                <p className="p-text mt-0">
                  {" "}
                  {SideProject.description}{" "}
                </p>

                <div className="mt-2 pb-3">
                <div className="font-semibold text-sm mb-1"> Technos { SideProject.technos.length>1 ?' utilisées':'utilisée'} </div>
                 
                 {SideProject.technos?.map((techno, index) => <span style={{marginLeft: index === 0? 0: null}}  key={index} className='text-[13px] font-normal bg-[#313bac] text-white px-3 py-1 rounded-md mx-4' > {techno} </span> )}
                </div>
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
//  AppWrap(MotionWrap(SideProject, "app__SideProjects"), "bg-white");
