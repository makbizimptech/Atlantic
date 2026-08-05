import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/hero_cleaning.png',
    tagline: 'PREMIUM CLEANING IN NJ & NY',
    title: 'Experts in Power Washing & Carpet Cleaning',
    desc: 'Atlantic Cleaning Service delivers exceptional residential & commercial care. We specialize in deep carpet cleaning and high-pressure power washing to make your property look brand new.',
    btnText: 'Contact Us Now',
    target: 'contact'
  },
  {
    image: '/patio_clean.png',
    tagline: 'RESTORE YOUR EXTERIOR',
    title: 'Professional Power Washing',
    desc: 'Get your patios, driveways, and siding professionally power-washed. We remove dirt, grime, and mildew to restore the original shine of your property.',
    btnText: 'About Us',
    target: 'about-us'
  },
  {
    image: '/carpet_clean.png',
    tagline: 'REVITALIZE YOUR FLOORS',
    title: 'Deluxe Carpet Cleaning',
    desc: 'Our hot-water extraction and deep cleaning methods remove stubborn stains and allergens, leaving your carpets fresh, soft, and renewed.',
    btnText: 'View Our Work',
    target: 'projects'
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveSlide((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [activeSlide]);

  const nextSlide = (e) => {
    e.preventDefault();
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-carousel" id="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hero-carousel-content">
            <div
              className="hero-badge"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--accent-yellow)',
                margin: '0 auto 20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              <Star size={16} fill="currentColor" />
              <span>{slide.tagline}</span>
            </div>
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
            <div className="hero-carousel-btn">
              <button
                className="btn"
                style={{
                  background: 'var(--accent-yellow)',
                  color: 'var(--dark-color)',
                  fontWeight: 700,
                  boxShadow: '0 4px 15px rgba(247, 189, 0, 0.3)',
                }}
                onClick={() => scrollToSection(slide.target)}
              >
                {slide.btnText} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Pagination */}
      <div className="hero-carousel-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`hero-carousel-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hero-carousel-arrows">
        <button
          className="hero-carousel-arrow"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="hero-carousel-arrow"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
