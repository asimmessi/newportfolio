import React from 'react'
import Heroimg2 from './Heroimg2'
import Navbar from './NavBar'
import AboutContent from './AboutContent'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="ABOUT." text="I'm a friendly Front-End Developer."/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About