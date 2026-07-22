import './ServiceCard.css';

function ServiceCard({ icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </article>
  );
}

export default ServiceCard;
