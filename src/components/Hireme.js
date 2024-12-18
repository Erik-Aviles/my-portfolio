import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const Hireme = ({ className = '' }) => {
  const phone = '963616800'
  const message =
    'Hola, soy [escribir nombre], me interesa comunicarme contigo para hablar sobre [escribir motivo]'
  return (
    <div
      className={` flex justify-center items-center overflow-hidden ${className}`}
    >
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className='fill-black animate-spin-slow dark:fill-primaryDark' />
        <Link
          href={`https://api.whatsapp.com/send/?phone=593${phone}&text=${message}&type=phone_number&app_absent=1`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark  text-light text-sm shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-black dark:bg-black dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-black dark:hover:border-primaryDark dark:border-primaryDark md:w-12 md:h-12 md:text-[8px]'
        >
          Contratar
        </Link>
      </div>
    </div>
  )
}
export default Hireme

//  md:block
