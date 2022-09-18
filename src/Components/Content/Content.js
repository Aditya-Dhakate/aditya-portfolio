import React, { useState } from 'react'
import './content.css'
import { Project } from '../Project/Project'
import { Skills } from '../Skills/Skills'
 


export const Content = () => {
 
  const [toggle, setToggle] = useState(0);

   const changeToggle = (number) => {
      setToggle(number);
   }


  return (
    <section className='filter container'>
        <ul className='filter-content'>
         <button onClick={() => setToggle(0)} className={`filter-button ${toggle === 0 ? 'active' : ''}`}>Project</button>
         <button onClick={() => setToggle(1)} className={`filter-button ${toggle === 1 ? 'active' : ''}`}>skills</button>
        </ul>
        <div className='filter-section'>
          {toggle === 0 ? <Project/> : <Skills/>}
        </div>
    </section>
  )
}
