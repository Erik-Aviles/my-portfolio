import React, { useRef } from "react";
import Title from "./Title";
import DetailsExperience from "./DetailsExperience";
import { motion, useScroll } from "framer-motion";
import AnimatedLiIcon from "./stylesComponents/AnimatedLiIcon";

const experienceData = [
  {
    position: "Diseñador grafico",
    company: "Smith",
    companyLink: "www.Anne.com",
    time: "2022-Present",
    address: "Guayaquil",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization",
  },
  {
    position: "Ingeniero de Software",
    company: "Anne ",
    companyLink: "www.Anne.com",
    time: "2020-2021",
    address: "Quevedo",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature",
  },
  {
    position: "Ingeniero de datos",
    company: "Google",
    companyLink: "www.Google.com",
    time: "Summer 2021 ",
    address: "Machala",
    work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component",
  },
  {
    position: "Supervisor",
    company: "Seattle, WA.",
    companyLink: "www.Seattle.com",
    time: "Summer 2019 ",
    address: "Machala",
    work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
  },
  {
    position: "Colaborador en UX",
    company: "GrapUL",
    companyLink: "www.GrapUL.com",
    time: "Fall 2018t",
    address: "Quito",
    work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component",
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
            <DetailsExperience
              key={`id${index}`}
              position={item.position}
              company={item.company}
              companyLink={item.companyLink}
              time={item.time}
              address={item.address}
              work={item.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
