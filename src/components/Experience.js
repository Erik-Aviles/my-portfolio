import React, { useRef } from "react";
import Details from "./Details";
import { motion, useScroll } from "framer-motion";
import { experiencedata } from "@/resources/experiencedata";
import { SubTitle } from "./Titles";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="w-full flex flex-col md:gap-4 gap-8">
      <SubTitle title="Experiencia" className="" />
      <div
        ref={ref}
        className="relative flex flex-col md:gap-4 gap-8 items-center max-w-2xl mx-auto bg-light dark:bg-dark"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between">
          {experiencedata.map((item, index) => (
            <Details
              key={`id${index}`}
              name={item.position}
              company={item.company}
              companyLink={item.companyLink}
              time={item.time}
              place={item.place}
              info={item.info}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
