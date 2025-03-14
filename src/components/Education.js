import React from "react";
import "./Education.css"; // Ensure this file exists for styling

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>

      <div className="school">
        <h3>University of Massachusetts, Lowell</h3>
        <h4>Master's in Computer Science | Sep 2023 - Jun 2025</h4>
        <p><strong>Coursework:</strong> Data Science, Data Mining, Algorithms, Internet of Things, Operating Systems, Advanced Topics in Network Security, Machine/Deep Learning Security and Privacy.</p>
      </div>

      <div className="school">
        <h3>SASTRA Deemed to be University, Tanjore, India</h3>
        <h4>Bachelor of Technology, Electronics and Instrumentation Engineering | Jul 2022</h4>
      </div>
    </div>
  );
};

export default Education;