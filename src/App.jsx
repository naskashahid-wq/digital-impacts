import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/navbar/home/home'
import Services from './components/navbar/services/services'
import About from './components/navbar/about/about'
import Portfolio from './components/navbar/portfolio/portfolio'

function App() {

  return (
    <>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>
    </head>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Portfolio/>
    
    </>
  )
}

export default App
