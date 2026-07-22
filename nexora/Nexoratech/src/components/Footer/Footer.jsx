import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src="/logo.svg" alt="Nexora Technologies" />
          <p>Innovative digital solutions for modern businesses.</p>
        </div>

        <div className="footer__links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} Nexora Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
