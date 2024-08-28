import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="sidebar-content">
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#use-cases" onClick={toggleSidebar}>Use Cases</a>
        <a href="#blockchain-technique" onClick={toggleSidebar}>Blockchain Technique</a>
      </div>
    </div>
  );
}

export default Sidebar;
