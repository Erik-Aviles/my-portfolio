import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, delay }) => {
  const x = 0
  const y = 0
  return (
    <motion.li
      className='flex items-center  lg:justify-start justify-center lg:rounded-none rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 lg:text-sm lg:my-1.5 md:px-3 lg:bg-transparent lg:dark:bg-transparent lg:text-dark lg:dark:text-white lg:font-bold border-l-4 border-primary dark:border-primaryDark pl-4'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      whileInView={{ x, y, opacity: 1, transition: { duration: 1.5, delay } }}
      viewport={{ amount: 0.5 }}
    >
      {name}
    </motion.li>
  )
}
export default Skill
