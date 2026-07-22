import CountUp from "react-countup";
import "./LiveImpactBanner.css";

export default function LiveImpactBanner() {
  return (
    <section className="impact-banner">
      <div className="impact-container">

        <h2 className="impact-title">
          🌍 Live Impact
        </h2>

        <div className="impact-grid">

          <div className="impact-card">
            <CountUp
              start={0}
              end={15247}
              duration={3}
              separator=","
            />
            +
            <p>Clients</p>
          </div>

          <div className="impact-card">
            <CountUp
              start={0}
              end={268}
              duration={3}
            />
            +
            <p>Industries</p>
          </div>

          <div className="impact-card">
            <CountUp
              start={0}
              end={81452}
              duration={3}
              separator=","
            />
            <span> Tons</span>
            <p>E-Waste Processed</p>
          </div>

        </div>
      </div>
    </section>
  );
} 