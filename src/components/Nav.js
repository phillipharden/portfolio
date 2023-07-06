import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../images/logo.png";
// import { isOptionalCallExpression } from "@babel/types";

function Nav() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const navbar = document.getElementById("nav");
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container" id="nav">
        <div className="logo-container">
          <a href="/" >
            Phillip Harden
          </a>
        </div>

        <ul className={`nav-list ${isActive ? "active" : ""}`}>
          <li onClick={removeActive}>
            <a href="/resume" className="navLink">
              Resume
            </a>
          </li>
          <li>
            <Link
              onClick={removeActive}
              activeClass="active"
              to="bio-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Bio
            </Link>
          </li>
          <li>
            <Link
              onClick={removeActive}
              activeClass="active"
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              onClick={removeActive}
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;