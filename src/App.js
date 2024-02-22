import React from 'react';
import Header from './components/NavBar/Header';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='container'>
      <Header />
      <Intro/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
