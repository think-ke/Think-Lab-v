import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

const MarketplaceCTA = () => {
  return (
    <section className="bg-white py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="max-w-4xl text-5xl font-black text-[#762CD4] leading-tight">
            Want to explore our Marketplace
            <br />
            of Verified Systems?
          </h2>

          <div className="mt-10">
            <Button>
              Click Here

              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MarketplaceCTA;