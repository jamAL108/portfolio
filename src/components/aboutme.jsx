import React from 'react'
import './Aboutme.css';
const Aboutme = () => {
  return (
    <div className='Aboutme'>
      {window.screen.width>913 ?(
        <div className="text">
            <h2>About me</h2>
            <h1>My Tech Stack </h1>
            <h1>and Expertise</h1>
         </div>
      ):(
        <div className="text">
        <h2>About me</h2>
        <h1>My Tech Stack</h1>
        <h1>and Expertise</h1>
     </div>
      )}
         <div className="body">
          <div className="left">
             <h1>MERN STACK Developer and a Passionate DATA SCIENTIST</h1>
             <h2>Having begun with HTML, CSS, and JavaScript, I self-taught numerous JavaScript frameworks. Presently, I am adept at both JavaScript and TypeScript and flexible in using MERN and Redux for state management. Moreover, I work as a data scientist with a fervent passion for data analysis, and I have successfully developed multiple projects in the field of machine learning </h2>
          </div>
          <div className="right">
            <div className="box" id='b1'>
              <h1>300<span>+</span></h1>
              <h2>Leetcode Solutions</h2>
            </div>
            <div className="box">
              <h1>10+</h1>
              <h2>Full stack project</h2>
            </div>
            <div className="box">
              <h1>5+</h1>
              <h2>ML project</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Passion</h2>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Aboutme