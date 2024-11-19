import React from 'react'
import Image from 'next/image'
import profileWomen from '../../public/images/profile/profile-2.png'
import { bibliographicData } from '@/resources/bibliographicData'
import AnimatedNumber from './stylesComponents/AnimatedNumber'
import { historicalData } from '@/resources/historicalData'

const AboutMe = () => {
  return (
    <section className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
      <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
          Un poco sobre mi
        </h2>
        {bibliographicData.map((item, index) => (
          <p
            key={`id-${index}`}
            className='font-medium mb-4 text-dark/75 dark:text-light/75 '
          >
            {item.paragraph}
          </p>
        ))}
      </div>

      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
        <Image
          src={profileWomen}
          alt='ErikAviles'
          className='w-full h-auto rounded-2xl'
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <div className='col-span-2 flex flex-col justify-between xl:col-span-8 xl:flex-row md:order-3'>
        {historicalData?.map((data) => (
          <div
            key={data?.id}
            className='flex flex-col items-end justify-center xl:items-center '
          >
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-black dark:text-white'>
              <AnimatedNumber value={data?.time} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
              {data?.description}
            </h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutMe
