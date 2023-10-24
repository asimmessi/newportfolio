import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import "./HeroImageStyles.css";

import React from 'react'
import 'animation.css'
import { useState, useEffect } from "react";


const Footer = () => {
    const [loopNum, setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate1 = ["football", "coding", "movies"]
    const [text1, setText1]=useState("");
    const [delta, setDelta]=useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick1();
        }, delta)
        return () =>{clearInterval(ticker)};
    }, [text1]
    )

    const tick1 = () =>{
        let i = loopNum% toRotate1.length;
        let fullText = toRotate1[i];
        let updatedText = isDeleting? fullText.substring(0, text1.length-1): fullText.substring(0, text1.length+1)
        setText1(updatedText)
    
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
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: 'white', marginRight: '2rem'}}/>
                    <div>
                        <h4>1-3 Clarence St, Strathfield</h4>
                        <h4>NSW, Australia</h4>
                    </div>
                </div>

                <div className="location phone">
                    <FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}/>
                    <div>
                        <h4>0450 445 101</h4>
                    </div>
                </div>

                <div className="location mail">
                    <FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}/>
                    <div>
                        <h4>asimmefj@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me, Asim Shrestha😒. I enjoy <span className="wrap text">{text1}</span></p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight:"1rem"}}/>

                    <FaTwitter size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                
                
                    <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer