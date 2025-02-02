import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sponsor from './components/Sponsor';
import Event from './components/Event';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <Sponsor/>
      <Event/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
