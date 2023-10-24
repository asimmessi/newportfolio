import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import head from "../assets/bgimg.jpg"
import { useState, useEffect } from "react";

import React from 'react'

export const Banner = () => {

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
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi I'm Asim Shrestha `}<span className="wrap">{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium aspernatur nesciunt vero dolore nobis odio velit dolorem, aperiam quibusdam eius repudiandae aut quae totam repellat ad eaque commodi accusantium.</p>
                    <button onClick={()=> console.log("connect")}>Let's Connect<ArrowRightCircle size={25}/></button>
                </Col>
 
                <Col xs={12} md={6} xl={5}>
                    <img src={head} alt="head">

                    </img>
                </Col>
            </Row>
        </Container>
    </section>
  )


  }