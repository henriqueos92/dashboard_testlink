import React from 'react';
import '../styles.css';

const IndexNavBar = ({ projectName }) => {
  return (
    <div className="index__navbar">
      <div className="project-name">{projectName}</div>
    </div>
  );
};

export default IndexNavBar;