import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark
       text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light
       dark:text-dark dark:shadow-light lg:py-2 lg:px-4 lg:text-sm lg:my-1.5 md:px-3 lg:bg-transparent lg:dark:bg-transparent lg:text-primary lg:dark:text-primaryDark lg:font-bold'
      whileHover={{ scale: 1.05 }}
      inicial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
export default Skill
