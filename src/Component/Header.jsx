import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header bg-slate-100'>
    <div className='head1'>
       
       <label>Ritik Singh</label>
      
    </div>
    <div className='header-component'>
       
       <label className='home'>About</label>
       <label className='home' >Experience</label>
       <label className='home'>Projects</label>
       <label className='home'>
       Contact</label>
       
    </div>

   </div>
  )
}

export default Header