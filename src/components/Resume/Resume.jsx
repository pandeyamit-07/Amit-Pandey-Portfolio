import React, { useState } from 'react';
import './Resume.css';
import amitImage from '../../assets/img/nav.png';
import resumePDF from '../../assets/pdf/Amit Pandey Resume .pdf';

const Resume = () => {
  const [activePage, setActivePage] = useState(0);
  const maxPages = 5; // Total number of pages (1, 2, 3, 4, 5)

  const handleNext = () => {
    setActivePage((prev) => Math.min(prev + 1, maxPages));
  };

  const handlePrev = () => {
    setActivePage((prev) => Math.max(prev -1, 0));
  };

  // Handle click on book - right side goes next, left side goes previous
  const handleBookClick = (e) => {
    const book = e.currentTarget;
    const rect = book.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const bookWidth = rect.width;
    
    // If click is on the right half, go to next page
    // If click is on the left half, go to previous page
    if (clickX > bookWidth / 2) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  // Logic to ensure the page moving is always on top
  // If a page is flipped (activePage >= index), it acts as the left side.
  const getZIndex = (index) => {
    if (activePage === index) {
      // The page currently turning needs to be on absolute top
      return 100;
    } else if (activePage > index) {
      // Pages already turned (on the left)
      return index; 
    } else {
      // Pages waiting on the right stack (Top one is highest index)
      return 50 - index;
    }
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="resume-wrapper">
        <div className="book" onClick={handleBookClick}>
        
        {/* --- PAGE 1: Cover & Profile --- */}
        <div 
          className={`page ${activePage >= 1 ? 'turn' : ''}`} 
          style={{ zIndex: getZIndex(1) }}
        >
          {/* FRONT: Cover */}
          <div className="page-front cover-page">
            <h1 className="cover-title">RESUME</h1>
            <p className="cover-subtitle">Flipbook CV</p>
            <div className="pulse-loader"></div>
            <p className="click-instruction">Click 'O' to Open</p>
          </div>

          {/* BACK: Profile & Contact */}
          <div className="page-back profile-page">
            <div className="profile-header">
              <div className="profile-img">
                <img src={amitImage} alt="Amit Pandey" />
              </div>
              <h2>Amit Pandey</h2>
              <h3 className="role-highlight">Backend Web-Developer / MERN Stack</h3>
              
              <div className="contact-info">
                <p>📞 7498593746</p>
                <p>📧 07.pandeyamit@gmail.com</p>
                <div className="social-links">
                  <a href="https://github.com/pandeyamit-07" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                  <a href="https://www.linkedin.com/in/07amitpandey" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="profile-body">
              <h3 className="section-subtitle">CAREER OBJECTIVES</h3>
              <p>
                Aspiring Backend Web-Developer eager to leverage my skills in Node.js, Express.js, MongoDb and MERN stack to build innovative, user-centric, scalable and efficient server-side applications. Passionate about learning new technologies and contributing to impactful projects.
              </p>
              <p>
                Looking for a challenging role where I could learn under working professionals to gain knowledge and improvement of my skills so that I can use my skills and capabilities through sincere dedication and hard work for successful career.
              </p>
              
              <div className="action-buttons">
                <a href={resumePDF} download="Amit_Pandey_Resume.pdf" className="btn-download">Download CV ⬇️</a>
                <a href="#contact" className="btn-contact">Contact Me 📞</a>
              </div>
            </div>
            
            <button className="btn-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>⬅️ Back</button>
           
          </div>
        </div>


        {/* --- PAGE 2: Education --- */}
        <div 
          className={`page ${activePage >= 2 ? 'turn' : ''}`} 
          style={{ zIndex: getZIndex(2) }}
        >
          {/* FRONT: Education */}
          <div className="page-front education-page">
            <h2 className="header-title">Education</h2>
            
            <div className="timeline-container">
              <div className="timeline-box">
                <div className="time-year">July 2022 - June 2025</div>
                <h3>Bachelor of Computer Application (BCA)</h3>
                <p>Sailee College | YCMOU</p>
                <p className="coursework">Relevant Coursework: Web Development, Database Management, Data Structure, Software Engineering Principles, Cyber Security Fundamentals, Linux and Windows Operating Systems, (OOPS) Concepts.</p>
              </div>
            </div>

            <button className="btn-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>Next ➡️</button>
          </div>

          {/* BACK: Certifications */}
          <div className="page-back certifications-page">
            <h2 className="header-title">Certifications</h2>
            
            <div className="timeline-container">
              <div className="timeline-box">
                <div className="time-year">January 2025 - July 2025</div>
                <h3>MERN Web Development</h3>
                <p>Sigma 6.0, Apna College</p>
                <span className="institution">Certified</span>
              </div>

              <div className="timeline-box">
                <div className="time-year">03/04/2025</div>
                <h3>VISION Agentic AI Hackathon</h3>
                <p>Built a no-code AI assistant capable of automating tasks such as making calls, managing contacts, sending emails, setting reminders, scheduling, updating, and deleting tasks. My role focused on designing intuitive workflows using n8n and implementing natural language interactions through Lovable AI, tailored for efficiency in a no-code environment.</p>
              </div>

              <div className="timeline-box">
                <div className="time-year">January 2023 - March 2023</div>
                <h3>Digital Marketing</h3>
                <p>Sailee Institute (College Integrated Course)</p>
                <span className="institution">Certified</span>
              </div>
            </div>

            <button className="btn-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>⬅️ Back</button>
          </div>
        </div>

        {/* --- PAGE 3: Projects --- */}
        <div 
          className={`page ${activePage >= 3 ? 'turn' : ''}`} 
          style={{ zIndex: getZIndex(3) }}
        >
          {/* FRONT: Projects (First 2) */}
          <div className="page-front projects-page">
            <h2 className="header-title">Projects</h2>
            
            <div className="project-card">
              <h3>1) POS Model with QR Scanning Table (Khana-Khazana)</h3>
              <p className="project-desc">Developed a Point-of-Sale system with QR code scanning functionality.</p>
              <p className="project-features"><strong>Features:</strong> Developed RESTful APIs for User Authentication, Customer & Admin panel & Live Notification.</p>
              <p className="project-tech"><strong>Technologies Used:</strong> React, Node.js, Express.js, JWT, WebSocket & MySQL.</p>
            </div>

            <div className="project-card">
              <h3>2) E-commerce Website (MRM Wholesale)</h3>
              <p className="project-desc">Implemented product management and shopping cart functionality platform for a wholesaler.</p>
              <p className="project-tech"><strong>Technologies Used:</strong> Node.js, Express.js, MySQL, HTML, CSS, JavaScript.</p>
            </div>

            <button className="btn-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>Next ➡️</button>
          </div>

          {/* BACK: Projects (Last one) */}
          <div className="page-back projects-page">
            <h2 className="header-title">Projects</h2>
            
            <div className="project-card">
              <h3>3) Task Management System</h3>
              <p className="project-desc">Built a secure Task Management System using the MERN Stack with Role-Based Authentication, ensuring strict data isolation so users exclusively manage their private dashboards.</p>
              <p className="project-features">Engineered advanced data handling features including Search, Filtering, and Pagination within the React interface to optimize performance and navigation for large task lists.</p>
            </div>

            <button className="btn-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>⬅️ Back</button>
          </div>
        </div>


        {/* --- PAGE 4: Experiences --- */}
        <div 
          className={`page ${activePage >= 4 ? 'turn' : ''}`} 
          style={{ zIndex: getZIndex(4) }}
        >
          {/* FRONT: Experience 1 */}
          <div className="page-front experiences-page">
            <h2 className="header-title">Experiences</h2>
            
            <div className="experience-box">
              <div className="exp-header">
                <h3>Internship Full (MERN) Stack Developer</h3>
                <span className="exp-company">WEBLORD INFO TECH PVT LTD</span>
                <span className="exp-duration">6 Months</span>
              </div>
              <ul className="exp-responsibilities">
                <li>Designed and developed a complete automated outbound calling system from scratch on Ubuntu, configuring Asterisk PBX as the core telephony engine for call routing, media playback, and DTMF-based IVR logic.</li>
                <li>Built a Node.js + Express backend integrated with Asterisk Manager Interface (AMI) using the asterisk-manager library to programmatically originate calls, track real-time events, and manage sequential call campaigns.</li>
                <li>Integrated physical telephony hardware by compiling and configuring the chan_dongle driver, enabling Asterisk to place SIM-based calls via a Huawei GSM modem without SIP or VoIP providers.</li>
                <li>Authored and maintained Asterisk dialplans (extensions.conf) and secured AMI access via manager.conf, implementing event-driven call workflows using custom Event Emitters.</li>
                <li>Implemented audio processing pipelines using FFmpeg to convert uploaded MP3 files into GSM 8kHz format for dynamic call playback.</li>
                <li>Developed a React (Vite) analytics dashboard with filters, charts, and call performance metrics, and stored call logs in MySQL for status, duration, and user-input analysis.</li>
                <li>Gained hands-on experience working on a live production real estate platform (housingmagic.com), collaborating with the team to implement and debug features related to property listings and user management using MySQL, Express.js, React, Next.js, and Node.js.</li>
              </ul>
            </div>

            <button className="btn-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>Next ➡️</button>
          </div>

          {/* BACK: Experience 2 */}
          <div className="page-back experiences-page">
            <h2 className="header-title">Experiences</h2>
            
            <div className="experience-box">
              <div className="exp-header">
                <h3>Teaching Assistant (Web Development & Programming)</h3>
                <span className="exp-company">Claritech Computer Institute | Borivali</span>
                <span className="exp-duration">6 Months</span>
              </div>
              <ul className="exp-responsibilities">
                <li>Assisting in Frontend, Node.js, Express, MongoDB, MySQL and Python language.</li>
                <li>Provided hands-on support and guidance to students in completing assignments and projects.</li>
              </ul>
            </div>

            <button className="btn-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>⬅️ Back</button>
          </div>
        </div>

        {/* --- PAGE 5: Skills & Personal Info --- */}
        <div 
          className={`page ${activePage >= 5 ? 'turn' : ''}`} 
          style={{ zIndex: getZIndex(5) }}
        >
          {/* FRONT: Skills */}
          <div className="page-front skills-page">
            <h2 className="header-title">Skills</h2>
            
            <div className="skill-section">
              <h3>Frontend</h3>
              <div className="tag-container">
                <span>HTML5</span><span>CSS3</span><span>JavaScript (ES6+)</span><span>Bootstrap</span><span>Tailwind</span><span>React.js</span>
              </div>
            </div>

            <div className="skill-section">
              <h3>Backend</h3>
              <div className="tag-container">
                <span>Node.js</span><span>Express.js</span><span>Asterisk</span><span>Web-Socket</span><span>JWT</span>
              </div>
            </div>

            <div className="skill-section">
              <h3>DevOps/Tools</h3>
              <div className="tag-container">
                <span>Docker</span><span>Postman</span><span>Git</span><span>GitHub</span>
              </div>
            </div>

            <div className="skill-section">
              <h3>Database</h3>
              <div className="tag-container">
                <span>MongoDB</span><span>MySQL</span>
              </div>
            </div>

            <div className="skill-section">
              <h3>Programming Languages</h3>
              <div className="tag-container">
                <span>Java</span><span>Python</span>
              </div>
            </div>

            <div className="skill-section">
              <h3>Soft Skills</h3>
              <div className="tag-container">
                <span>Quick Learner</span><span>Good Communicator</span>
              </div>
            </div>

            <button className="btn-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>Next ➡️</button>
          </div>

          {/* BACK: Personal Info & Declaration */}
          <div className="page-back personal-page">
            <h2 className="header-title">Personal Information</h2>
            
            <div className="personal-info">
              <h3 className="section-subtitle">Areas of Interest</h3>
              <p><strong>INTEREST:</strong> Web-Development & Programming</p>
            </div>

            <div className="personal-info">
              <h3 className="section-subtitle">Address</h3>
              <p><strong>ADDRESS:</strong> Chinchpada Borivali (E) | Mumbai | MAHARASHTRA | INDIA</p>
            </div>

            <div className="personal-info">
              <h3 className="section-subtitle">Languages</h3>
              <p><strong>LANGUAGE KNOWN:</strong> ENGLISH, MARATHI & HINDI</p>
            </div>

            <div className="declaration">
              <h3 className="section-subtitle">DECLARATION</h3>
              <p>I hereby declare that all the details furnished here are true to the best of my knowledge and belief.</p>
            </div>

            <div className="mini-contact">
              <p>📧 07.pandeyamit@gmail.com</p>
              <p>📞 7498593746</p>
            </div>

            <button className="btn-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>⬅️ Back</button>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;