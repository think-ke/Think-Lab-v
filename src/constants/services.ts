import type { Service } from "../types/service";

import {
  FlaskConical,
  ShieldCheck,
  ClipboardCheck,
  BadgeCheck,
  TriangleAlert,
  GraduationCap,
} from "lucide-react";

export const services: Service[] = [
  {
    title: "AI Testing",
    description:
      "Get your AI systems evaluated to ensure safety and compliance.",
    icon: FlaskConical,
  },

  {
    title: "Conformity Assessment",
    description:
      "Assess compliance with standards and regulatory requirements.",
    icon: ClipboardCheck,
  },

  {
    title: "AI Assessment Kit",
    description:
      "Practical tools and checklists for end-to-end AI system evaluation.",
    icon: ShieldCheck,
  },

  {
    title: "Certification",
    description:
      "Get certified and demonstrate your commitment to responsible AI.",
    icon: BadgeCheck,
  },

  {
    title: "Risk & Impact Assessment",
    description:
      "Identify, analyze and mitigate risks throughout the AI lifecycle.",
    icon: TriangleAlert,
  },

  {
    title: "Training",
    description:
      "Build skills and awareness through expert-led AI training programs.",
    icon: GraduationCap,
  },
];