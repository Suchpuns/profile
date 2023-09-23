import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faBoltLightning, faFlag } from '@fortawesome/free-solid-svg-icons'
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <div className='title'>
        <div className='title-personal'>
          personal
        </div>
        <div className='title-skills'>
          SKILLS
        </div>
      </div>
      <div className='skill-container'>
        <div className='skill-content'>
          <div className='skill-circle'>
            <h1 className='skill-icon'><FontAwesomeIcon icon={faComments} /></h1>
            <h2>Interpersonal Skills</h2>
            <p>I’m a great communicator! With my past experience working together with leads and execs, I've learned how to express myself in a clear and consice manner to deliver my ideas and achieve my goals</p>
          </div>
          <div className='skill-circle'>
            <h1 className='skill-icon'><FontAwesomeIcon icon={faFlag} /></h1>
            <h2>Leadership</h2>
            <p>I have a strong leadership. My experiences as the training program director has taught me how to organise a team and show leadership, to bring the most out of the people around me.</p>
          </div>
          <div className='skill-circle'>
            <h1 className='skill-icon'><FontAwesomeIcon icon={faBoltLightning} /></h1>
            <h2>Strong Initiative</h2>
            <p>My strongest point is my initiative. I will not be passive and will always take action to ensure that I’m always progressing towards my visions and goals.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills