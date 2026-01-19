import './Navbar.css';
import amitImage from '../../assets/img/amit-nav.png';


function Navbar({ activeSection, scrollToSection }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
              className={activeSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
              className={activeSection === 'resume' ? 'active' : ''}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
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
  )
}

export default Navbar

