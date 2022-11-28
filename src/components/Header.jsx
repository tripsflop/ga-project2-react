import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <div className="nav-item">
        <span className="nav-logo">
          <Link to="/">Home</Link>
        </span>
      </div>
      <div className="nav-item">
        <Link to="/Content">Explore</Link>
      </div>
      <div className="nav-item">
        <Link to="/About">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/Favourite">Favourite</Link>
      </div>
    </div>
  );
}

export default Header;
