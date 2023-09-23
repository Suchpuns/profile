import React from 'react'
import './Projects.css'
import fomoImg from '../assets/fomo.png'
import doomImg from '../assets/doom-tracker.png'

const Projects = () => {
  return (
    <div>
      <div className="project-container">
        <div className='project-content'>
          <div className='project-box'>
            {/* <img className='project-img' src={fomoImg}></img> */}
            <h4> </h4>
          </div>
        </div>
        <div className="title">
          <div className='project-circle'>
          </div>
          <div className="title-cool">
            cool
          </div>
          <div className="title-projects">
            PROJECTS
          </div>
        </div>
      </div>
      <div className='project-content'>
          <div className='project-box'>
            <a href='https://github.com/csesoc/trainee-3-22t2-fomo'>
            <img className='project-img' src={fomoImg}></img>
            </a>
            <h1>FOMO</h1>
            A calendar to put all society events in one place! You can sort events by tags and also add events using a discord bot!
          </div>
          <div className='project-circle'>
          </div>
          <div className='project-box'>
            <a href='https://github.com/csesoc/trainee-2-22t3'>
              <img className='project-img' src={doomImg}></img>
            </a>
            <h1>Doom Tracker</h1>
            An app that records all your missed lectures/labs and shares it with your friends!
          </div>
        </div>
    </div>
  )
}

export default Projects