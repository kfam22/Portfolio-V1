import React from 'react';
import './App.css';
import Home from './components/Home';
import Philosophy from './components/Philosophy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kayla's Portfolio</h1>
      </header>
      <Home/>
      <Philosophy/>
    </div>
  );
}

export default App;
