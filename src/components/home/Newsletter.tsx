import { Send } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import robotHand from "../../assets/images/robot-hand.png";
const ContactUs = () => {
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
        <div className="grid items-center gap-16 lg:grid-cols-[280px_1fr]">
          {/* Robot Hand */}

          <motion.img
            src={robotHand}
            alt="Robot Hand"
            className="w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-lg"
          >
            <span className="rounded-full border border-white/30 px-5 py-2 text-xs text-white">
              Contact Us
            </span>

            <h2 className="mt-5 text-4xl font-black text-white">
              Talk to our AI Assessment Team
            </h2>

            <p className="mt-3 max-w-xl text-violet-100">
              Have questions about AI testing, certification, conformity
              assessments, or responsible AI? Send us a message and our team
              will get back to you.
            </p>

            <form className="mt-10 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-violet-200 outline-none transition focus:border-violet-300"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-violet-200 outline-none transition focus:border-violet-300"
                />
              </div>

              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-violet-200 outline-none transition focus:border-violet-300"
              />

              <select
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select an Inquiry Type
                </option>

                <option className="text-black">
                  AI Assessment
                </option>

                <option className="text-black">
                  Certification
                </option>

                <option className="text-black">
                  Risk & Impact Assessment
                </option>

                <option className="text-black">
                  AI Verification Tools
                </option>

                <option className="text-black">
                  General Question
                </option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your AI system or ask your question..."
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-violet-200 outline-none transition focus:border-violet-300"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-violet-700 transition hover:scale-105 hover:bg-violet-100"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;