import { PhoneCall, Mail, Clock } from 'lucide-react';

export default function CallUs() {
  return (
    <section className="call-us-section" id="contact">
      <div className="container">
        <div className="call-us-card">
          <div className="call-us-content">
            <h2 className="call-us-title">Ready for a Cleaner, Brighter Property?</h2>
            <p className="call-us-desc">
              Contact us today for a free, no-obligation estimate. Our team is ready to deliver premium cleaning services tailored to your needs.
            </p>
            
            <div className="call-us-methods">
              <div className="contact-method-box">
                <div className="contact-icon-circle">
                  <PhoneCall size={24} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Call Us Directly</span>
                  <a href="tel:5513758746" className="contact-value">(551) 375-8746</a>
                </div>
              </div>
              
              <div className="contact-method-box">
                <div className="contact-icon-circle">
                  <Mail size={24} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:servicesatlanticcleaning@gmail.com" className="contact-value email-text">servicesatlanticcleaning<br/>@gmail.com</a>
                </div>
              </div>

              <div className="contact-method-box">
                <div className="contact-icon-circle">
                  <Clock size={24} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Business Hours</span>
                  <span className="contact-value text-normal">Mon - Sun: 8am - 10pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
