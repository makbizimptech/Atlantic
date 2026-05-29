import { useState, useEffect } from 'react';
import { Clock, Menu, X, Bell } from 'lucide-react';

const Logo = ({ className = "" }) => (
  <a href="#" className={`logo-logo logo ${className}`} onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>
    <div className="logo-container">
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="url(#blue-grad)" stroke="#2474FC" strokeWidth="4" />
        <path d="M50 15L25 75H38L50 48L62 75H75L50 15Z" fill="white" />
        <path d="M50 48L44 62H56L50 48Z" fill="#F8FAFC" />
        <defs>
          <linearGradient id="blue-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2474FC" />
            <stop offset="1" stopColor="#00C6FF" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{ color: className.includes('dark-theme-logo') ? '#ffffff' : 'var(--dark-color)' }}>Atlantic</span>
    </div>
    <div className="shine"></div>
  </a>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .mobile-logo {
          display: none;
        }
        @media (max-width: 992px) {
          .mobile-logo {
            display: inline-block;
            padding: 5px 0;
          }
          .page-header-top-right {
            gap: 12px !important;
          }
          .page-header-phone .phone-number {
            font-size: 16px !important;
          }
          .quote-button-wrap .btn-quote {
            padding: 8px 12px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      {/* Top Tier (White) */}
      <div className="page-header-top">
        <div className="container">
          <Logo />
          
          <div className="page-header-top-middle">
            <div className="page-header-slogan">We are Cleaning Experts!</div>
            <div className="page-header-schedule">
              <Clock size={16} />
              <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
            </div>
          </div>

          <div className="page-header-top-right" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div className="page-header-phone">
              <span className="phone-label">Call us on:</span>
              <a href="tel:5513758746" className="phone-number">(551) 375-8746</a>
            </div>
            <div className="quote-button-wrap">
              <button className="btn btn-quote" onClick={() => scrollToSection('contact')}>
                <Bell size={16} />
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier (Sticky Navy Navigation) */}
      <header className={`page-header-menu ${isSticky ? 'sticky-active' : ''}`} style={isSticky ? { position: 'fixed', top: 0, width: '100%', boxShadow: 'var(--shadow-md)' } : {}}>
        <div className="container">
          {/* Logo visible only on mobile/sticky mode for brand persistence */}
          <Logo className="mobile-logo dark-theme-logo" />

          {/* Navigation Links */}
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
            <a href="#about-us" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a>
            <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Before & After</a>
            <a href="#why-choose-us" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose-us'); }}>Why Us</a>
            <a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a>
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </nav>

          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Navigation Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}
