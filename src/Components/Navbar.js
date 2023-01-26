import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#" onClick={hideNavbar}>
          Home
        </a>
        <a href="/#" onClick={hideNavbar}>
          My works
        </a>
        <a href="/#" onClick={hideNavbar}>
          About me
        </a>
        <a href="/#" onClick={hideNavbar}>
          Contact me
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
