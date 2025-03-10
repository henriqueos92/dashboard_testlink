import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles.css';

const IndexNavBar = ({ projectName }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="index__navbar">
      <div className="project-name">{projectName}</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <a href="http://azship/testlink/index.php" rel="TestLink">Acessar TestLink</a>
        </div>
      )}
    </div>
  );
};

export default IndexNavBar;