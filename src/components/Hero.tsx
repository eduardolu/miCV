import { useState } from 'react';

interface HeroProps {
  doorsOpen: boolean;
}

const particles = [
  { id: 1, left: 18, top: 24, delay: 0.2, duration: 7.2 },
  { id: 2, left: 31, top: 68, delay: 1.4, duration: 8.8 },
  { id: 3, left: 44, top: 18, delay: 2.1, duration: 7.6 },
  { id: 4, left: 57, top: 76, delay: 3.8, duration: 9.4 },
  { id: 5, left: 72, top: 32, delay: 0.9, duration: 6.8 },
  { id: 6, left: 84, top: 57, delay: 4.6, duration: 8.2 },
  { id: 7, left: 12, top: 74, delay: 5.1, duration: 9.8 },
  { id: 8, left: 25, top: 41, delay: 2.9, duration: 7.1 },
  { id: 9, left: 66, top: 16, delay: 6.3, duration: 8.5 },
  { id: 10, left: 79, top: 83, delay: 1.8, duration: 9.1 },
  { id: 11, left: 39, top: 88, delay: 4.2, duration: 6.9 },
  { id: 12, left: 91, top: 26, delay: 3.1, duration: 7.9 },
];

export default function Hero({ doorsOpen }: HeroProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section className={`hero ${doorsOpen ? 'splitting' : ''}`}>
      <div className="hero-background">
        <div className="hero-gradient-orb hero-orb-1" />
        <div className="hero-gradient-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <h1 className="sr-only">Eduardo Lu - Full Stack Developer en Madrid</h1>
        <div className="hero-particles">
          {particles.map((particle) => (
            <div 
              key={particle.id} 
              className="particle" 
              style={{ 
                left: `${particle.left}%`, 
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }} 
            />
          ))}
        </div>

        <div 
          className="logo-container"
        >
          <div 
            className="logo-single-circle"
            style={{ 
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="hero-logo-half hero-logo-half-left"
            />
            <div
              className="hero-logo-half hero-logo-half-right"
            />
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll para entrar</span>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>

      <div className={`door-left ${doorsOpen ? 'open' : ''}`}>
        <div className="door-logo-half door-logo-half-left" />
      </div>
      <div className={`door-right ${doorsOpen ? 'open' : ''}`}>
        <div className="door-logo-half door-logo-half-right" />
      </div>
    </section>
  );
}
