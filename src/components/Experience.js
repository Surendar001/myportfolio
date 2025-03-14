import React from "react";
import "./Experience.css"; // Ensure this file exists for styling

const Experience = () => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>

      <div className="job">
        <h3>Software Engineer</h3>
        <h4>Mphasis Limited, Chennai, India | Jun 2022 - Jul 2023</h4>
        <ul>
          <li>
            Developed and maintained responsive web applications using 
            <strong> Java, Spring Boot, JavaScript, HTML, CSS, and Bootstrap.</strong>
          </li>
          <li>
            Deployed scalable applications on <strong>AWS (EC2, S3, RDS)</strong>, reducing 
            downtime by 30% through optimized cloud configurations.
          </li>
          <li>
            Implemented CI/CD pipelines using <strong>AWS CodeCommit</strong> and <strong>Git</strong>, 
            streamlining software deployment and reducing release cycle time.
          </li>
          <li>
            Strengthened security by configuring IAM policies, network isolation (VPC), and access controls, 
            mitigating security risks.
          </li>
          <li>
            Completed a Java Full-Stack Development Training (3 months), enhancing 
            proficiency in both front-end and back-end technologies.
          </li>
          <li>
            Developed RESTful APIs to integrate frontend and backend components, 
            improving application performance and maintainability.
          </li>
          <li>
            Designed database schemas and optimized queries using MySQL and PostgreSQL, 
            reducing data retrieval times by 40%.
          </li>
          <li>
            Utilized Docker and Kubernetes for containerized deployments, enhancing scalability and microservices management.
          </li>
          <li>
            Led a team of junior developers, conducted code reviews, and provided mentorship 
            to improve code quality and team productivity.
          </li>
          <li>
            Improved application performance and security by implementing caching mechanisms, 
            API rate-limiting, and best coding practices.
          </li>
          <li>
            Developed an internal monitoring dashboard using React and GraphQL, 
            allowing real-time tracking of application performance.
          </li>
          <li>
            Automated testing processes using JUnit and Selenium, reducing manual testing 
            efforts by 50%.
          </li>
          <li>
            Worked with cross-functional teams including UX designers, product managers, 
            and QA engineers to ensure seamless application deployment.
          </li>
          <li>
            Contributed to agile development processes, including daily stand-ups, sprint planning, and retrospectives.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Student Grader – Analysis of Algorithms</h3>
        <h4>University of Massachusetts, Lowell | Computer Science | Feb 2025 – Present</h4>
        <ul>
          <li>
            Assessed coding assignments and exams for Analysis of Algorithms, ensuring grading accuracy and fairness.
          </li>
          <li>
            Provided detailed feedback on algorithm design, complexity analysis, and problem-solving techniques.
          </li>
          <li>
            Maintained student records and submitted grades via Blackboard, ensuring timely academic evaluations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;