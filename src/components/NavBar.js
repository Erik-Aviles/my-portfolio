import React from 'react'
import Logo from './Logo'
import { motion } from 'framer-motion'
import CustomLink from './CustomLink'
import DarkMode from './DarkMode'
import CustomMobileLink from './CustomMobileLink'
import { linksData } from '@/resources/linksData'
import { socialMediaData } from '@/resources/socialMediaData'

const NavBar = ({ changeNavbar, navbar }) => {
  return (
    <>
      <div className='w-full flex justify-between items-center lg:hidden '>
        <nav className='flex items-center justify-between gap-4 text-sm'>
          {linksData.map((item, index) => (
            <CustomLink
              key={`id${index}${item.title}`}
              title={item.title}
              href={item.href}
              className={item.className}
            />
          ))}
        </nav>
        <Logo />
        <nav className='flex items-center justify-center gap-4'>
          {socialMediaData?.map((item, index) => (
            <motion.a
              key={`id${index}${item?.title}`}
              href={item?.href}
              target='_black'
              className={item?.className}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item?.icon}
            </motion.a>
          ))}
          <DarkMode />
        </nav>
      </div>

      {navbar
        ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90  dark:bg-light/75 rounded-lg backdrop-blur-md
      py-32'
          >
            <nav className='flex items-center flex-col justify-center'>
              {linksData?.map((item, index) => (
                <CustomMobileLink
                  key={`id${index}${item?.title}`}
                  href={item?.href}
                  title={item?.title}
                  toggle={changeNavbar}
                  className=''
                />
              ))}
            </nav>
            <nav className='flex items-center justify-center flex-wrap gap-4 mt-2 text-light dark:text-dark'>
              {socialMediaData.map((item, index) => (
                <motion.a
                  key={`id${index}${item?.title}`}
                  href={item?.href}
                  target='_black'
                  className={`${item?.className} sm:mx-1`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item?.icon}
                </motion.a>
              ))}
              <DarkMode />
            </nav>
          </motion.div>
          )
        : null}
    </>
  )
}

export default NavBar
