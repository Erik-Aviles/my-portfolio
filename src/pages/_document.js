import { Html, Head, Main, NextScript } from 'next/document'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

export default function Document () {
  const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont'
  })

  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Desarrollo web realizado por Erika Aviles, fundadora de BETIMES COMPANY'
        />
        <link rel='icon' href='icons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='icons/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
          {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
        </Script>
      </Head>
      <body
        className={`${montserrat.variable} bg-background dark:bg-dark w-full min-h-screen`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
