import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Samsung
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">მთავარი</Link>
          <Link to="/users" className="nav-link">მომხმარებლები</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

