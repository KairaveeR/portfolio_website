import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index , title , icon}) => {
    return(
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5*index , 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{
            max:45,
            scale:1,
            speed:450
          }} 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
}
const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Highly motivated, adaptable, and detail-oriented computer engineering student with a strong foundation in programming and a passion for software development. Finding opportunities where I can apply my knowledge of various programming languages and my result-driven skills to contribute to innovative projects, gain practical experience in different development methodologies, and continue learning and growing in a collaborative team environment.
      </motion.p>
      <motion.div variants={textVariant()} className='mt-10'>
        <p className={styles.heroSubText}>Area of Interest</p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (<ServiceCard key={ service.title} index={index}{...service}/>))}

      </div>
    </div>
  )
}

export default SectionWrapper(About , "About");