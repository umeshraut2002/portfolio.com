import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Main />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
