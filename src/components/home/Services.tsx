import { motion } from "framer-motion";
import ServicesCarousel from "./ServiceCarousel";
import Container from "../common/Container";

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#CFB7E7] py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full border-[20px] border-violet-200/40" />

      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full border-[30px] border-violet-200/30" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-violet-300 bg-violet-100 px-5 py-2 text-sm font-medium text-violet-700">
            Services
          </span>

          <h2 className="font-heading mt-5 text-4xl font-bold text-[#2A084E] md:text-5xl">
            What We Offer{" "}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We provide independent testing, assessment, and verification
            services to help organizations build safer, more secure, and
            responsible AI and software systems.
          </p>
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <ServicesCarousel />
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;