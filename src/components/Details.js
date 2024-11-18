import React, { useRef } from "react";
import AnimatedLiIcon from "./stylesComponents/AnimatedLiIcon";
import { motion } from "framer-motion";

const Details = ({ name, time, place, info, company, companyLink }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AnimatedLiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize dark:text-light font-bold text-2xl sm:text-xl xs:text-lg">
          {name}&nbsp;
          {company && (
            <a
              href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
export default Details;
