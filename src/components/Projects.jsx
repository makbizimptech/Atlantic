import { useState } from 'react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Corporate Lobby Service',
    category: 'COMMERCIAL',
    img: '/project_lobby.png',
    desc: 'Deep floor polish and glass panels care'
  },
  {
    id: 2,
    title: 'Spotless Residential Kitchen',
    category: 'RESIDENTIAL',
    img: '/project_kitchen.png',
    desc: 'Cabinet, marble, and appliance sanitization'
  },
  {
    id: 3,
    title: 'Beige Living Room Care',
    category: 'RESIDENTIAL',
    img: '/project_living_beige.png',
    desc: 'Upholstery maintenance and detail vacuuming'
  },
  {
    id: 4,
    title: 'Modern Lounge Steam Clean',
    category: 'RESIDENTIAL',
    img: '/project_living_grey.png',
    desc: 'Sofa cleaning and dust disinfection'
  },
  {
    id: 5,
    title: 'Premium Apartment Bedroom',
    category: 'APARTMENT',
    img: '/project_bedroom.png',
    desc: 'Sheet changing and complete dusting'
  },
  {
    id: 6,
    title: 'Garden Lounge Pressure Wash',
    category: 'RESIDENTIAL',
    img: '/project_living_garden.png',
    desc: 'Window panels and tile cleaning'
  },
  {
    id: 7,
    title: 'Luxury Suite Deep Clean',
    category: 'APARTMENT',
    img: '/project_bedroom_green.png',
    desc: 'Balcony and high-end surface polishing'
  },
  {
    id: 8,
    title: 'High-Rise Window Cleaning',
    category: 'COMMERCIAL',
    img: '/window_clean.png',
    desc: 'Squeegee streak-free exterior window wash'
  },
  {
    id: 9,
    title: 'Deluxe Carpet Cleaning',
    category: 'RESIDENTIAL',
    img: '/carpet_clean.png',
    desc: 'Hot-water extraction carpet renew'
  },
  {
    id: 10,
    title: 'Apartment Patio Wash',
    category: 'APARTMENT',
    img: '/patio_clean.png',
    desc: 'Faux-wood patio scrub and pressure wash'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container" style={{ paddingBottom: '30px' }}>
        <h2 className="section-title h-decor text-center">Our Projects</h2>
        
        {/* Category Filters */}
        <div className="projects-filter-nav">
          <button 
            className={`projects-filter-btn ${filter === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilter('ALL')}
          >
            All
          </button>
          <button 
            className={`projects-filter-btn ${filter === 'RESIDENTIAL' ? 'active' : ''}`}
            onClick={() => setFilter('RESIDENTIAL')}
          >
            Residential
          </button>
          <button 
            className={`projects-filter-btn ${filter === 'COMMERCIAL' ? 'active' : ''}`}
            onClick={() => setFilter('COMMERCIAL')}
          >
            Commercial
          </button>
          <button 
            className={`projects-filter-btn ${filter === 'APARTMENT' ? 'active' : ''}`}
            onClick={() => setFilter('APARTMENT')}
          >
            Apartment
          </button>
        </div>
      </div>

      {/* Grid of Projects (Edge to Edge) */}
      <div className="projects-grid-fullwidth">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projects-item-box">
            <img src={project.img} alt={project.title} />
            <div className="projects-item-overlay">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
