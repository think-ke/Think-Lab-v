import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import PricingCard from "./PricingCard";

import { pricingPlans } from "../../constants/pricing";

const InvestmentCycle = () => {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeading
          badge="INVESTMENT"
          title="Investment & Compliance Cycle"
          subtitle="Choose a pricing plan that grows with you. Start free and upgrade anytime for more features and support."
        />

        <div className="mx-auto mt-20 grid max-w-5xl gap-10 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              plan={plan}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InvestmentCycle;