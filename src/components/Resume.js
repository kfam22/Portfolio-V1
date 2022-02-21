import React from 'react'
import { Document } from 'react-pdf';
import resume from '../assets/Kayla Famurewa Resume 22-01.svg';

export default function Resume() {
  return (
    <div className='resumeContainer'>

        <div className='resume'>
            <img src={resume} alt='kayla famurewa resume'/>
        </div>
        
    </div>
  )
}
