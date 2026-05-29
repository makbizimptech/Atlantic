import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    quote: "I would be glad to act as a phone reference for this company. Atlantic Cleaning Service did a wonderful job clearing my gutters and power washing my siding. Outstanding customer service and absolute professionals!",
    author: "Estela Thomas",
    location: "Paramus, New Jersey",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "They pressure washed my brick patio and re-sanded the joints. It looks completely brand new! Their window cleaning is also streaks-free and clear. I highly recommend their seasonal maintenance packages.",
    author: "George Martinez",
    location: "Brooklyn, New York",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "Super reliable snow removal this winter. They cleared our commercial parking lot and salted the pathways before our business opened. Extremely friendly crew and transparent estimation calculator!",
    author: "David Vance",
    location: "Hoboken, New Jersey",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <>
      {/* Facts Counter Section */}
      <section className="facts-carousel-section">
        <div className="container">
          <div className="facts-grid-redesign">
            
            <div className="fact-item-redesign">
              <div className="fact-item-image-circle">
                <img src="/hero_cleaning.png" alt="Orders Done" />
                <div className="fact-item-bg-overlay"></div>
                <div className="fact-item-text-container">
                  <span className="fact-item-val">1,225</span>
                  <span className="fact-item-label">Orders</span>
                </div>
              </div>
            </div>

            <div className="fact-item-redesign">
              <div className="fact-item-image-circle">
                <img src="/patio_clean.png" alt="Happy Clients" />
                <div className="fact-item-bg-overlay"></div>
                <div className="fact-item-text-container">
                  <span className="fact-item-val">843</span>
                  <span className="fact-item-label">Clients</span>
                </div>
              </div>
            </div>

            <div className="fact-item-redesign">
              <div className="fact-item-image-circle">
                <img src="/gutter_clean.png" alt="Houses Detailed" />
                <div className="fact-item-bg-overlay"></div>
                <div className="fact-item-text-container">
                  <span className="fact-item-val">315</span>
                  <span className="fact-item-label">Houses</span>
                </div>
              </div>
            </div>

            <div className="fact-item-redesign">
              <div className="fact-item-image-circle">
                <img src="/patio_dirty.png" alt="Followers" />
                <div className="fact-item-bg-overlay"></div>
                <div className="fact-item-text-container">
                  <span className="fact-item-val">237</span>
                  <span className="fact-item-label">Followers</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials & Offers section */}
      <section className="section offer-section" id="testimonials">
        <div className="container">
          
          {/* Testimonials Slider */}
          <div>
            <h2 className="section-title h-decor text-center">What Our Clients Say</h2>
            <p className="section-subtitle text-center">
              Read stories of satisfaction from homeowners and business managers who trust Atlantic.
            </p>

            <div className="testimonials-slider" style={{ maxWidth: '700px' }}>
              <div className="testimonial-item cutted">
                <div className="testimonial-item-inside">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <img 
                      src={TESTIMONIALS_DATA[currentSlide].avatar} 
                      alt={TESTIMONIALS_DATA[currentSlide].author} 
                      className="testimonial-author-avatar"
                      style={{ margin: 0, width: '50px', height: '50px' }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--dark-color)' }}>
                        {TESTIMONIALS_DATA[currentSlide].author}
                      </h3>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {TESTIMONIALS_DATA[currentSlide].location}
                      </span>
                    </div>
                  </div>
                  <p>
                    {TESTIMONIALS_DATA[currentSlide].quote}
                  </p>
                </div>
              </div>

              {/* Nav Arrows */}
              <button className="testimonial-nav-btn testimonial-nav-prev" onClick={prevSlide} aria-label="Previous Testimonial">
                <ChevronLeft size={20} />
              </button>
              <button className="testimonial-nav-btn testimonial-nav-next" onClick={nextSlide} aria-label="Next Testimonial">
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="testimonial-dots">
                {TESTIMONIALS_DATA.map((_, index) => (
                  <div 
                    key={index}
                    className={`testimonial-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
