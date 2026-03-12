import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const ExperienceCard = ({ role, company, duration, descriptions, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible so it doesn't animate out
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits bottom
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
      className={`exp-card ${isVisible ? 'slide-up-active' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="exp-left">
        <span className="exp-duration">{duration}</span>
      </div>
      <div className="exp-right">
        <h3 className="exp-role">{role}</h3>
        <h4 className="exp-company">{company}</h4>
        <ul className="exp-desc">
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
      role: "Internship Full (MERN) Stack Developer",
      company: "WEBLORD INFO TECH PVT LTD",
      duration: "Present // 6 Months",
      descriptions: [
        "Designed and developed a complete automated outbound calling system from scratch on Ubuntu, configuring Asterisk PBX as the core telephony engine.",
        "Built a Node.js + Express backend integrated with Asterisk Manager Interface (AMI) to programmatically originate calls, track real-time events.",
        "Integrated physical telephony hardware by compiling and configuring the chan_dongle driver, enabling Asterisk to place SIM-based calls.",
        "Authored and maintained Asterisk dialplans (extensions.conf) and secured AMI access via manager.conf.",
        "Developed a React (Vite) analytics dashboard with filters, charts, and call performance metrics using MySQL.",
        "Gained hands-on experience working on a live production real estate platform (housingmagic.com) using MySQL, Express.js, React, Next.js, and Node.js."
      ]
    },
    {
      role: "VISION Agentic AI Hackathon",
      company: "Hackathon Participant",
      duration: "03 April 2025",
      descriptions: [
        "Built a no-code AI assistant capable of automating tasks such as making calls, managing contacts, sending emails, and scheduling.",
        "Designed intuitive workflows using n8n and implemented natural language interactions through Lovable AI."
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
        
        <div className="exp-list-container">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              index={index}
              role={exp.role}
              company={exp.company}
              duration={exp.duration}
              descriptions={exp.descriptions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
