import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header animate-fade-in">
      <div className="container header-container">
        <Link to="/" className="logo">
          <ShieldCheck size={32} className="logo-icon" />
          <span className="logo-text">HealthProtect<span className="logo-dot">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-list">
            <li><a href="#schemes" className="nav-link">Schemes</a></li>
            <li><a href="#how-to-apply" className="nav-link">How to Apply</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          {/* Google Translate Placement */}
           <div id="google_translate_element"></div>

          <Link to="/apply" className="btn btn-primary btn-sm desktop-only">
            Apply Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="mobile-nav animate-scale-in">
          <ul className="mobile-nav-list">
            <li><a href="#schemes" onClick={() => setIsMenuOpen(false)}>Available Schemes</a></li>
            <li><a href="#how-to-apply" onClick={() => setIsMenuOpen(false)}>How to Apply</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Support</a></li>
            <li>
              <Link to="/apply" className="btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
