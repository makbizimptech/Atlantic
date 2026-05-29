import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div className="logo-logo" style={{ color: 'var(--white)', marginBottom: '20px' }}>
              <div className="logo-container">
                <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#2474FC" stroke="white" strokeWidth="4" />
                  <path d="M50 15L25 75H38L50 48L62 75H75L50 15Z" fill="white" />
                  <path d="M50 48L44 62H56L50 48Z" fill="#F8FAFC" />
                </svg>
                <span>Atlantic</span>
              </div>
            </div>
            <p className="footer-text">
              Providing premium residential & commercial window washing, power cleaning, gutter repairs, and winter safety services across NJ & NY. Fully insured with guaranteed satisfaction.
            </p>
            <div className="footer-social-links">
              <a 
                href="https://www.facebook.com/search/top/?q=Atlantic%20cleaning%20searvices%20LLC" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link" 
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://www.instagram.com/atlanticcleaningservices/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link" 
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="https://www.tiktok.com/@atlantic.cleaningservices" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link" 
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
              <li className="footer-link-item"><a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a></li>
              <li className="footer-link-item"><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Before & After</a></li>
              <li className="footer-link-item"><a href="#why-choose-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose-us'); }}>Why Choose Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-col-title">Contact Us</h3>
            <div className="footer-contact-item">
              <Phone size={18} />
              <a href="tel:5513758746">(551) 375-8746</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href="mailto:servicesatlanticcleaning@gmail.com">servicesatlanticcleaning@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>Mon-Sun: 8am - 10pm</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Serving New Jersey & New York</span>
            </div>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Atlantic Cleaning Service. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
