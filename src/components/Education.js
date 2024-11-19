import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

import Details from './Details'
import { SubTitle } from './Titles'
import { educationData } from '@/resources/educationData'

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })
  return (
    <section className='w-full flex flex-col md:gap-4 gap-8 '>
      <SubTitle title='Educación' className='' />
      <div
        ref={ref}
        className='relative flex flex-col md:gap-4 gap-8 items-center max-w-2xl mx-auto'
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-[90vh] bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          {educationData?.map((item, index) => (
            <Details
              key={`id${index}`}
              name={item?.type}
              time={item?.time}
              place={item?.place}
              info={item?.info}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
