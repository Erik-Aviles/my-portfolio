import React from "react";
import { motion } from "framer-motion";
import Skill from "./stylesComponents/Skill";
import Title from "./Title";

const Skills = () => {
  return (
    <>
      <Title title="Habilidades" className="sm:text-4xl md:text-6xl md:mt-32" />
      <div
        className="w-full h-[80vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark
           dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        <Skill name="HTML" y="-8vw" x="-12vw" />
        <Skill name="CSS" y="-4vw" x="10vw" />
        <Skill name="Javascript" y="-2vw" x="-28vw" />
        <Skill name="ReactJS" y="8vw" x="-5vw" />
        <Skill name="Diseño Web" y="-18vw" x="-24vw" />
        <Skill name="Tailwind CSS" y="-15vw" x="18vw" />
        <Skill name="Bootstrap" y="18vw" x="-20vw" />
        <Skill name="Otro1" y="10vw" x="30vw" />
        <Skill name="Otro2" y="-2vw" x="27vw" />
        <Skill name="Otro3" y="12vw" x="12vw" />
      </div>
    </>
  );
};

export default Skills;
