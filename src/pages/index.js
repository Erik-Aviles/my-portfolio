import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '@/components/Layout'
import Hireme from '@/components/Hireme'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import girlComputer from '../../public/vectores/girlComputer.jpg'
import AnimatedText from '@/components/stylesComponents/AnimatedText'

export default function HomePage () {
  return (
    <>
      <Head>
        <title>Dev-Erika | Soluciones Web Innovadoras</title>
        <meta
          name='description'
          content='Descubre Dev-Erika: tu aliado en desarrollo web, diseño creativo y soluciones digitales personalizadas para impulsar tu negocio al siguiente nivel.'
        />
      </Head>
      <TransitionEffect />
      <Layout>
        <section className='flex items-center bg-white dark:bg-dark my-10 w-full lg:flex-col'>
          <div className='w-1/2 md:w-full'>
            <Image
              src={girlComputer}
              alt='A girl'
              className='w-full h-auto   md:inline-block dark:rounded-tr-[29%] '
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center p-[20px] lg:w-full lg:text-center'>
            <AnimatedText
              text='Convertir la visión en realidad con código y diseño'
              className='!text-left 2xl:!text-6xl xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:text-2xl dark:text-primaryDark'
            />
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs '>
              Como desarrolladora full-stack, me dedico a convertir ideas en
              aplicaciones web innovadoras. Explore mis últimos proyectos,
              mostrando mi experiencia en React.js y desarrollo web.
            </p>
            <div className='flex items-center gap-1 self-start mt-2 lg:self-center '>
              <Link
                href='/cv-erika_aviles_cortez.pdf'
                target='_black'
                className='flex items-center whitespace-nowrap bg-black text-light p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light dark:hover:border-light dark:hover:text-light dark:hover:bg-dark md:p-2 xs:px-2 md:px-4 md:text-base '
                download
              >
                Descargar CV
                <LinkArrow className='ml-1' />
              </Link>
              <Link
                href='/contacts'
                className='text-lg px-2 font-medium capitalize underline  md:text-sm'
              >
                Contacto
              </Link>
            </div>
          </div>
        </section>
        <Hireme className='fixed left-3 bottom-3 lg:hidden' />
      </Layout>
    </>
  )
}
