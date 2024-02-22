import React from 'react';
import Header from './components/NavBar/Header';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';

function App() {
  return (
    <div className='container'>
      <Header />
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
