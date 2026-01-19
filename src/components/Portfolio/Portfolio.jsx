import { useEffect, useState } from 'react'
import './Portfolio.css'
import resumePDF from '../../assets/pdf/Amit Pandey Resume .pdf'

// Import project images
import pos1 from '../../assets/img/project/pos1.jpg'
import pos2 from '../../assets/img/project/pos2.jpg'
import pos3 from '../../assets/img/project/pos3.jpg'
import pos4 from '../../assets/img/project/pos3.jpg'
import pos5 from '../../assets/img/project/pos3.jpg'

import auto1 from '../../assets/img/project/auto1.png'
import auto2 from '../../assets/img/project/auto2.png'
import auto3 from '../../assets/img/project/auto2.png'
import auto4 from '../../assets/img/project/auto2.png'
import auto5 from '../../assets/img/project/auto2.png'

import tms1 from '../../assets/img/project/tms1.png'
import tms2 from '../../assets/img/project/tms1.png'
import tms3 from '../../assets/img/project/tms1.png'
import tms4 from '../../assets/img/project/tms1.png'
import tms5 from '../../assets/img/project/tms1.png'


import mrm1 from '../../assets/img/project/mrm1.jpg'
import mrm2 from '../../assets/img/project/mrm2.png'
import mrm3 from '../../assets/img/project/mrm2.png'
import mrm4 from '../../assets/img/project/mrm2.png'
import mrm5 from '../../assets/img/project/mrm2.png'


//certificates
import cer1 from '../../assets/img/certificate/weblord.png'
import cer2 from '../../assets/img/certificate/mern.jpg'
import cer3 from '../../assets/img/certificate/collage.jpg'
import cer4 from '../../assets/img/certificate/dsa.jpg'
import cer5 from '../../assets/img/certificate/agentic.jpg'
import cer6 from '../../assets/img/certificate/c++.jpg'


