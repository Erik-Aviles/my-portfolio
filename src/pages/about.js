import AnimatedText from "@/components/stylesComponents/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profileWomen from "../../public/images/profile/profile-2.png";
import AnimatedNumber from "@/components/stylesComponents/AnimatedNumber";
import Skills from "@/components/Skills";

const historicalData = [
  { id: 1, description: "Clientes satisfehos", time: 5 },
  { id: 2, description: "Proyectos completados", time: 7 },
  { id: 3, description: "Año de experiencia", time: 2 },
];

const myBiografy = [
  {
    id: 1,
    paragraph:
      "Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.",
  },
  {
    id: 2,
    paragraph:
      "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
  },
  {
    id: 3,
    paragraph:
      "Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.",
  },
];

export default function about() {
  return (
    <>
      <Head>
        <title>Erika | Sobre mi</title>
        <meta name="description" content="Informacion personal" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="Passion Fuels Purpose! " className="mb-16" />

          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biografia
              </h2>
              {myBiografy.map((item) => (
                <p className="font-medium mb-4">{item.paragraph}</p>
              ))}
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profileWomen}
                alt="ErikAviles"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              {historicalData.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col items-end justify-center"
                >
                  <span className="inline-block text-5xl font-bold">
                    <AnimatedNumber value={data.time} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75">
                    {data.description}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
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
