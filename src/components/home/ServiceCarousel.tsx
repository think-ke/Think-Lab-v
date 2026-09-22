import { services } from "../../constants/services";
import ServiceCard from "./ServiceCard";

const ServicesCarousel = () => {
  const items = [...services, ...services];

  return (
    <section id="services" className="relative overflow-hidden">
      <div
        className="carousel flex gap-5 py-3 hover:[animation-play-state:paused]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {items.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            service={service}
            index={index % services.length}
          />
        ))}
      </div>

      <style>{`
        .carousel {
          animation: servicesScroll 45s linear infinite;
          width: max-content;
        }
        @keyframes servicesScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ServicesCarousel;