import { useEffect, useState } from 'react'
import './Portfolio.css'

// Import project images
import pos0 from '../../assets/img/data/pos/pos0.jpg'
import pos1 from '../../assets/img/data/pos/pos1.png'
import pos2 from '../../assets/img/data/pos/pos2.png'
import pos3 from '../../assets/img/data/pos/pos3.png'
import pos4 from '../../assets/img/data/pos/pos4.png'

import auto0 from '../../assets/img/data/auto/auto0.png'
import auto1 from '../../assets/img/data/auto/auto1.webp'
import auto2 from '../../assets/img/data/auto/auto2.webp'
import auto3 from '../../assets/img/data/auto/auto3.webp'
import auto4 from '../../assets/img/data/auto/auto4.webp'

import tms0 from '../../assets/img/data/tms/tms0.png'
import tms1 from '../../assets/img/data/tms/tms1.png'
import tms2 from '../../assets/img/data/tms/tms2.png'
import tms3 from '../../assets/img/data/tms/tms3.png'
import tms4 from '../../assets/img/data/tms/tms4.png'

import mrm0 from '../../assets/img/data/mrm/mrm0.jpg'
import mrm1 from '../../assets/img/data/mrm/mrm1.png'
import mrm2 from '../../assets/img/data/mrm/mrm2.png'
import mrm3 from '../../assets/img/data/mrm/mrm3.png'
import mrm4 from '../../assets/img/data/mrm/mrm4.png'

//certificates
import cer1 from '../../assets/img/certificate/weblord.png'
import cer2 from '../../assets/img/certificate/mern.jpg'
import cer3 from '../../assets/img/certificate/collage.jpg'
import cer4 from '../../assets/img/certificate/dsa.jpg'
import cer5 from '../../assets/img/certificate/agentic.jpg'
import cer6 from '../../assets/img/certificate/c++.jpg'

//certificates Pdf
import cert1 from '../../assets/pdf/weblord.pdf'
import cert2 from '../../assets/pdf/mern.pdf'
import cert3 from '../../assets/pdf/collage.pdf'
import cert4 from '../../assets/pdf/dsa.pdf'
import cert5 from '../../assets/pdf/agentic.pdf'
import cert6 from '../../assets/pdf/c++.pdf'

