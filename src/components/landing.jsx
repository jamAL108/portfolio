import React from 'react'
import Cat from '../images/cat.jpeg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './landing.css';
const Landing = () => {
  return (
    <div className="landing">
        <div className="head">
        <div className="image">
            <img src={Cat} alt="" />
        </div>
        <div className="name">
            <h2>Jamal Mydeen</h2>
        </div>
        </div>
        <div className="tagline">
        <h1 className="h1">
            Developer & Programmer
        </h1>
        <p>inquisitive individual, constantly seeking out new and <br/>innovative practices to refine my skills and build cool <br/>stuff.</p>
        </div>
        <button>Find Out More <ArrowForwardIcon/></button>
    </div>
  )
}

export default Landing