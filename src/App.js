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
      <header className="App-header">
        <h1>Kayla's Portfolio</h1>
      </header>
      <Home/>
      <Philosophy/>
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
