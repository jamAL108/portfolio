import React from 'react'
import '../sass/project.scss';
import { motion } from 'framer-motion'
import Metatunes from '../images/metatunes.jpg';
import DeepFake from '../images/Deepfake.png'
const Project = () => {
        // cosnt [activeElementId,setactiveelem] = useS
        // function getActiveElementId(){
                // get focused element's id
                // activeId.innerText = activeElementId;  // update text of the span
   
//  document.addEventListener('mouseup', getActiveElementId);
// // Listen to the keyup event
// document.addEventListener('keyup', function(event){
//     // check if key pressed is a TAB key
//     if(event.key==='Tab'){
//         getActiveElementId();  // call the function
//     }
// });

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
            <motion.div className="box" id='box1'>
                <img src={Metatunes} alt="wer" />
                {document.activeElement.id ==='#box1' &&(
 <>
 </>
                )}
            </motion.div>
            <motion.div className="box">
            <img src={DeepFake} alt="wer" />
            {document.activeElement.id ==='#box2' &&(
 <>
 </>
                )}
            </motion.div>
            <motion.div className="box">coming soon!</motion.div>
            <motion.div className="box">coming soon!</motion.div>
         </div>
         <div className="show">
            <motion.a  href='https://github.com/jamAL108' initial={{ scale:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}>show more</motion.a>
         </div>
    </div>
  )
}

export default Project;