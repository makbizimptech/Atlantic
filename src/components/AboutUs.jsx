import { ShieldCheck, CheckCircle2, Clock, Award } from 'lucide-react';

export default function AboutUs() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section about-section" id="about-us">
      <div className="container">
        <div className="about-grid-layout">
          
          {/* Left Column: Stacked / Overlapping Images */}
          <div className="about-visuals-col">
            <div className="about-image-wrapper">
              <img 
                src="/hero_cleaning.png" 
                alt="Atlantic Cleaning Team at Work" 
                className="about-img-primary"
              />
              <img 
                src="/cleaner.png" 
                alt="Atlantic Professional Cleaner" 
                className="about-img-secondary"
              />
              <div className="about-badge-floating">
                <Award size={28} className="about-badge-icon" />
                <div className="about-badge-text">
                  <span className="badge-num">15+</span>
                  <span className="badge-lbl">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="about-text-col">
            <span className="about-subtitle-badge">About Atlantic Cleaning</span>
            <h2 className="about-main-title">Your Trusted Partner in Premium Property Care</h2>
            
            <p className="about-description">
              Atlantic Cleaning Service is a premier, family-owned cleaning provider dedicated to delivering exceptional care for residential and commercial properties across New Jersey and New York. We treat your property like our own.
            </p>
            <p className="about-description-sub">
              That's why we employ elite, background-checked local professionals and use state-of-the-art eco-friendly products to clean windows, gutters, carpets, patios, and roofs with absolute precision.
            </p>

            {/* Feature Bullets */}
            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <div className="about-feature-info">
                  <h4>Fully Insured & Bonded</h4>
                  <p>Rest easy knowing your property is covered by comprehensive liability protection.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <CheckCircle2 size={22} />
                </div>
                <div className="about-feature-info">
                  <h4>100% Satisfaction Guarantee</h4>
                  <p>If you're not completely satisfied, we return to make it right for free.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <Clock size={22} />
                </div>
                <div className="about-feature-info">
                  <h4>Reliable & Punctual Service</h4>
                  <p>We arrive on time, fully equipped, and complete the job on schedule.</p>
                </div>
              </div>
            </div>

            <button className="btn btn-yellow about-cta-btn" onClick={handleScrollToContact}>
              Get Free Estimate
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
