import React from "react";
import { useLocation } from "react-router-dom";

function StartTest() {
  const location = useLocation();
  const skills = location.state?.skills || ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div>
      <h2>Start Test</h2>
      <h3>Required Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default StartTest;