// Projects data
const projectsData = [
  {
    id: 'project-1',
    title: 'Khana Khanajan - POS Software with Customer panel',
    images: [pos1, pos2, pos3],
    description: `This is a comprehensive Point-of-Sale (POS) system designed for modern restaurants and food service businesses. The platform features a robust QR code scanning functionality that allows customers to easily access menus and place orders directly from their mobile devices.

Key Features:
• Advanced QR Code Integration: Seamless menu access and ordering through QR code scanning
• Dual Panel System: Separate interfaces for customers and administrators with role-based access
• Real-time Notifications: Live updates using WebSocket technology for instant order status changes
• Secure Authentication: JWT-based authentication ensuring secure user sessions
• RESTful API Architecture: Well-structured backend APIs for scalable and maintainable code
• Responsive Design: Optimized for both desktop and mobile devices

Technical Implementation:
The system is built using React for the frontend, providing a smooth and interactive user experience. The backend leverages Node.js and Express.js to handle server-side logic and API endpoints. MySQL database ensures reliable data storage and retrieval. WebSocket integration enables real-time communication between the customer panel and admin dashboard, allowing instant order updates and notifications.`,
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Web-Socket'],
    liveLink: 'https://khana-khajana-eayz.onrender.com/'
  },
  {
    id: 'project-2',
    title: 'Automated Outbound Calling System',
    images: [auto1, auto2],
    description: `A complete end-to-end automated calling platform that revolutionizes outbound communication for businesses. This system integrates Asterisk PBX with modern web technologies to create a powerful telephony solution.

System Components:
• Asterisk GSM Calling Engine: Utilizes SIM-based calling infrastructure with advanced audio playback capabilities and DTMF input handling for interactive voice responses
• Node.js Campaign Controller: Manages sequential calling operations with intelligent scheduling and event-driven architecture for optimal performance
• React Analytics Dashboard: Comprehensive call analytics with real-time metrics, interactive charts, and advanced filtering options

Key Capabilities:
• Automated Campaign Management: Schedule and execute large-scale calling campaigns with minimal manual intervention
• Audio File Upload: Easy integration of custom audio messages for personalized communication
• Real-time Monitoring: Live tracking of call status, duration, and outcomes
• Advanced Analytics: Detailed reporting with visualizations to track campaign performance
• Scalable Architecture: Built to handle high-volume calling operations efficiently

This solution is particularly valuable for businesses requiring automated customer outreach, appointment reminders, or marketing campaigns.`,
    technologies: ['Node.js', 'Asterisk PBX', 'Chan Dongle', 'GSM Dongle'],
    liveLink: 'https://github.com/pandeyamit-07/Automated-Outbound-Calling-System'
  },
  {
    id: 'project-3',
    title: 'Task Management System',
    images: [tms1],
    description: `A secure and feature-rich Task Management System built with the MERN stack, designed to help individuals and teams organize their work efficiently. The system emphasizes data security and user privacy with strict data isolation.

Core Features:
• Role-Based Authentication: Secure user authentication ensuring that each user can only access their own tasks and data
• Private Dashboards: Complete data isolation so users exclusively manage their personal task lists
• Advanced Search Functionality: Quick and efficient task searching across all user's tasks
• Smart Filtering: Filter tasks by status, priority, date, or custom criteria
• Pagination System: Optimized performance for handling large task lists without compromising speed
• Intuitive Interface: Clean and user-friendly design built with React

Technical Highlights:
The application uses MongoDB for flexible data storage, allowing for complex task structures and relationships. The React frontend provides a smooth, responsive experience with real-time updates. RESTful API architecture ensures clean separation between frontend and backend, making the system maintainable and scalable.

The system is perfect for personal productivity, team collaboration, or project management needs, with a strong focus on user privacy and data security.`,
    technologies: ['React', 'Chart.js', 'REST API', 'MongoDb'],
    liveLink: 'https://task-management-system-1-tg23.onrender.com/'
  },
  {
    id: 'project-4',
    title: 'MRM Ecommerce Platform',
    images: [mrm1, mrm2],
    description: `A fully functional e-commerce platform built with modern web technologies, providing a seamless shopping experience for customers. This project demonstrates proficiency in frontend development and user experience design.

Platform Features:
• Dynamic Product Catalog: Real-time product rendering with detailed information and images
• Shopping Cart Functionality: Full-featured cart system with add, remove, and update capabilities
• Streamlined Checkout Process: Simplified checkout interface for quick and easy purchases
• Responsive Design: Optimized for all device sizes, from mobile phones to desktop computers
• Intuitive Navigation: Easy-to-use interface that guides users through their shopping journey

User Experience:
The platform focuses on providing an intuitive and enjoyable shopping experience. Products are displayed in an organized manner with clear pricing and descriptions. The shopping cart allows users to review their selections before checkout, and the checkout process is designed to be quick and straightforward.

This project showcases skills in HTML, CSS, and JavaScript, creating a responsive and interactive web application that meets modern e-commerce standards.`,
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
    liveLink: 'https://pandeyamit-07.github.io/MRM-E-Commerce---My-first-project/'
  }
]

