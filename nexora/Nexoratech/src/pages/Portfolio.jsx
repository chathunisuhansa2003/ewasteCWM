import Hero from '../components/Hero/Hero';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import CTA from '../components/CTA/CTA';
import { projects } from '../data/projects';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <Hero
        title="Our Portfolio"
        subtitle="Explore our recent work and see how we help clients achieve their goals."
      />

      <section className="section">
        <div className="container">
          <div className="portfolio__grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a Project in Mind?"
        description="We would love to hear about your next big idea."
      />
    </div>
  );
}

export default Portfolio;
