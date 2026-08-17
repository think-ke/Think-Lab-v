import { services } from "../../constants/services";
import ServiceCard from "./ServiceCard";

const ServicesCarousel = () => {

  const items = [...services, ...services];

  return (
    <section
      id="services"
      className="relative mt-16 overflow-hidden"
    >
      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-30 bg-gradient-to-r from-[#F5F0FA] to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-30 bg-gradient-to-l from-[#F5F0FA] to-transparent" />

      <div
        className="
        carousel
        flex
        gap-8
        py-4
        hover:[animation-play-state:paused]
        "
      >
        {items.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            service={service}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesCarousel;