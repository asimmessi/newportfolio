import "./NavbarStyles.css"
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom"
import React from 'react'
import { useState } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }

    const [color, setColor]= useState(false);
    const changeColor =()=>{
        if (window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (

    <div className={color? ".header header-bg": "header"}>
        <Link to="/">
            <img src={logo} alt="logo" height={"75px"} />
        </Link>
        <ul className={click?"nav-menu.active": "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click?(<FaTimes size={20} style={{color: "#fff"}}/>):(<FaBars size={20} style={{color: "#fff"}}/>)
            }
            
            
        </div>
    </div>
  )
}

export default Navbar