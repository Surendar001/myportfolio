import React from "react";
import "./Skills.css"; // Ensure this file exists for styling

const Skills = () => {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <div className="skill-category">
        <h3>Programming</h3>
        <p>Java (Spring Boot, Hibernate), C, C++, Python (Pandas, TensorFlow, NLP), JavaScript (Angular, React, Next.js, Node.js), TypeScript.</p>
      </div>
      
      <div className="skill-category">
        <h3>Database</h3>
        <p>SQL (MySQL, PostgreSQL, SQLite), NoSQL (MongoDB, Firebase, DynamoDB).</p>
      </div>
      
      <div className="skill-category">
        <h3>State Management</h3>
        <p>Redux, React Query, Context API.</p>
      </div>
      
      <div className="skill-category">
        <h3>Cloud & DevOps</h3>
        <p>AWS (EC2, S3, RDS, IAM, CodeCommit, Lambda), CI/CD (Docker, Kubernetes, GitHub Actions, Jenkins), Terraform.</p>
      </div>
      
      <div className="skill-category">
        <h3>Software Development</h3>
        <p>Web & Mobile Development (Android Studio, Flutter), Machine Learning & AI (PyTorch, TensorFlow), Secure Network Design.</p>
      </div>
      
      <div className="skill-category">
        <h3>Version Control & Collaboration</h3>
        <p>Git, GitHub, Bitbucket, GitLab, Agile/Scrum methodologies.</p>
      </div>
      
      <div className="skill-category">
        <h3>Other Tools & Technologies</h3>
        <p>GraphQL, REST API Development, WebSockets, Elasticsearch, Kafka, RabbitMQ.</p>
      </div>
    </div>
  );
};

export default Skills;