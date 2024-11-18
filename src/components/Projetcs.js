import React from "react";
import { FeaturedProject } from "./FeaturedProject";
import { SubTitle } from "./Titles";
import { projectsData } from "@/resources/projectsData";

const Projetcs = () => {
  return (
    <section className="w-full flex flex-col md:gap-4 gap-8">
      <SubTitle title="Proyectos destacados" />
      <div className="flex flex-col md:gap-4 gap-8 items-center max-w-4xl mx-auto">
        {projectsData?.map(({ type, title, summary, img, link, github }) => (
          <FeaturedProject
            key={1}
            type={type}
            title={title}
            summary={summary}
            src={img}
            link={link}
            github={github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projetcs;
