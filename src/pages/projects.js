import Layout from "@/components/Layout";
import AnimatedText from "@/components/stylesComponents/AnimatedText";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { FeaturedProject, Project } from "@/components/projectsComponents";
import Testimonials from "@/components/Testimonials";
import { projectsInfo } from "@/resources/projectsInfo";
import { SubTitle } from "@/components/Titles";

const projects = () => {
  return (
    <>
      <Head>
        <title>Dev-Erika | Proyectos</title>
        <meta
          name="description"
          content="Proyectos realizados a lo largo de mi carrera profesional"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full p-8 flex flex-col gap-7 bg-light dark:bg-dark items-center">
        <AnimatedText
          text="¡La imaginación triunfa sobre el conocimiento!"
          className=""
        />
        <section className="w-full flex flex-col md:gap-4 gap-8">
          <SubTitle title="Proyectos destacados" />
          <div className="flex flex-col md:gap-4 gap-8 items-center max-w-4xl mx-auto bg-light dark:bg-dark">
            {projectsInfo.map(({ type, title, summary, img, link, github }) => (
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
        <Testimonials />
      </main>
    </>
  );
};

export default projects;

<div className="flex md:flex-col gap-24">
  <Project
    type="Rastreo satelital"
    title="DailyGPS"
    src="images/projects/dailygps.png"
    link="http://44.213.30.132:8082/"
    github="https://github.com/Erik-Aviles/modern"
  />
  <Project
    type="Ecommerce"
    title="Bodero Racing Development"
    src="images/projects/bodero-racing-development.png"
    link="/"
    github="https://github.com/Erik-Aviles/bodero-store-front"
  />
</div>;