function Portfolio() {
  const [activePortfolioTab, setActivePortfolioTab] = useState('projects')
  const [expandedDescriptions, setExpandedDescriptions] = useState({})
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const handleCertificateClick = (certificateId) => {
    setSelectedCertificate(certificateId)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  const handleProjectClick = (projectId) => {
    const project = projectsData.find(p => p.id === projectId)
    if (project) {
      setSelectedProject(project)
      setCurrentImageIndex(0)
      setIsProjectModalOpen(true)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }
  }

  const closeProjectModal = () => {
    setIsProjectModalOpen(false)
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Handle ESC key to close modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isModalOpen) {
          closeModal()
        }
        if (isProjectModalOpen) {
          closeProjectModal()
        }
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen, isProjectModalOpen])

  useEffect(() => {
    if (activePortfolioTab === 'skills') {
      const skillsContainer = document.getElementById('skills-container')
      const skillCircles = document.querySelectorAll('.skill-circle')

      const handleClick = (e) => {
        const rect = skillsContainer.getBoundingClientRect()
        const containerWidth = rect.width
        const containerHeight = rect.height

        skillCircles.forEach((circle) => {
          const randomX = (Math.random() - 0.5) * 200
          const randomY = (Math.random() - 0.5) * 200
          const currentX = parseFloat(circle.style.left) || parseFloat(getComputedStyle(circle).left) || 0
          const currentY = parseFloat(circle.style.top) || parseFloat(getComputedStyle(circle).top) || 0
          
          let newX = currentX + randomX
          let newY = currentY + randomY
          
          // Keep within bounds (accounting for circle width/height of 80px)
          newX = Math.max(0, Math.min(newX, containerWidth - 80))
          newY = Math.max(0, Math.min(newY, containerHeight - 80))

          circle.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
          circle.style.left = `${newX}px`
          circle.style.top = `${newY}px`
        })
      }

      if (skillsContainer) {
        skillsContainer.addEventListener('click', handleClick)
        return () => {
          skillsContainer.removeEventListener('click', handleClick)
        }
      }
    }
  }, [activePortfolioTab])

  const buildTimelineItems = (project) => {
    if (!project) return []

    const descriptionParagraphs = project.description
      .split('\n\n')
      .map(p => p.trim())
      .filter(Boolean)

    const baseImages = project.images && project.images.length > 0
      ? project.images
      : []

    // Always create 4 steps, cycling through available images
    const totalSteps = 4
    const fallbackText =
      descriptionParagraphs[descriptionParagraphs.length - 1] || ''

    return Array.from({ length: totalSteps }, (_, index) => {
      const image =
        baseImages.length > 0
          ? baseImages[index % baseImages.length]
          : null

      const text = descriptionParagraphs[index] || fallbackText

      return {
        image,
        text
      }
    })
  }

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        
        {/* Portfolio Tabs */}
        <div className="portfolio-tabs">
          <button 
            className={`portfolio-tab ${activePortfolioTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActivePortfolioTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`portfolio-tab ${activePortfolioTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActivePortfolioTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`portfolio-tab ${activePortfolioTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActivePortfolioTab('certificates')}
          >
            Certificates
          </button>
        </div>

        {/* Portfolio Content */}
        <div className="portfolio-content">
          {activePortfolioTab === 'projects' && (
            <div className="projects-grid">
              {projectsData.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-link">View Details</div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-description-wrapper">
                      <p className={`project-description ${expandedDescriptions[project.id] ? '' : 'description-truncated'}`}>
                        {project.description.split('\n\n')[0]}
                      </p>
                      <button 
                        className="show-more-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleDescription(project.id)
                        }}
                      >
                        {expandedDescriptions[project.id] ? 'Show less' : 'Show more'}
                      </button>
                    </div>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activePortfolioTab === 'skills' && (
            <div className="skills-wrapper">
              {/* Left Side - Floating Icons */}
              <div className="skills-icons-container" id="skills-container">
                <div className="skill-circle" data-skill="javascript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="react">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="css">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="html">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="nodejs">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="express">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="mongodb">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="mysql">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="bootstrap">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="tailwind">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="jwt">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg" alt="JWT" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="websocket">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="WebSocket" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="postman">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
                <div className="skill-circle" data-skill="git">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-logo-img" />
                  <div className="skill-glow"></div>
                </div>
              </div>

              {/* Right Side - Written Skills List */}
              <div className="skills-list-container">
                <h3 className="skills-list-title">My Skills</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">NODEJS</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">EXPRESS</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">CSS</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">MongoDB</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">HTML</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">MySQL</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Bootstrap</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JWT</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Tailwind CSS</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JS & TS</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Postman</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">WebSocket</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Git/GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePortfolioTab === 'certificates' && (
            <div className="certificates-grid">
              <div className="certificate-card" onClick={() => handleCertificateClick('cert-1')}>
                <div className="certificate-image">
                  <img src={cer1} alt="Full Stack Development" />
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">INTERNSHIP<br/>Full Stack Development - MERN</h3>
                  <p className="certificate-issuer">Issued by Weblord Info Tech Pvt Ltd</p>
                  <p className="certificate-date">July - till now 2025</p>
                </div>
              </div>

              <div className="certificate-card" onClick={() => handleCertificateClick('cert-2')}>
                <div className="certificate-image">
                  <img src={cer2} alt="MERN STACK CERTIFICATION" />
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">MERN STACK CERTIFICATION</h3>
                  <p className="certificate-issuer">Issued by Apna College - Shraddha Khapra</p>
                  <p className="certificate-date">Jan - Sept 2025</p>
                </div>
              </div>

              <div className="certificate-card" onClick={() => handleCertificateClick('cert-3')}>
                <div className="certificate-image">
                  <img src={cer3} alt="College Internship - MERNe" />
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">College Internship - MERN</h3>
                  <p className="certificate-issuer">College Project & Internship</p>
                  <p className="certificate-date">Jan - Mar 2025</p>
                </div>
              </div>

              <div className="certificate-card" onClick={() => handleCertificateClick('cert-4')}>
                <div className="certificate-image">
                  <img src={cer4} alt="DSA in JAVA Certificate" />
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">DSA in JAVA Certification</h3>
                  <p className="certificate-issuer">Issued by Apna College - Shraddha Khapra</p>
                  <p className="certificate-date">Nov 2025 - till now 2026</p>
                </div>
              </div>

              <div className="certificate-card" onClick={() => handleCertificateClick('cert-5')}>
                <div className="certificate-image">
                  <img src={cer5} alt="Hackathon" />
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">Hackathon - AI Agent Buildathon</h3>
                  <p className="certificate-issuer">Issued by Technium(SLRTCE)</p>
                  <p className="certificate-date">April 2025</p>
                </div>
              </div>

              <div className="certificate-card" onClick={() => handleCertificateClick('cert-6')}>
                <div className="certificate-image">
                  <img src={cer6} alt="C++" />
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">C++</h3>
                  <p className="certificate-issuer">Issued by Claritech Academy</p>
                  <p className="certificate-date">Jan - Mar 2023</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="pdf-modal-overlay" onClick={closeModal}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-modal-close" onClick={closeModal}>×</button>
            <div className="pdf-container">
              <iframe
                src={resumePDF}
                className="pdf-iframe"
                title="Certificate PDF"
              />
            </div>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {isProjectModalOpen && selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button - Top */}
            <button className="project-modal-close" onClick={closeProjectModal}>×</button>
            
            {/* Project Title */}
            <div className="project-modal-header">
              <h2 className="project-modal-title">{selectedProject.title}</h2>
            </div>

            {/* View Live Button + Technologies Used */}
            <div className="project-modal-top-row">
              <div className="project-modal-actions">
                <a 
                  href={selectedProject.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-view-live-btn"
                >
                  View Live
                </a>
              </div>

              <div className="project-modal-tech">
                <h3 className="project-modal-tech-title">Technologies Used</h3>
                <div className="project-modal-tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="project-modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Zig-zag timeline layout with 4 images and descriptions */}
            <div className="project-zigzag">
              {buildTimelineItems(selectedProject).map((item, index) => (
                <div 
                  key={index} 
                  className={`project-step ${index % 2 === 1 ? 'step-right' : 'step-left'}`}
                >
                  <div className="step-image">
                    {item.image && (
                      <img src={item.image} alt={`${selectedProject.title} view ${index + 1}`} />
                    )}
                  </div>
                  <div className="step-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio

