import type { PricingPlan } from "../types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    title: "Transparent Pricing",
    subtitle: "Predictable, value-driven investment.",
    button: "Get Started",
    highlighted: true,
    sections: [
      {
        title: "THINK Ecosystem Built",
        items: [
          "10% of total project cost",
        ],
      },
      {
        title: "Externally Authored Tech:",
        items: [
          "15% of total project cost",
        ],
      },
    ],
  },

  {
    title: "Continuous Reassessment",
    subtitle: "Continuous, long-term trust.",
    button: "Get Started",
    sections: [
      {
        title: "90-day Calibration",
        items: [
          "Early post-launch optimization check.",
        ],
      },
      {
        title: "180-day Annual Plan",
        items: [
          "Advanced security and compliance re-certification.",
        ],
      },
    ],
  },
];