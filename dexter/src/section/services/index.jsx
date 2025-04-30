import { services } from "../../constants";
import "./index.scss";

const Services = () => {
  return (
    <section className="services" id="services">
    <div className="container">
      <h2 className="services__title">Our Services</h2>
      <p className="services__subtitle">
        From code to content — we craft complete digital experiences.
      </p>
      <div className="services__grid">
        <div className="services__column">
          <h3>Development</h3>
          {services.development.map((service, index) => (
            <div className="service-card" key={index}>
              <div>
                <h4 className="service-card__title">{service.title}</h4>
                <p className="service-card__description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services__column">
          <h3>Creative & Brand</h3>
          {services.creative.map((service, index) => (
            <div className="service-card" key={index}>
              <div>
                <h4 className="service-card__title">{service.title}</h4>
                <p className="service-card__description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services
