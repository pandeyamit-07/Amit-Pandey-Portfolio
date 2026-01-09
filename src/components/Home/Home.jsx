import './Home.css'

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="greeting-text">
            <h1 className="greeting">Hi, I'm <span className="highlight">Amit Pandey</span></h1>
            <h2 className="welcome">Welcome to my portfolio</h2>
            <h3 className="role">Software Developer / MERN Stack Developer</h3>
            <div className="skills-tags">
              <span className="skill-tag">Node.js Developer</span>
              <span className="skill-tag">Full Stack Developer</span>
              <span className="skill-tag">React Developer</span>
              <span className="skill-tag">MongoDB Expert</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="home-image-container">
            <img 
              src="./src/assets/3.png" 
              alt="Amit Pandey" 
              className="home-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

