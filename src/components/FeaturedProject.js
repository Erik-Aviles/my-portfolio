import Link from 'next/link'
import { GithubIcon } from './Icons'
import { motion } from 'framer-motion'

const FramerImage = motion.img

export const FeaturedProject = ({
  type,
  title,
  summary,
  src,
  link,
  github
}) => {
  return (
    <article
      className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid dark:bg-black border-dark  shadow-2xl p-12  dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl
      xs:rounded-br-3xl xs:p-4'
    >
      <figure className='w-1/2 overflow-hidden rounded-lg lg:w-full flex flex-col items-center space-y-4'>
        <FramerImage
          loading='lazy'
          src={src}
          alt={title}
          className='w-full h-auto cursor-pointer'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority='true'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
        <figcaption className='text-center text-sm text-gray-400'>
          Vista principal de la web. {title}
        </figcaption>
      </figure>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base capitalize'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon className='' />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 bg-dark rounded-lg text-light
              p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:text-dark
            dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:px-4 sm:text-base'
          >
            Visitar sitio
          </Link>
        </div>
      </div>
    </article>
  )
}
