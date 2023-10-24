
import "./Workcard.css"
import Workcard from "./Workcard"
import Workcarddata from "./Workcarddata"



import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <div className="project-heading">Projects</div>
        <div className="project-container">
            {Workcarddata.map((val, index)=>{
                return (
                  <div className="pro">
                    <Workcard
                    key = {index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}

                    />
                    </div>

                )
            })}
            
        </div>
    </div>
  )
}

export default Work

