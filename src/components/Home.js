import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.jpg"; // Ensure you have this image in the assets folder
import resume from "../assets/resume.pdf"; // Ensure your resume PDF is in the assets folder

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img src={profilePic} alt="Surendar Mourougan" className="profile-pic" />
        <h1>Hi, I'm Surendar Mourougan</h1>
        <p>
          A passionate Software Engineer and Master's student in Computer Science at the
          University of Massachusetts, Lowell. I specialize in full-stack development, AI-driven solutions,
          and cloud computing.
        </p>
        <a href="/projects" className="cta-button">View My Work</a>
        <a href={resume} download className="cta-button download-button">Download Resume</a>
      </div>
      
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          With experience as a Software Engineer at Mphasis Limited, I have built scalable web applications
          using Java, Spring Boot, AWS, and JavaScript. My academic journey has deepened my expertise in
          AI, data science, and cloud computing.
        </p>
      </div>
      
      <div className="skills-highlight">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">Java & Spring Boot</div>
          <div className="skill-card">AWS & DevOps</div>
          <div className="skill-card">React & Next.js</div>
          <div className="skill-card">Machine Learning</div>
        </div>
      </div>
    </div>
  );
};

export default Home;