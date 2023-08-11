import React from "react";
import { motion } from "framer-motion";

const AnimatedSkill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark
       text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light
       dark:text-dark dark:shadow-light"
      whileHover={{ scale: 1.05 }}
      inicial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
export default AnimatedSkill;
