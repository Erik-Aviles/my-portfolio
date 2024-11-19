import betimes from '../../public/images/betimes/betimesCompany.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full px-4 py-8 border-t-2 border-solid border-dark font-medium dark:text-light dark:border-light '>
      <div className='flex flex-col text- items-center gap-3 text-primary dark:text-primaryDark text-2xl '>
        <Image
          className='w-28 shadow-lg rounded-lg overflow-hidden'
          src={betimes}
          alt='Logo de Betimes Company'
        />
        <span className='text-primary dark:text-primaryDark text-center text-xs xl:text-sm px-1'>
          Diseño y Desarrollo Web - © 2022
        </span>
      </div>
    </footer>
  )
}
export default Footer
