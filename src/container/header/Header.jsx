import "./header.scss";
import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    // scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easInOut",
    },
  },
};
function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        // whileInView={{ x: [-100, 0], option: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-bagde">
          <div className="badge-cmp app__flex">
            <span>👋🏽</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello je suis</p>
              {/* <h1 className="header-text">Adje</h1> */}
            </div>
          </div>
          {/* <div className="tag-cmp app__flex">
            <p className="p-text"> Web & Mobile  </p>
            <p className="p-text"> Developpeur Frontend </p>

          </div> */}
          <div className="title-anim-bx">
            <h1 className="header-text names title-anim">Adje oumar </h1>
          </div>
          <div className="title-anim-bx">
            <h1 className="header-text title-anim2 ">développeur front</h1>
          </div>
          <div className="title-anim-bx">
            <p className="p-text title-anim3 text-red-500">
              Passionné par la conception et le développement de projets
              digitaux, je me suis tout naturellement tourné vers une carrière
              de développeur web après une formation en Comptabilité et Gestion
              d’entreprise. Aussi je serai ravi de rejoindre votre équipe,
              dynamique et jeune, en tant que Développeur d’applications Web et
              Mobile.{" "}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alert="pofile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.tailwind].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`index${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
      <motion.div></motion.div>
    </div>
  );
}

export default AppWrap(Header, "acceuil");
