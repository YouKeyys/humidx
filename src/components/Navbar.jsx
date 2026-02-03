import './Navbar.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-component">
      <h1 className="navbar-title">Lab Dashboard Monitoring</h1>
      <Link to="/login">
        <button className="navbar-login-button">
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
