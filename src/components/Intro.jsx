import React from 'react'
import profilePic from '../assets/profile-pic-me.jpg'
import './Intro.css'


const Intro = () => {
  return (
    <div className='intro'>
      <div className='title'>
        <div className='title-my'>
          <div className='intro-box'>
          </div>
          introducing
        </div>
        <div className="title-me">
          me myself and I
        </div>
      </div>
      <div className="intro-container">
        <div className="intro-content">
          <p>Hi! I’m Henry</p>
          <p>

  I’m a second-year computer science students and am currently the director for training program 2023. 

  I first joined CSESoc as a trainee in 2022, not only to learn more about web development but also to push myself into making connections with new people. </p>
  <p>

  It is such a fun time meeting people from all the different portfolios and I really felt like I was able part of a close community where I was respected and appreciated.

  So afterwards I stayed to become a lead and later a director in the training program because I wanted to give back to those that helped me reach where I am.</p>
  <p>

  I want to keep this society like the <b>welcoming and exciting place</b> when I first joined and it’s a key reason why I applied to be the <b>Operations VP/GEDI officer</b>.</p>
        </div>
        <div>
        <img className="profile-pic" src={profilePic}></img>
        </div>
      </div>
    </div>
  )
}

export default Intro