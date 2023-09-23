import { useState } from 'react'
import Landing from './components/Landing'
import './App.css'
import Vision from './components/Vision'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Landing></Landing>
      <Intro></Intro>
      <Vision></Vision>
      <Skills></Skills>
      <Projects></Projects>
    </>
  )
}

export default App
