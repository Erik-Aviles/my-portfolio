import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark
       text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light
       dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:my-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-primary xs:dark:text-primaryDark xs:font-bold"
      whileHover={{ scale: 1.05 }}
      inicial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
export default Skill;
