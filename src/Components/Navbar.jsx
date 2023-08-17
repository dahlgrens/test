import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </div>
      <ul>
        <li><CustomLink to="/">Hem</CustomLink></li>
        <li><CustomLink to="/Depression">Depression</CustomLink></li>
        <li><CustomLink to="/Stress">Stress</CustomLink></li>
        <li><CustomLink to="/PTSD">PTSD</CustomLink></li>
        <li><CustomLink to="/GAD">GAD</CustomLink></li>
        <li><CustomLink to="/SocialFobi">Social Fobi</CustomLink></li>
        <li><CustomLink to="/Paniksyndrom">Paniksyndrom</CustomLink></li>
        <li><CustomLink to="/PMDS">PMDS</CustomLink></li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
