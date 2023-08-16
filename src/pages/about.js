import AnimatedText from "@/components/stylesComponents/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profileWomen from "../../public/images/profile/profile-2.png";
import AnimatedNumber from "@/components/stylesComponents/AnimatedNumber";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const historicalData = [
  { id: 1, description: "Clientes satisfechos", time: 5 },
  { id: 2, description: "Proyectos completados", time: 7 },
  { id: 3, description: "Año de experiencia", time: 2 },
];

const myBiografy = [
  {
    id: 1,
    paragraph:
      "Hola, soy Erika Avilés, una desarrolladora web y diseñadora de UI / UX con una pasión por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con 2 años de experiencia en el campo. Siempre estoy buscando formas nuevas e innovadoras de dar vida a las visiones de mis clientes.",
  },
  {
    id: 2,
    paragraph:
      "Creo que el diseño es algo más que hacer que las cosas se vean bonitas: se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.",
  },
  {
    id: 3,
    paragraph:
      "Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, aporto mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero tener la oportunidad de aportar mis habilidades y pasión a su próximo proyecto.",
  },
];

export default function about() {
  return (
    <>
      <Head>
        <title>Erika | Sobre mi</title>
        <meta name="description" content="Informacion personal" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="¡La pasión alimenta el propósito!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografía
              </h2>
              {myBiografy.map((item, index) => (
                <p key={`id-${index}`} className="font-medium mb-4">
                  {item.paragraph}
                </p>
              ))}
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profileWomen}
                alt="ErikAviles"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col justify-between xl:col-span-8 xl:flex-row md:order-3">
              {historicalData.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col items-end justify-center xl:items-center "
                >
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumber value={data.time} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {data.description}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

// const aboutData = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Web Development',
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaWordpress />,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: 'awards',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'UX/UI Designer - XYZ Company',
//         stage: '2012 - 2023',
//       },
//       {
//         title: 'Web Developer - ABC Agency',
//         stage: '2010 - 2012',
//       },
//       {
//         title: 'Intern - DEF Corporation',
//         stage: '2008 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Web Development - ABC University, LA, CA',
//         stage: '2011',
//       },
//       {
//         title: 'Computer Science Diploma - AV Technical Institute',
//         stage: '2009',
//       },
//       {
//         title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
//         stage: '2006',
//       },
//     ],
//   },
// ];
