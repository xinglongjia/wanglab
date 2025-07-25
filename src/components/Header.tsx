import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f8f8f8' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/research">Research</Link> |{" "}
      <Link to="/team">Team</Link> |{" "}
      <Link to="/news">Lab News</Link> |{" "}
      <Link to="/publications">Publications</Link> |{" "}
      <Link to="/resources">Resources</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}