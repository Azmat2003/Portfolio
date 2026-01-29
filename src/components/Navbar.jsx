import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={closeMenu}>⚡ Azmat Matin Shadab</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>AboutMe</a></li>
        {/* <li><a href="#journey" onClick={closeMenu}>MyJourney</a></li> */}
        {/* <li><a href="#projects" onClick={closeMenu}>Projects</a></li> */}
        <li><a href="#contact" onClick={closeMenu}>ContactMe</a></li>
        {/* <li><a href="#resume" onClick={closeMenu}>Resume</a></li> */}
        <li><a href="https://drive.google.com/file/d/1jemJXQhxY900PfJ3nY4vcJUixkTlLIJn/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
