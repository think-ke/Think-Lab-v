import { Send } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#602191] to-[#7F4A9D] py-20">
      {/* Background Decorations */}

      <div className="absolute left-16 top-0 h-60 w-60 rounded-full border-[18px] border-dashed border-violet-400/30" />

      <div className="absolute right-12 bottom-6 h-40 w-40 rounded-full opacity-30">
        <div
          className="h-full w-full rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#A78BFA 0px,#A78BFA 2px,transparent 2px,transparent 6px)",
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[260px_1fr]">
          {/* Robot Hand */}

          <img
            src="src/assets/images/robot_hand.png"
            alt="Robot Hand"
            className="w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-white/30 px-5 py-2 text-xs text-white">
              Subscription
            </span>

            <h2 className="mt-6 text-5xl font-black text-white">
              Subscribe to the forum
            </h2>

            <p className="mt-3 text-violet-100">
              Join and be part of the future of AI.
            </p>

            <div className="mt-8 flex overflow-hidden rounded-full bg-white">
              <input
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent px-8 py-5 outline-none"
              />

              <button className="px-7 text-violet-700">
                <Send />
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;