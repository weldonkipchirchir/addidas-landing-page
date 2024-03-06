import { ServiceCard } from "../components"
import { services } from "../constants"
function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
}

export default Services