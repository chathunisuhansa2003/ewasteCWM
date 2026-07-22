import './TestimonialCard.css';

function TestimonialCard({ quote, author, role, avatar }) {
  return (
    <blockquote className="testimonial-card">
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <footer className="testimonial-card__author">
        {avatar && (
          <img src={avatar} alt={author} className="testimonial-card__avatar" />
        )}
        <div>
          <cite className="testimonial-card__name">{author}</cite>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </footer>
    </blockquote>
  );
}

export default TestimonialCard;
