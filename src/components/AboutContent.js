import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import react1 from "../assets/react.jpg"
import react2 from "../assets/html.jpg"

const AboutContent = () => {
  return (
    <div>
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
    <div className='wholeskill'>
        <h1 className='d-flex justify-content-center display-3'>SKILLS</h1>
        <div className='d-flex justify-content-between m-5 p-5'>
        <div className='skills'>
        <h1 style={{ color: "orange" }}><i className="fab fa-html5 fa-3x"></i></h1>
        <h1>HTML</h1>
        </div>
        <div className='skills'> 
        <h1 style={{ color: "blue" }}><i className="fab fa-css3-alt fa-3x"></i></h1>
        <h1> CSS</h1>
        </div>
        <div className='skills'>
        <h1 style={{ color: "aqua" }} ><i className="fab fa-react fa-3x"></i></h1>
        <h1>REACT</h1>
        </div>
        <div className='skills'>
        <h1 style={{ color: "orange" }} ><i className="fab fa-figma fa-3x"></i></h1>
        <h1>FIGMA</h1>
        </div>
        <div className='skills'>
        <h1 style={{ color: "red" }} ><i className="fab fa-java fa-3x"></i></h1>
        <h1>JAVA</h1>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AboutContent
