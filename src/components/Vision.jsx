import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBullhorn, faFire } from '@fortawesome/free-solid-svg-icons'
import './Vision.css'

const Vision = () => {
  return (
    <div>
      <div className='container'>
        <div className='box'>
        </div>
        <div className="title">
          <div className="title-my">
            My
          </div>
          <div className="title-vision">
            VISION
          </div>
        </div>
        <div className="content">
          <div className="content-section">
            <h1>Close Community <FontAwesomeIcon icon={faUsers} /></h1>
            <p>The best thing about a society is of course the community! And my favourite part of being in the dev portfolio was meeting all the talented people from different portfolios. I wish to connect all kinds of people from each team together. Whether its organising more society-wide events with the Culture team, or incentivising teams to do more bonding, I’m giving it my all to make everyone feel welcome </p>
          </div>
          <div className="content-section">
            <h1>Publicisation <FontAwesomeIcon icon={faBullhorn} /></h1>
            <p>I want to share with the world the opportunities that DevSoc brings, like the web-dev workshops from Training Program or the real software engineering experience at the flagship projects. But more importantly, I want more people to see and use the fantastic software developed by DevSoc. </p>
          </div>
          <div className="content-section">
            <h1>Burnout <FontAwesomeIcon icon={faFire} /></h1>
            <p>It’s a common tendency for people in dev to overwork themselves, leading to burnout. I will create a healthier environment where people can feel at ease and be given more options to balance their responsibilities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision