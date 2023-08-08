import React, { useRef } from "react";
import Title from "./Title";
import Details from "./Details";
import { motion, useScroll } from "framer-motion";

const experienceData = [
  {
    position: "Diseñador grafico",
    company: "Smith",
    companyLink: "www.Anne.com",
    time: "2022-Present",
    place: "Guayaquil",
    info: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization",
  },
  {
    position: "Ingeniero de Software",
    company: "Anne ",
    companyLink: "www.Anne.com",
    time: "2020-2021",
    place: "Quevedo",
    info: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature",
  },
  {
    position: "Ingeniero de datos",
    company: "Google",
    companyLink: "www.Google.com",
    time: "Summer 2021 ",
    place: "Machala",
    info: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component",
  },
  {
    position: "Supervisor",
    company: "Seattle, WA.",
    companyLink: "www.Seattle.com",
    time: "Summer 2019 ",
    place: "Machala",
    info: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
  },
  {
    position: "Colaborador en UX",
    company: "GrapUL",
    companyLink: "www.GrapUL.com",
    time: "Fall 2018t",
    place: "Quito",
    info: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-24">
      <Title title="Experience" />
      <div ref={ref} className="w-[75%] mt-8 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experienceData.map((item, index) => (
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
    </div>
  );
};

export default Experience;
