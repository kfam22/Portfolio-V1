import React from 'react';
import './App.css';
import Home from './components/Home';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
            <h1>Kayla Famurewa</h1>
        </div>
        <div className='menu'>
            <nav>
                <a href="#philosophy">01. Philosophy</a>
                <a href="#">0.2 Experience</a>
                <a href="#">0.3 Projects</a>
                <a href="#">0.4 Contact</a>
            </nav>
        </div>
      </header>
      <div className='container'>
        <Home/>
        <Philosophy/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
