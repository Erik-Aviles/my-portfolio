import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/stylesComponents/AnimatedText'
import Link from 'next/link'
import { WhatsappIcon } from '@/components/Icons'

export default function ContactPage () {
  const phone = '9636168800'
  return (
    <>
      <Head>
        <title>Dev-Erika | Contactos</title>
        <meta
          name='description'
          content='Redes sociales donde puedes segirme y observar mi trayectoria'
        />
      </Head>
      <TransitionEffect />
      <Layout className='p-8 flex-col gap-8 min-h-screen'>
        <AnimatedText
          text='¡La imaginación triunfa sobre el conocimiento!'
          className='h-min'
        />
        <section className='flex-grow justify-center flex-row xs:flex-col-reverse items-center w-full flex gap-14 px-2'>
          <div className='w-full flex flex-row md:flex-col gap-10'>
            <div>
              <p className='uppercase text-black dark:text-white'>dirección</p>
              <span className='italic text-xs capitalize'>
                av. jaime roldos aguilera, quevedo, los ríos, Ecuador
              </span>
            </div>
            <div>
              <p className='uppercase text-black dark:text-white'>e-mail</p>
              <span className='italic text-xs'>eriavicor34@gmail.com</span>
            </div>
          </div>
          <button
            className='w-min h-min flex gap-2 items-center bg-transparent text-black p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-dark hover:text-white border border-solid border-light hover:border-dark dark:text-white dark:hover:border-[#00A400] dark:hover:text-[#00A400] md:p-2 xs:px-2 md:px-4 md:text-base '
            title='Contactárme por Whatsapp'
          >
            <Link
              href={`https://api.whatsapp.com/send/?phone=593${phone}&text=Hola, me interesa comunicarme contigo.&type=phone_number&app_absent=1`}
              target='_blank'
              rel='noopener noreferrer'
              className='whitespace-nowrap uppercase'
            >
              contáctame
            </Link>
            <WhatsappIcon className='ml-1' />
          </button>
        </section>
      </Layout>
    </>
  )
}
