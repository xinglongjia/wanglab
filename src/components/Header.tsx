import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import { buildAssetPath } from "../utils/pathBuilder";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="title">
        <div className="logo-container">
          <img width="50px" src={buildAssetPath('assets/images/Final_radar_nobackground.png')} alt="iPanCare Logo" />
        </div>
        <div className="title-container">
          <strong>WANG LAB</strong>
          <span className="subtitle">
            <span className="initials">I</span>ntegrative <span className="initials">Pan</span>
            creatic <span className="initials">Ca</span>ncer <span className="initials">Re</span>search
          </span>
        </div>
      </Link>
      
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/team">Team</Link>
        <Link to="/news">Lab News</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="mobile-menu">
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/research" onClick={closeMenu}>Research</Link>
          <Link to="/team" onClick={closeMenu}>Team</Link>
          <Link to="/news" onClick={closeMenu}>Lab News</Link>
          <Link to="/publications" onClick={closeMenu}>Publications</Link>
          <Link to="/resources" onClick={closeMenu}>Resources</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </header>
  );
}