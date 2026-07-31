import {
  ShieldCheck,
  Scale,
  Lock,
  BadgeCheck,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

import ValueItem from "./ValueItem";

import DashboardPreview from "../../assets/images/dashboard2.png";

const AboutLab = () => {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr_1fr]">
          {/* LEFT */}

          <div>
            <SectionHeading
              badge="THE LAB"
              title="What is Lab?"
              subtitle="Equip your organization with elite maturity assessments and intelligent guardrails."
              centered={false}
            />
          </div>

          {/* CENTER */}

          <div className="relative">
            <div className="absolute left-7 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-violet-400 to-violet-700" />

            <h3 className="font-heading mb-8 pl-12 text-xl font-black uppercase tracking-wide">
              WE ARE:
            </h3>

            <div className="space-y-7">
              <ValueItem
                icon={ShieldCheck}
                title="Safe AI"
                description="We evaluate AI systems for safety and reliability."
              />

              <ValueItem
                icon={Scale}
                title="Ethical AI"
                description="We promote fairness, transparency and accountability."
              />

              <ValueItem
                icon={Lock}
                title="Secure AI"
                description="We test for robustness and cybersecurity."
              />

              <ValueItem
                icon={BadgeCheck}
                title="Standards Aligned"
                description="Aligned with ISO/IEC 42001, NIST AI RMF and global best practices."
              />
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <div className="overflow-hidden rounded-3xl bg-violet-50 shadow-xl">
              <img
                src={DashboardPreview}
                alt="Dashboard Preview"
                className="w-full object-cover"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button>
                About Lab
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutLab;