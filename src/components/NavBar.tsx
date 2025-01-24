import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        {/* Logo Title with a Link */}
        <a href="/" className="logo-link">
          <h1 className="logo-title">Menstrualuna - The Period Tracker App</h1>
        </a>
      </div>
      <div className="nav-links">
        {/* Add other nav buttons or links if needed */}
      </div>
    </nav>
  );
};

export default NavBar;
