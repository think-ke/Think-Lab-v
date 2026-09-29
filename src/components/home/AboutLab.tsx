import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

import VennDiagram from "./VennDiagram";

const AboutLab = () => {
  return (
    <section
      id="about"
      className="relative isolate z-10 overflow-hidden bg-white py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.35fr]">
          {/* LEFT — heading */}
          <div>
            <SectionHeading
              badge="THE LAB"
              title="What is Lab?"
              subtitle="Equip your organization with elite maturity assessments and intelligent guardrails."
              centered={false}
            />

            <div className="mt-8 flex">
              <a
                href="https://cop.think.ke/media/blogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>About Lab</Button>
              </a>
            </div>
          </div>

          {/* RIGHT — interactive Venn diagram */}
          <div className="relative">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-500/70">
              Hover a region to explore
            </p>

            <VennDiagram className="max-w-[600px]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutLab;