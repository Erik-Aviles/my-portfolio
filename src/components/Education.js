import React, { useRef } from "react";
import Details from "./Details";
import { motion, useScroll } from "framer-motion";
import { SubTitle } from "./Titles";

const educationData = [
  {
    type: "Especialización en el Desarrollo Web Full Stack",
    time: "2020-2023",
    place: "Platzy",
    info: "",
  },
  {
    type: "Ingenieria en Informática y Ciencias Computacionales",
    time: "2015-2020",
    place: "Universidad Técnica de Cotopaxi",
    info: "",
  },
  {
    type: "Bachiller en Informática",
    time: "2011-2014",
    place: "Unidad Educativa Nicolas Infante Diaz",
    info: "",
  },
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="w-full flex flex-col md:gap-4 gap-8 ">
      <SubTitle title="Educación" className="" />
      <div
        ref={ref}
        className="relative flex flex-col md:gap-4 gap-8 items-center max-w-2xl mx-auto bg-light dark:bg-dark"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-[90vh] bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educationData.map((item, index) => (
            <Details
              key={`id${index}`}
              name={item.type}
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

export default Education;
