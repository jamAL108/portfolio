import React from 'react'
import './project.css';
import { motion } from 'framer-motion'
const Project = () => {
   // if()
  return (
    <div className="project">
                <div className="text">
                <motion.h2 initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }} >Project</motion.h2>
                <motion.h1  className='h1' initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>A small preview of</motion.h1>
                <motion.h1 className='h1' initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>my project</motion.h1>
             </div>


         <div className="body">
            <motion.div className="box" >coming soon!</motion.div>
            <motion.div className="box">coming soon!</motion.div>
            <motion.div className="box">coming soon!</motion.div>
            <motion.div className="box">coming soon!</motion.div>
         </div>
         <div className="show">
            <motion.h1 initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}>show more</motion.h1>
         </div>
    </div>
  )
}

export default Project