// Projects data - all projects now follow desc1..desc4 pattern
const projectsData = [
  {
    id: 'project-1',
    title: 'Khana Khanajan - POS Software with Customer panel',
    images: [pos0, pos1, pos2, pos3, pos4],

    desc1: `This is a comprehensive Point-of-Sale (POS) system designed for modern restaurants and food service businesses. Customers can scan a QR code to access the menu and place orders directly from their mobile devices.`,

    desc2: `/admin page to go on admin Pannel.The system provides a dual-panel architecture with a dedicated an admin pannel. Admins can also do order for window customers efficiently. The application is used for structured data storage, ensuring performance, scalability, and reliability.`,

    desc3: `Real-time communication is implemented using WebSocket technology, allowing instant order updates and notifications between customer and admin panels. Secure authentication is handled using JWT.`,

    desc4: `The Inventory page enables the admin to add, update, and delete items, as well as manage inventory stock levels and item quantities.`,

    technologies: ['React', 'Node.js', 'MySQL', 'JWT', 'WebSocket', 'pdfkit'],
    liveLink: 'https://khana-khajana-eayz.onrender.com/',
    gitlink:'https://github.com/pandeyamit-07/Khana-Khajana'
  },

  {
    id: 'project-2',
    title: 'Automated Outbound Calling System',
    images: [auto0, auto1, auto2, auto3, auto4],

    desc1: `A complete end-to-end automated calling platform that outbound communication for businesses and campaigns. Core system components include an Asterisk GSM calling engine (SIM-based) with huawei sim dongle on Ubantu System. While using Sim dongle and sim the Campaign System is working locally.`,

    desc2: ` Node.js campaign controller for sequencing and can upload pre-recorded audio file for custom messages. The solution is built to be scalable for high-volume operations and is ideal for appointment reminders, customer outreach, and marketing campaigns.`,

    desc3: `From here Admin can upload customers name and number excel or sql with group name. Then Start campaign with a name and decide which audio and which group of customer number have to call.`,

    desc4: ` A React analytics dashboard for monitoring. It include , DTMF handling for interactive responses, automated campaign management, and real-time monitoring of call status and outcomes.`,

    technologies: ['Node.js', 'Asterisk PBX', 'Chan Dongle', 'Asterisk Manager','mysql'],
    liveLink: 'http://calldash.hottcart.com/',
    gitlink:'https://github.com/pandeyamit-07/Automated-Outbound-Calling-System'

  },

  {
    id: 'project-3',
    title: 'Task Management System',
    images: [tms0, tms1, tms2, tms3, tms4],

    desc1: `A secure role-based authentication and feature-rich Task Management System built with the MERN stack to help individuals and teams organize work efficiently.`,

    desc2: `Core features include role-based authentication, private dashboards (data isolation), advanced search, smart filtering, and pagination for large task lists.`,

    desc3: `A responsive React frontend including wuth Search feature by Task titile and Filter option on Task Status and RESTful APIs for clean separation between frontend and backend.`,

    desc4: `Also can edit or delete the task and task status between Pending to Completed. This system is suited for personal productivity and project management while prioritizing user privacy and performance.`,

    technologies: ['React', 'Node.js', 'Express', 'MongoDb'],
    liveLink: 'https://task-management-system-1-tg23.onrender.com/',
    gitlink:'https://github.com/pandeyamit-07/Task-Management-System'
  },

  {
    id: 'project-4',
    title: 'MRM Ecommerce Platform',
    images: [mrm0, mrm1, mrm2, mrm3, mrm4],

    desc1: `A fully functional e-commerce platform built with modern web technologies that offers a seamless shopping experience.`,

    desc2: `Platform features include a dynamic product catalog, shopping cart with add/remove/update, and a streamlined checkout process for quick purchases.`,

    desc3: `The UI emphasizes responsive design and intuitive navigation so users can browse, review cart items, and complete purchases easily across devices.`,

    desc4: `This project showcases frontend skills in HTML, CSS, and JavaScript and demonstrates building a responsive, user-friendly web application.`,

    technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
    liveLink: 'https://pandeyamit-07.github.io/MRM-E-Commerce---My-first-project/',
    gitlink:'https://github.com/pandeyamit-07/Task-Management-System'
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

  const getCertificatePdfSrc = () => {
    switch (selectedCertificate) {
      case 'cert-1':
        return cert1
      case 'cert-2':
        return cert2
      case 'cert-3':
        return cert3
      case 'cert-4':
        return cert4
      case 'cert-5':
        return cert5
      case 'cert-6':
        return cert6
      default:
        return null
    }
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

  // Helper to get 4 paragraphs for a project (desc1..desc4 preferred, fallback to splitting description)
  const getProjectParagraphs = (project) => {
    if (!project) return ['', '', '', '']

    if (project.desc1) {
      return [
        project.desc1 || '',
        project.desc2 || '',
        project.desc3 || '',
        project.desc4 || ''
      ]
    }

    if (project.description) {
      const ps = project.description
        .split('\n\n')
        .map(p => p.trim())
        .filter(Boolean)
      // ensure at least 4 entries (repeat last if needed)
      while (ps.length < 4) ps.push(ps[ps.length - 1] || '')
      return ps.slice(0, 4)
    }

    return ['', '', '', '']
  }

  const buildTimelineItems = (project) => {
    if (!project) return []
  
    const descriptions = [
      project.desc1,
      project.desc2,
      project.desc3,
      project.desc4
    ]
  
    const baseImages =
      project.images && project.images.length > 1
        ? project.images.slice(1)
        : []
  
    return descriptions.map((text, index) => ({
      image: baseImages[index % baseImages.length],
      text
    }))
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
              {projectsData.map((project) => {
                const paragraphs = getProjectParagraphs(project)

                return (
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
                          {paragraphs[0]}
                        </p>

                        {/* expanded content: show desc2-desc4 when expanded */}
                        {expandedDescriptions[project.id] && (
                          <>
                            {paragraphs[1] && <p className="project-description-expanded">{paragraphs[1]}</p>}
                            {paragraphs[2] && <p className="project-description-expanded">{paragraphs[2]}</p>}
                            {paragraphs[3] && <p className="project-description-expanded">{paragraphs[3]}</p>}
                          </>
                        )}

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
                )
              })}
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
              {getCertificatePdfSrc() && (
                <iframe
                  src={getCertificatePdfSrc()}
                  className="pdf-iframe"
                  title="Certificate PDF"
                />
              )}
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
                  <a 
                  href={selectedProject.gitlink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-view-live-btn"
                >
                  Github Link
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
