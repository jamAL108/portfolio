import React from 'react'
import './skills.css';
import html from '../images/html.png';
import css from '../images/css.png';
import rect from '../images/react.png';
import javascript from '../images/javascript.png';
import Python from '../images/python.png';
import Java from '../images/java.png';
import clang from '../images/clang.png';
const Skills = () => {
  return (
    <div className="skills">
        <div className="text">
            <h2>Skills</h2>
            <h1>Everything I use to</h1>
            <h1>turn my ideas into</h1>
            <h1>reality.</h1>
        </div>
        <div className="body">
           <div className="tech">
              <h1>TechStack</h1>
              <div className="boxes">
              <div className="box">
                <img src={html} alt="htnml" />
                <h2>html</h2>
              </div>
              <div className="box">
              <img src={css} alt="htnml" />
                <h2>css</h2>
              </div>
              <div className="box">
              <img src={clang} alt="htnml" />
                <h2>C</h2>
              </div>
              <div className="box">
              <img src={javascript} alt="htnml" />
                <h2>javascript</h2>
              </div>
              <div className="box">
              <img src={Python} alt="htnml" />
                <h2>Python</h2>
              </div>
              <div className="box">
              <img src={Java} alt="htnml" />
                <h2>Java</h2>
              </div>
           </div>
           </div>
           <div className="mid">
           <div className="framework">
            <h1>FrameWork</h1>
            <div className="boxes">
           <div className="box">
              <img src={rect} alt="htnml" />
                <h2>React</h2>
              </div>
            </div>
           </div>
           <div className="libraries">
            
           </div>
           </div>
           <div className="database">
           {/* <div className="box">
              <img src={mongodb} alt="htnml" />
                <h2>Mongodb</h2>
              </div> */}
           </div>
           <div className="code">
            
           </div>
        </div>
    </div>
  )
}

export default Skills