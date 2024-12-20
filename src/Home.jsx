import React from 'react'
import './index.css'
import Header from './Component/Header'
import Top from './Component/Top'
import First from './Page/First'
import About from './Page/About'
import Skill from './Page/Skill'
import Contect from './Page/Contect'


const Home = () => {
  return (
  <>
  <Top></Top>
  <Header></Header>
  <First></First>
  <About></About>
  <Skill></Skill>
  <Contect></Contect>
  
  </>    

  )
}

export default Home