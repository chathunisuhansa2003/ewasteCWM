import Hero from '../components/Hero/Hero';
import { team } from '../data/team';
import './About.css';

function About() {
  return (
    <div className="about">
      <Hero
        title="About Nexora Technologies"
        subtitle="We are a team of passionate technologists dedicated to delivering exceptional digital experiences."
        ctaText="Meet the Team"
        ctaLink="#team"
      />

      <section className="section">
        <div className="container about__intro">
          <h2>Our Mission</h2>
          <p>
            At Nexora Technologies, we believe technology should empower businesses
            to achieve more. Since our founding, we have partnered with companies
            of all sizes to build solutions that drive real results.
          </p>
        </div>
      </section>

      <section id="team" className="section section--alt">
        <div className="container">
          <h2 className="section__title">Our Team</h2>
          <div className="about__team">
            {team.map((member) => (
              <article key={member.id} className="team-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
