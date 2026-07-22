import { Link } from 'react-router-dom';
import './CTA.css';

function CTA({ title, description, buttonText = 'Contact Us', buttonLink = '/contact' }) {
  return (
    <section className="cta">
      <div className="cta__content">
        <h2 className="cta__title">{title}</h2>
        <p className="cta__description">{description}</p>
        <Link to={buttonLink} className="cta__button">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export default CTA;
