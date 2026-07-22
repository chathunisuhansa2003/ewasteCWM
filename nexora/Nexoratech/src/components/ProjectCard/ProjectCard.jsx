import './ProjectCard.css';

function ProjectCard({ image, title, category, description }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card__content">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
