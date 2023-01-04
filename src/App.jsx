import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header/Header'
import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services/>
    </>
  )
}

export default App
