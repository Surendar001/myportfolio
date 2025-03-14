import React from "react";
import "./Projects.css"; // Ensure this file exists for styling

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>To-Do List Android Application</h3>
        <h4>Independent Project</h4>
        <ul>
          <li>Developed a feature-rich To-Do List Android app using Java.</li>
          <li>Implemented task management functionalities including adding, editing, marking as complete, and deleting tasks.</li>
          <li>Designed an interactive UI with RecyclerView for task listing and Material Design components for a seamless experience.</li>
          <li>Utilized Room Database (SQLite) for persistent task storage, ensuring data remains across sessions.</li>
          <li>Integrated a custom TaskAdapter for smooth task rendering and interaction.</li>
          <li>Added reminders and notifications for pending tasks, improving user productivity.</li>
          <li>Implemented Dark Mode support for an enhanced user experience.</li>
          <li>GitHub Repository: <a href="https://github.com/Surendar001/Androidtaskapp">View on GitHub</a></li>
        </ul>
      </div>

      <div className="project">
        <h3>Encrypted Overlay Network</h3>
        <h4>University of Massachusetts, Lowell | Mar 2024 - May 2024</h4>
        <ul>
          <li>Built an encrypted communication network with authentication mechanisms for secure data transmission.</li>
          <li>Integrated secret key encryption into the client-server architecture, ensuring confidentiality.</li>
          <li>Implemented multi-layered encryption techniques to enhance security and protect against cyber threats.</li>
          <li>Designed a custom authentication mechanism to prevent unauthorized access.</li>
          <li>Optimized data packet transmission, improving network performance by 25%.</li>
          <li>GitHub Repository: <a href="https://github.com/Surendar001/Encrypted-overlay-network">View on GitHub</a></li>
        </ul>
      </div>

      <div className="project">
        <h3>Remote Patient Health Monitoring</h3>
        <h4>University of Massachusetts, Lowell | Oct 2023 - Dec 2023</h4>
        <ul>
          <li>Developed an Android application using Java & TensorFlow Lite, predicting heart failure risks based on real-time data.</li>
          <li>Implemented an LSTM-based ML model, achieving an accuracy of X% for patient health predictions.</li>
          <li>Designed and integrated a notification system, alerting emergency contacts when abnormal health metrics were detected.</li>
          <li>Used Bluetooth and IoT integration for real-time patient monitoring with wearable devices.</li>
          <li>Implemented secure cloud storage to store patient health data securely and efficiently.</li>
          <li>Developed a user-friendly dashboard for doctors to monitor patient vitals remotely.</li>
          <li>GitHub Repository: <a href="https://github.com/Surendar001/rphm-app">View on GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;