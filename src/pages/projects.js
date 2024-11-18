import Head from "next/head";
import Layout from "@/components/Layout";
import Projetcs from "@/components/Projetcs";
import Testimonials from "@/components/Testimonials";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/stylesComponents/AnimatedText";

export default function ProjectsPage() {
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
      <Layout className="p-8 flex-col gap-8">
        <AnimatedText
          text="¡cada proyecto es una oportunidad de innovar y sorprender!"
          className=""
        />
        <Projetcs />
        <Testimonials />
      </Layout>
    </>
  );
}
