import Hero from '../components/Hero/Hero';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <Hero
        title="Get in Touch"
        subtitle="Have a question or want to work together? We would love to hear from you."
        ctaText="Scroll to Form"
        ctaLink="#contact-form"
      />

      <section id="contact-form" className="section">
        <div className="container contact__wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <button type="submit" className="contact__submit">
              Send Message
            </button>
          </form>

          <div className="contact__info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> hello@nexora.tech</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
