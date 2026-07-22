import Hero from '../components/Hero/Hero';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import CTA from '../components/CTA/CTA';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero
        title="Building the Future of Technology"
        subtitle="We deliver innovative digital solutions that help businesses grow, scale, and succeed in the modern world."
      />

      <section className="section">
        <div className="container">
          <h2 className="section__title">Our Services</h2>
          <div className="grid grid--3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Featured Projects</h2>
          <div className="grid grid--2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">What Our Clients Say</h2>
          <div className="grid grid--3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your vision to life."
      />
    </div>
  );
}

export default Home;
