import Layout from "@/components/Layout";
import AnimatedText from "@/components/stylesComponents/AnimatedText";
import Head from "next/head";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Projetc from "@/components/Projetc";

const FeatureProjects = [
  {
    type: "Feature Project",
    title: "Crypto Screener Application",
    summary:
      "A feature-rich Crypto Screener App using React Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    img: { project1 },
    link: "/",
    github: "/",
  },
];

const projects = () => {
  return (
    <>
      <Head>
        <title>Erika | Proyectos</title>
        <meta
          name="description"
          content="Proyectos realizados a lo largo de mi carrera profesional"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center mb-16">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-24">
            <div className="col-span-12">
              {FeatureProjects.map((item, index) => (
                <Projetc
                  key={`id${index}`}
                  title={item.title}
                  img={project1}
                  summary={item.summary}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              ))}
            </div>
            <div className="col-span-6">
              {FeatureProjects.map((item, index) => (
                <Projetc
                  key={`id${index}`}
                  title={item.title}
                  img={project1}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              ))}
            </div>
            <div className="col-span-6">
              {FeatureProjects.map((item, index) => (
                <Projetc
                  key={`id${index}`}
                  title={item.title}
                  img={project1}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              ))}
            </div>
            <div className="col-span-12">
              {FeatureProjects.map((item, index) => (
                <Projetc
                  key={`id${index}`}
                  title={item.title}
                  img={project1}
                  summary={item.summary}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              ))}
            </div>
            <div className="col-span-6">
              {FeatureProjects.map((item, index) => (
                <Projetc
                  key={`id${index}`}
                  title={item.title}
                  img={project1}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              ))}
            </div>
            <div className="col-span-6">
              {FeatureProjects.map((item, index) => (
                <Projetc
                  key={`id${index}`}
                  title={item.title}
                  img={project1}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
