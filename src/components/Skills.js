import React from 'react'
import { SubTitle } from './Titles'
import Skill from './stylesComponents/Skill'

const Skills = () => {
  return (
    <section className='w-full flex flex-col md:gap-4 gap-8 '>
      <SubTitle title='Habilidades' className='' />
      <ul className='flex flex-row lg:flex-col gap-2 mx-auto 4 py-10'>
        <Skill name='NextJS' delay={0} />
        <Skill name='Mongo DB' delay={0.3} />
        <Skill name='Bootstrap' delay={0.6} />
        <Skill name='Styled Components' delay={0.9} />
        <Skill name='Next UI' delay={1.2} />
        <Skill name='Tailwind CSS' delay={1.5} />
        <Skill name='Framer Motion' delay={1.8} />
      </ul>
    </section>
  )
}

export default Skills
