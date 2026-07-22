import { Link } from 'react-router-dom';
import './Hero.css';

function Hero({ title, subtitle, ctaText = 'Get Started', ctaLink = '/contact' }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <Link to={ctaLink} className="hero__cta">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
