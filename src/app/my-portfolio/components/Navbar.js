"use client";

import "../styles/Navbar.css";
import { useState } from "react";

export const metadata = {
  title: "Home",
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navs = [
    { id: 0, href: "/home", name: "Home" },
    { id: 1, href: "/resume", name: "Resume" },
    { id: 2, href: "/about", name: "About" },
    { id: 3, href: "/contact", name: "Contact" },
    { id: 4, href: "/blog", name: "Blog" },
    { id: 5, href: "/contents", name: "" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Abdullahi H Mu'az</div>

        <ul
          className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
          id="navMenu"
        >
          {navs.map((nav) => (
            <li key={nav.id}>
              <a href={nav.href} onClick={() => setIsMobileMenuOpen(false)}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon" id="themeIcon"></i>
          </button>
          <div
            className="buttons"
            // className="mobile-menu-toggle"
            id="mobileToggle"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
