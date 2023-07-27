import React from 'react'
import './Aboutme.css';
import { motion } from 'framer-motion'
const Aboutme = () => {
  return (
    <div className='Aboutme'>
        <div className="text">
            <motion.h2 initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>About me</motion.h2>
            <motion.h1 initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>My Tech Stack </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }} >and Expertise</motion.h1>
         </div>
         <div className="body">
          <motion.div className="left" initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}>
             <h1>MERN STACK Developer and a Passionate DATA SCIENTIST</h1>
             <h2>Having begun with HTML, CSS, and JavaScript, I self-taught numerous JavaScript frameworks. Presently, I am adept at both JavaScript and TypeScript and flexible in using MERN and Redux for state management. Moreover, I work as a data scientist with a fervent passion for data analysis, and I have successfully developed multiple projects in the field of machine learning </h2>
          </motion.div>
          <div className="right">
            <motion.div className="box" id='b1' initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }} >
              <h1>300<span>+</span></h1>
              <h2>Leetcode Solutions</h2>
            </motion.div>
            <motion.div className="box" initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}>
              <h1>10+</h1>
              <h2>Full stack project</h2>
            </motion.div>
            <motion.div className="box" initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}>
              <h1>5+</h1>
              <h2>ML project</h2>
            </motion.div>
            <motion.div className="box" initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}>
              <h1>100+</h1>
              <h2>Passion</h2>
            </motion.div>
          </div>
         </div>
    </div>
  )
}

export default Aboutme