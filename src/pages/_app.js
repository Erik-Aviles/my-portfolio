import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ActionsProvider } from '@/context/actionsProvider'

function App ({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>
      <ActionsProvider>
        <Header />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </ActionsProvider>
    </>
  )
}

export default App
