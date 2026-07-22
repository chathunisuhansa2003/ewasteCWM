// src/pages/Home.jsx

import "./Home.css";
import LiveImpactBanner from "../components/LiveImpactBanner";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">SRI LANKA’S ONLY BOI & CEA APPROVED SCIENTIFIC E-WASTE PROCESSING FACILITY
           <br></br>
          </span>

          <h1>
            
            <span> Ceylon Waste Management Limited </span>
          </h1>

         
          <div className="hero-buttons">
            <button className="btn-primary">
              Schedule a Pickup
            </button>

            <button className="btn-secondary">
              Contact our Experts
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <h2>ABOUT CWM</h2>
          <br>
          </br>
         

          <p>
            <h3>Our Mission & Expertise</h3>
            Ceylon Waste Management stands at the forefront of responsible electronic waste management in Sri Lanka. Operating out of the Katunayake Export Processing Zone, we specialize in converting end-of-life electronics into high-value raw materials through certified, secure processes built on the Triple Bottom Line concept: People, Planet, and Profit.
          </p>
<br>
</br>
          <p>
            <h3>European Technology, Zero Landfill</h3>
            Powered by European refining technology, we operate a strict zero-landfill commitment. Complex waste streams are refined down to base and precious metals, while remaining by-products are repurposed into pigments for paints and ceramics. We offer local corporate clients a transparent, completely auditable alternative to exporting waste.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">

          <h2>High-Impact Feature Highlights</h2>

          <div className="service-grid">

            <div className="card">
              <h3>Mercury Waste Solution</h3>
              <p>
                Sri Lanka's single authorized solution provider for highly hazardous mercury-contaminated wastes, protecting public health and community ecosystems.
              </p>
            </div>

            <div className="card">
              <h3>Security Data Destruction</h3>
              <p>
                Don't just erase—crush and melt. We permanently incinerate corporate data storage devices and extract underlying precious metals. Turn risk into gold.
              </p>
            </div>

            <div className="card">
              <h3>Industry Intelligence</h3>
              <p>
                Track environmental analytics, carbon savings, and regulatory compliance through auditable certifications and performance metrics.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* our services */}
      <section className="features">

        <div className="container">

          <h2>OUR SERVICES</h2>

          <div className="feature-grid">

            <div className="feature">
              <h3>Security Data Destruction</h3>
              <p>
                Verifiable data zeroization preventing high-stakes corporate data leaks and financial reputation loss.
              </p>
            </div>

            <div className="feature">
              <h3>Precious Metal Refining</h3>
              <p>
                Sri Lanka’s only dedicated refinery extracting Gold, Silver, Platinum, and Palladium from electronic circuitry.
              </p>
            </div>

            <div className="feature">
              <h3>Panel TV & CRT Recycling</h3>
              <p>
                Specialized processing for hazardous Cathode Ray Tubes (CRT), monitors, and modern digital display devices.
              </p>
            </div>
<div className="feature">
              <h3>Mercury Management</h3>
              <p>
                Scientific isolation and chemical treatment workflows for highly regulated mercury components.
              </p>
            </div>

            <div className="feature">
              <h3>Bulb & Lighting Recycling</h3>
              <p>
                Authorized collection and complete eco-friendly solutions for commercial CFL and fluorescent bulbs.
              </p>
            </div>

            <div className="feature">
              <h3>Toner & Cartridges</h3>
              <p>
                High-volume sorting and structural recycling to reduce modern landfill accumulation.
              </p>
            </div>


          </div>

        </div>

      </section>

      {/* Statistics */}
      

      {/* Call To Action */}
      <section className="cta">

        <h2>Together We Can Create a Cleaner Future</h2>

        <p>
          Join our digital platform and contribute to responsible electronic
          waste management across Sri Lanka.
        </p>

        <button className="btn-primary">
          Contact Us
        </button>

      </section>

    </main>
  );
}

export default Home;