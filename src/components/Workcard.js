import { NavLink } from "react-router-dom"
import "./Workcard.css"


import React from 'react'

const Workcard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="hero"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to ="url.com" className="btn">
                            View
                        </NavLink>

                        <NavLink to ="url.com" className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>

            </div>
  )
}

export default Workcard

