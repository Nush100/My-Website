import Header from './components/NavBar/Header';
import Footer from './components/Footer'; 
import './App.css';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className='container'>
      <Header />
      <Intro/>
      <Footer />
    </div>
  );
}

export default App;
