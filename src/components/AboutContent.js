import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import react1 from "../assets/react.jpg"
import react2 from "../assets/html.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I'm a react front-end developer. I create responsive websites so if you need one, then contact me </p>
            <Link to ="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={react1} className='img' alt="true"/>
                </div>
                <div className='img-stack bottom'>
                    <img src={react2} className='img' alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
