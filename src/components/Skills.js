import React from "react";
import { motion } from "framer-motion";
import Skill from "./stylesComponents/AnimatedSkill";
import Title from "./Title";

const Skills = () => {
  return (
    <>
      <Title title="Skills" />
      <div className="w-full h-[80vh] relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        <Skill name="HTML" y="-8vw" x="-12vw" />
        <Skill name="CSS" y="-0vw" x="8vw" />
        <Skill name="Javascript" y="-2vw" x="-28vw" />
        <Skill name="ReactJS" y="6vw" x="-5vw" />
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
