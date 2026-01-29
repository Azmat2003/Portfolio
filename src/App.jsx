import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutMe';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import StarfieldCanvas from './components/StarfieldCanvas';

import './App.css'

function App() {
  return (
    <Router>
      <StarfieldCanvas/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/journey" element={<Journey />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* <Home/> */}
      <About/>
      {/* <Journey/> */}
      {/* <Projects/> */}
      <Contact/>
    </Router>
  );
}

export default App;
