import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Desarrollo web realizado por Erika Aviles, fundadora de BETIMES COMPANY'
        />
        <meta name='apple-mobile-web-app-title' content='Erika Aviles' />
        <link
          rel='icon'
          type='image/png'
          href='/icons/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/icons/favicon.svg' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
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
      <body className='font-mono bg-background dark:bg-dark w-full min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
