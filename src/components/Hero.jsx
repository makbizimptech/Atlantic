import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/hero_cleaning.png',
    tagline: 'PREMIUM CLEANING & REPAIRS IN NJ & NY',
    title: 'Eco-Friendly Cleaning Services',
    desc: 'Atlantic Cleaning Service delivers exceptional residential & commercial care. Fully insured professionals specializing in window cleaning, power washing, gutter solutions, and winter services.',
    btnText: 'Contact Us Now',
    target: 'contact'
  },
  {
    image: '/patio_clean.png',
    tagline: 'A CARING CLEANING TEAM',
    title: 'Professional Home & Patio Restoration',
    desc: 'Get your patios re-sanded, gutters cleaned, and driveways power-washed. We bring back the original shine of your property.',
    btnText: 'About Us',
    target: 'about-us'
  },
  {
    image: '/gutter_clean.png',
    tagline: 'SPEND TIME ON WHAT REALLY MATTERS',
    title: '15% Off Your First Cleaning Service',
    desc: 'Serving New Jersey & New York with quality services, professional staff, and 100% satisfaction guaranteed. Get your free custom quote today!',
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
