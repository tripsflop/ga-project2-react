import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <React.Fragment>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img className="inline-block" src="src/assets/api.png" alt="" />
            <div className="inline-block text-xl font-bold"> API Explorer</div>
          </div>
          <div className="hidden md:flex space-x-6 font-semibold">
            <div className="nav-item">
              <span className="nav-logo">
                <Link to="/">Home</Link>
              </span>
            </div>
            <div className="nav-item">
              <Link to="/Content">Explore</Link>
            </div>
            <div className="nav-item">
              <Link to="/Favourite">Compare</Link>
            </div>
            <div className="nav-item">
              <Link to="/About">Credits</Link>
            </div>
          </div>

          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 
            font-bold bg-amber-600 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-10"
          >
            <Link to="/">Home</Link>
            <Link to="/Content">Explore</Link>
            <Link to="/Favourite">Favourite</Link>
            <Link to="/About">Credits</Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
