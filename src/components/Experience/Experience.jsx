import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const TimelineCard = ({ role, company, duration, descriptions, index, position }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`timeline-card ${position} ${isVisible ? 'fade-in-active' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="timeline-dot"></div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-role">{role}</h3>
          <span className="card-company">{company}</span>
        </div>
        <div className="card-duration">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {duration}
        </div>
        <ul className="card-desc">
          {descriptions.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Weblord Info Tech Pvt Ltd",
      duration: "July 2025 - Till Now",
      position: "left",
      // descriptions: [
      //   "Designed and developed a complete automated outbound calling system from scratch on Ubuntu, configuring Asterisk PBX as the core telephony engine for call routing, media playback, and DTMF-based IVR logic.",
      //   "Built a Node.js + Express backend integrated with Asterisk Manager Interface (AMI) using the asterisk-manager library to programmatically originate calls, track real-time events, and manage sequential call campaigns.",
      //   "Integrated physical telephony hardware by compiling and configuring the chan_dongle driver, enabling Asterisk to place SIM-based calls via a Huawei GSM modem without SIP or VoIP providers.",
      //   "Authored and maintained Asterisk dialplans (extensions.conf) and secured AMI access via manager.conf, implementing event-driven call workflows using custom EventEmitters.",
      //   "Implemented audio processing pipelines using FFmpeg to convert uploaded MP3 files into GSM 8kHz format for dynamic call playback.",
      //   "Developed a React (Vite) analytics dashboard with filters, charts, and call performance metrics, and stored call logs in MySQL for status, duration, and user-input analysis.",
      //   "Gained hands-on experience working on a live production real estate platform (housingmagic.com), collaborating with the team to implement and debug features related to property listings and user management using MySQL, Express.js, React, Next.js, and Node.js.",
      //   "Project Repository: ",
      //   <a href="https://github.com/pandeyamit-07/Auto-Calling-Software-Outbound" target="_blank">
      //    View on GitHub
      //   </a>
      // ]
      descriptions: [
  "Designed and developed a complete automated outbound calling system...",
  "Built a Node.js + Express backend integrated with Asterisk Manager Interface...",
  "Integrated physical telephony hardware by compiling and configuring the chan_dongle driver...",
  "Authored and maintained Asterisk dialplans (extensions.conf)...",
  "Implemented audio processing pipelines using FFmpeg...",
  "Developed a React (Vite) analytics dashboard...",
  "Gained hands-on experience working on a live production real estate platform...",
  <>
    Project Repository:{" "}
    <a
      href="https://github.com/pandeyamit-07/Auto-Calling-Software-Outbound"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </a>
  </>
]
    },
    {
      role: " VISION Agentic AI Hackathon",
      company: "technium(SLRTCE)",
      duration: "03 Apr 2025 ",
      position: "right",
       descriptions: [
         "Built a no-code AI assistant capable of automating tasks such as making calls, managing contacts, sending emails, setting reminders, scheduling, updating, and deleting tasks.",
         " My role focused on designing intuitive workflows using n8n and implementing natural language interactions through Lovable AI, tailored for efficiency in a no-code environment."
       ]
      
    },
    {
      role: "Internship (MERN)",
      company: "Mauli Restaurant Sailee College",
      duration: "Jan 2025 - Mar 2025",
      position: "left",
      descriptions: [
        "Completed a 3-month college internship focused on MERN stack development.",
        "Developed a POS system with separate Admin and Customer panels, including order management, billing, inventory control, JWT-based authentication, and real-time updates using WebSockets."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="exp-container">
        <div className="exp-header">
          <p className="exp-subtitle">Professional Journey</p>
          <h2 className="exp-title">Experience.</h2>
        </div>
        
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <TimelineCard 
              key={index}
              index={index}
              role={exp.role}
              company={exp.company}
              duration={exp.duration}
              position={exp.position}
              descriptions={exp.descriptions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
