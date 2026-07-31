import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

import DashboardMockup from "./DashboardMockup";
import PhaseCard from "./PhaseCard";

import { phases } from "../../constants/phases";

const CapFramework = () => {
  return (
    <section className="bg-[#fafafa] py-28">
      <Container>
        <SectionHeading
          badge="CAP"
          title="The CAP Framework: Certify Your AI"
          subtitle="THINK LAB uses the Conformity Assessment Process (CAP) to evaluate already-built AI systems."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <h2 className="text-2xl font-black leading-tight">
              Our Proven 3 Step Blueprint
              
              for Bulletproof AI
            </h2>

            <p className="mt-5 max-w-lg text-gray-500">
              Unlock market-ready innovation with our elite three-phase AI safety, security, and conformity certification.
            </p>

            <div className="mt-14 space-y-16 border-l-2 border-violet-200 pl-8">
              {phases.map((phase) => (
                <PhaseCard
                  key={phase.number}
                  phase={phase}
                />
              ))}
            </div>

            <div className="mt-12">
              <Button>
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT */}

          <DashboardMockup />
        </div>
      </Container>
    </section>
  );
};

export default CapFramework;