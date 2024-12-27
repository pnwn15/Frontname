import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Our from './Component/Our'
import Feature from './Component/Feature'
import Gg from './Component/Gg'
import Skill from './Component/Skill'
import Team from './Component/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <Hero />
       <Our />
       <Feature />
       <Gg />
       <Skill />
       <Team />
    </>
  )
}

export default App
