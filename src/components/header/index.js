import React, { useState, useRef, useEffect } from "react";
import "../../styling.css";

export default function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [navMenu, setNavMenu] = useState(false);

  return (
    <header>
      <nav
        style={{ backgroundColor: navBackground ? "black" : "transparent" }}
        className="fixed-top"
      >
        <div className="menu-icon" onClick={() => setNavMenu("showing")}>
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="logo">Meedaxa Ahmed</div>
        <div className="menu">
          <ul className={navMenu ? "showing" : "navMenu"}>
            <li className="nav-item" >
              <a className="nav-link" href="#about">
                <i className="fa fa-user" style={{marginRight: 10 +"px"}}></i>About
              </a>
            </li>
            <li className="nav-item navbar-link">
              <a className="nav-link" href="#portfolio">
                <i className="fa fa-briefcase" style={{marginRight: 10 +"px"}}></i>Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
