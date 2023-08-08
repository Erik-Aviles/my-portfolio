import React, { useRef } from "react";
import Title from "./Title";
import Details from "./Details";
import { motion, useScroll } from "framer-motion";

const educationData = [
  {
    type: "Especializacion Desarrollo Web",
    time: "2020-2023",
    place: "Platzy",
    info: "wjfdwjfn wjndfkjen weikdekjm weikdfkejm wdfmjkwemfdj",
  },
  {
    type: "Ingenieria en Informatica y Ciencias Computacionales",
    time: "2015-2020",
    place: "Universidad Tecnica de Cotopaxi",
    info: "wjfdwjfn wjndfkjen weikdekjm weikdfkejm wdfmjkwemfdj",
  },
  {
    type: "Bachiller en Informatica",
    time: "2011-2014",
    place: "Unidad Educativa Nicolas Infante Diaz",
    info: "wjfdwjfn wjndfkjen weikdekjm weikdfkejm wdfmjkwemfdj",
  },
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-24">
      <Title title="Educacion" />
      <div ref={ref} className="w-[75%] mt-8 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-screen bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
    </div>
  );
};

export default Education;
