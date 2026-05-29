import { Star } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="section why-us-redesign-section" id="why-choose-us">
      <div className="container">

        {/* Why Our Customers Choose Us Section */}
        <div style={{ marginTop: '40px' }}>
          <h2 className="section-title h-decor text-center">Why Our Customers Choose Us?</h2>

          <div className="why-us-grid-redesign">
            {/* Left Column (Right-aligned text) */}
            <div className="why-us-column left-column">
              <div className="why-us-item text-right">
                <h3 className="why-us-item-title">We Are Experts</h3>
                <p className="why-us-item-desc">
                  and dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.
                </p>
              </div>
              <div className="why-us-item text-right" style={{ marginTop: '40px' }}>
                <h3 className="why-us-item-title">We Are Committed</h3>
                <p className="why-us-item-desc">
                  to our customers and are guided in all we do by their needs.
                </p>
              </div>
            </div>

            {/* Center Column (Green Ribbon Badge) */}
            <div className="why-us-center-col">
              <div className="why-us-ribbon-container">
                <div className="why-us-ribbon-hanger-line"></div>
                <div className="why-us-ribbon-badge">
                  <div className="ribbon-stars top-stars">
                    <span className="star-wrapper s1"><Star size={8} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s2"><Star size={12} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s3"><Star size={16} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s4"><Star size={12} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s5"><Star size={8} fill="white" stroke="none" /></span>
                  </div>
                  
                  <div className="ribbon-text-main">THE BEST</div>
                  <div className="ribbon-text-sub">Cleaning Service</div>
                  
                  <div className="ribbon-stars bottom-stars">
                    <span className="star-wrapper s1"><Star size={8} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s2"><Star size={12} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s3"><Star size={16} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s4"><Star size={12} fill="white" stroke="none" /></span>
                    <span className="star-wrapper s5"><Star size={8} fill="white" stroke="none" /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Left-aligned text) */}
            <div className="why-us-column right-column">
              <div className="why-us-item text-left">
                <h3 className="why-us-item-title">We Are Complete</h3>
                <p className="why-us-item-desc">
                  and seek to provide exceptional service and engage in proactive behavior.
                </p>
              </div>
              <div className="why-us-item text-left" style={{ marginTop: '40px' }}>
                <h3 className="why-us-item-title">We Are Driven</h3>
                <p className="why-us-item-desc">
                  to pursue the highest standards and continuously improve in all aspects of our business.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
