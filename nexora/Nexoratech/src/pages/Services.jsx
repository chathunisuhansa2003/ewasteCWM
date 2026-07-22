import Hero from '../components/Hero/Hero';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import CTA from '../components/CTA/CTA';
import { services } from '../data/services';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <Hero
        title="Our Services"
        subtitle="Comprehensive technology solutions tailored to your business needs."
      />

      <section className="section">
        <div className="container">
          <div className="services__grid">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Need a Custom Solution?"
        description="We specialize in building tailored solutions for unique business challenges."
      />
    </div>
  );
}

export default Services;
