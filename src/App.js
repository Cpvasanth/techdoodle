import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sponsor from './components/Sponsor';
import Event from './components/Event';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Incharges from './components/Incharges';

// Developed by Vasa
// GitHub: https://github.com/Cpvasanth/techdoodle
// Instagram: https://www.instagram.com/vasa.ig/



function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <Sponsor/>
      <Event/>
      {/* <Incharges/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
