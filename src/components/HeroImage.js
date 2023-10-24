import "./HeroImageStyles.css";

import React from 'react'
import bgimg from "../assets/bgimg.jpg"
import { Link } from "react-router-dom";
import 'animation.css'
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import bg from "../assets/pic.png"


const HeroImage = () => {

  const [loopNum, setLoopNum]=useState(0);
const [isDeleting, setIsDeleting]=useState(false);
const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
const [text, setText]=useState("");
const [delta, setDelta]=useState(300-Math.random()*100);
const period = 2000;

useEffect(()=>{
    let ticker = setInterval(() =>{
        tick();
    }, delta)
    return () =>{clearInterval(ticker)};
}, [text]
)

const tick = () =>{
    let i = loopNum% toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1)
    setText(updatedText)

    if (isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }

    if (!isDeleting && updatedText===fullText ){
        setIsDeleting(true);
        setDelta(period);}
        else if(isDeleting && updatedText===""){
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
        }
    }

   
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={bgimg} alt="bgimg"/>
        </div>
        <div className="content">
          <div className="one">
          <div>
            <img src={bg} alt="me"/>
          </div>
         <div>
            <h1>{`Hi I'm Asim Shrestha `}</h1>
            <h1><span className="wrap">{text}</span></h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-lite">Contacts</Link>
            </div>
          </div>
          </div>
          <h2 style={{color: 'white'}}>"Crafting Tomorrow's Interfaces Today: Reacting to the Future!"</h2>


          </div>

          <div>
            <hr/>
            <h1 class="text-center m-5">Let's work together 😁😉</h1>
            <hr/>
          </div>

          


    </div>
  )
  }

export default HeroImage