import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title"><a  href="#civilianism" >Civilianism Club</a></div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="#civil">Civil</a></li>
        <li className="navbar-item"><a href="#mission">Mission</a></li>
        <li className="navbar-item"><a href="#mint">Mint</a></li>
        <li className="navbar-item"><a href="#road">Road</a></li>
        <li className="navbar-item"><a href="#team">Team</a></li>
        <li className="navbar-item"><a href="#news">News</a></li>
        <li className="navbar-item"><a href="#shop">Shop</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
