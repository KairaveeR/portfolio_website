import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { Experience } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Projectcard = ({ index, name, description, tags, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl' />

        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Experiencecard = ({ index, name, work, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 1000
        }}
        className="bg-tertiary p-5 rounded-2xl">
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'><a href="https://ldce.ac.in/team">{name}</a></h3>
          <p className='mt-2 text-secondary text-[14px]'><a href="https://ldce.ac.in/team">{work}</a></p>
          </div>
        
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following proejcts showcases my skills and experinece through real-world examples of my work. Each project has breif description and technology i have used for it.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <Projectcard key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
      <motion.div variants={textVariant()} className='mt-10'>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>
      <div className="w-full flex">
       
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {Experience.map((Experience, index) => (
          <Experiencecard key={`Experience-${index}`}
            index={index}
            {...Experience} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "");