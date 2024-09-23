import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skill'
import Projects from './components/projects'
import './App.css'


function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App