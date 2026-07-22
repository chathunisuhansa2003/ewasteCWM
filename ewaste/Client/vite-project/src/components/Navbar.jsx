import logo from "../assets/logofull.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       <img src={logo} alt="E-Waste Logo" className="logo-img" />
       
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}