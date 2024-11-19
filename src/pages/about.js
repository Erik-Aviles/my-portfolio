import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import AboutMe from '@/components/AboutMe'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/stylesComponents/AnimatedText'

export default function AboutPage () {
  return (
    <>
      <Head>
        <title>Dev-Erika | Sobre mi</title>
        <meta name='description' content='Informacion personal' />
      </Head>
      <TransitionEffect />
      <Layout className='p-8 flex-col gap-8'>
        <AnimatedText text='¡La pasión alimenta el propósito!' className='' />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </>
  )
}
