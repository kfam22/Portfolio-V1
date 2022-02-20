import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/HomeSections/Home';
import Writing from './components/Writing/Writing';
import ProjectsAll from './components/Projects/ProjectsAll';

function App() {

  const [currentSection, setCurrentSection] = useState(1)

  const sections = {
    1 : '#home',
    2 : '#two',
    3 : '#three',
    4 : '#four',
    5 : '#five'
  };


  return (
    <div className="App">
      
      {currentSection <= 5 &&

        
            <a href={`${sections[currentSection]}`} onClick={() => setCurrentSection(currentSection + 1)}>
            <button id="btnScroll" >
              <i className='material-icons'>arrow_downward</i>
            </button>
            </a>
       
        }

      <header>
        <div>
            <Link className="logo" to='/'>Kayla.Famurewa</Link>
        </div>
        <div className='menu'>
            <nav>
                <a href="#two">philosophy</a>
                <a href="#three">experience</a>
                 <Link to='/projects'>projects</Link>
                <a href="#five">contact</a>
                <Link to='/writing'>writing</Link>
            </nav>
        </div>
      </header>

      

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/writing' element={<Writing/>}/>
        <Route path='/projects' element={<ProjectsAll/>}/>

      </Routes>


    </div>
  );
}

export default App;
