import { motion } from "framer-motion";
import type { VerificationTool } from "../../types/Verification";

import Button from "../common/Button";
import DashboardMockup from "./DashboardMockup";
import FeatureItem from "./FeatureItem";

interface Props {
  tool: VerificationTool;
}

const VerificationCard = ({ tool }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <DashboardMockup />

      <div>
        <h3 className="text-3xl font-bold">
          {tool.title}
        </h3>

        <p className="mt-4 text-gray-500">
          {tool.description}
        </p>

        <div className="mt-8 space-y-6">
          {tool.features.map((feature, index) => (
            <FeatureItem
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>

        <div className="mt-10">
          <Button>
            {tool.button}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default VerificationCard;