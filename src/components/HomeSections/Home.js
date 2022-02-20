import React from 'react'
import Landing from './Landing';
import Philosophy from './Philosophy';
import Experience from './Experience';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
        
        <div className='container'>
        <Landing/>
        <Philosophy/>
        <Experience/>
        <Projects/>
        <ContactForm/>
        <Footer/>
      </div>

    </div>
  )
}
