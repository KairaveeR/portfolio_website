import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../style';
import { contacts } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index , name , link }) => {
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
          <h3 className='text-white text-[20px] font-bold text-center'><a href={link}> {name} </a></h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const Contact = () => {
  return (
    <div id="contact">
        <div className="mt-20 flex flex-wrap gap-10 mb-20">
        {contacts.map((contacts, index) => (<ServiceCard key={ contacts.name} index={index}{...contacts}/>))}

      </div>
    </div>
   
  )
}

export default SectionWrapper(Contact , "");