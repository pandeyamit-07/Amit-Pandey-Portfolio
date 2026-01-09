import './About.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="./src/assets/nav.png" 
              alt="Amit Pandey" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p className="about-description">
              I'm Amit Pandey, a passionate Software Developer and MERN Stack specialist with a strong foundation 
              in building scalable web applications. With expertise in both frontend and backend technologies, 
              I create seamless digital experiences that combine functionality with elegant design.
            </p>
            <p className="about-description">
              My journey in software development began with a curiosity for how things work, which led me to 
              master technologies like React, Node.js, MongoDB, and Express.js. I thrive on solving complex 
              problems and turning innovative ideas into reality through clean, efficient code.
            </p>
            <p className="about-description">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and continuously learning to stay at the forefront of web development. I believe in writing 
              code that not only works but is also maintainable, scalable, and follows best practices.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Projects Participation</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">7+</h3>
                <p className="stat-label">Month Fresher Experince</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Self Confident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

