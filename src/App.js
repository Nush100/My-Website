import React from 'react';
import Header from './components/NavBar/Header';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='container'>
      <Header />
      <Intro/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
