import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import amitImage from '../../assets/img/amit-nav.png';


function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside and prevent body scroll when menu is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      <nav className="navbar" ref={navRef}>
        <div className="nav-left">
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}
                className={activeSection === 'portfolio' ? 'active' : ''}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#resume" 
                onClick={(e) => { e.preventDefault(); handleNavClick('resume'); }}
                className={activeSection === 'resume' ? 'active' : ''}
              >
                Resume
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="profile-info">
            <img src={amitImage} alt="Amit Pandey" className="nav-profile-img" />
            <div className="nav-name">
              <span className="name">Amit Pandey</span>
              <span className="title">Software Developer</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

