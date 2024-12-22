import React, { useState } from 'react'
import './Header.css'

function Header() {


   const [show, setShow] =useState(false)

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

   {/*------------------------------------  responsive nav bar degine ------------------------------- */}

    <div  onClick={()=>setShow(true)} className="flex lg:hidden  text-[30px]">
  <i class="fa fa-bars" aria-hidden="true"></i> 
  </div>

  <>

{show === true ?

<div className='w-[100%] h-[100vh] fixed top-0 left-0 z-10'>
          <div onClick={()=> setShow(false)} className='bg-black w-full h-[100vh] opacity-60 fixed cursor-pointer left-0 top-0 ' >
          </div>
          <div className='bg-white sidebar-popup lg:h-[100vh] h-[60vh] lg:w-[30%] w-[100%] absolute right-0 z-[11]' >
            <button className='w-[100%] h-[10vh]  text-[35px] text-start pl-10' onClick={()=> setShow(false)}  >X</button>
            <div className='w-[90%] h-[25vh] flex gap-[40%] pl-10  '>
              <div className='flex flex-col gap-[8%]   '>
                <h4>Language</h4>
                <label>English</label>
                <label>French</label>
                <label>Arabric</label>
                
              
              </div>
             
            </div>
          </div></div> 
:null}

          </> 

   </div>
  )
}

export default Header