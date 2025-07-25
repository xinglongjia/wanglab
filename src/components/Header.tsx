import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="title">
        <strong>WANG LAB</strong> - <span className="initials">iPanCare</span>
        <br />
        <span className="subtitle">
          <span className="initials">I</span>ntegrative <span className="initials">Pan</span>
          creatic <span className="initials">Ca</span>ncer <span className="initials">R</span>esearch</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/team">Team</Link>
        <Link to="/news">Lab News</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}