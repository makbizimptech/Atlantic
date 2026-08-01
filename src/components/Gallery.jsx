import { useState, useRef, useEffect } from 'react';
import { Eye, ArrowLeftRight } from 'lucide-react';

const IMAGES_DATA = {
  gutter: {
    before: '/home_powerwash_before.jpg',
    after: '/home_powerwash_after.jpg',
    title: 'Home Powerwash',
    desc: 'Deep cleaning of your home exterior, removing built-up dirt, grime, and mildew to restore your siding to its original beauty.'
  },
  patio: {
    before: '/patio_dirty.png',
    after: '/patio_clean.png',
    title: 'Patio Power Washing',
    desc: 'Deep pressure wash removing years of grime, green moss, and black mildew, restoring vibrant stone colors.'
  }
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('gutter');
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const activeImages = IMAGES_DATA[activeTab];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title h-decor text-center">See The Results</h2>
        <p className="section-subtitle text-center">
          Slide the handle left and right on the images below to see the dramatic difference our professional cleaning service makes.
        </p>

        <div className="gallery-block">
          <div className="gallery-grid">
            
            {/* Left Column: Details & Tabs */}
            <div>
              <div className="gallery-tabs">
                <button 
                  className={`gallery-tab ${activeTab === 'gutter' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('gutter'); setSliderPosition(50); }}
                >
                  Home Powerwash
                </button>
                <button 
                  className={`gallery-tab ${activeTab === 'patio' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('patio'); setSliderPosition(50); }}
                >
                  Patio Power Washing
                </button>
              </div>

              <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px', color: 'var(--dark-color)' }}>
                {activeImages.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '30px', lineHeight: '1.7' }}>
                {activeImages.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary-color)', fontWeight: '600' }}>
                <Eye size={20} />
                <span>Drag the slider to compare before and after</span>
              </div>
            </div>

            {/* Right Column: Sliding Image Widget */}
            <div 
              className="slider-container"
              ref={containerRef}
              onMouseDown={() => { isDragging.current = true; }}
              onTouchStart={() => { isDragging.current = true; }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <div 
                className="slider-img slider-after"
                style={{ backgroundImage: `url(${activeImages.after})` }}
              ></div>

              {/* Before Image (Foreground, clipped) */}
              <div 
                className="slider-img slider-before"
                style={{ 
                  backgroundImage: `url(${activeImages.before})`,
                  width: `${sliderPosition}%` 
                }}
              ></div>

              {/* Labels */}
              <div className="slider-img-label label-before">Before</div>
              <div className="slider-img-label label-after">After</div>

              {/* Slide Bar / Handle */}
              <div 
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="slider-handle-button">
                  <ArrowLeftRight size={16} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
