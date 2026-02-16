import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{
      display: 'flex',
      gap: '20px',
      padding: '1rem',
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '1rem',
      backgroundColor: '#fff'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 500 }}>Resume</Link>
      <Link to="/readiness" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 500 }}>Readiness</Link>
      <Link to="/jobs" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 500 }}>Jobs</Link>
    </nav>
  );
};

export default Navigation;
