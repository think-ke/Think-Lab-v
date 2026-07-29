import type { Phase } from "../../types/phase";
import { CheckCircle2 } from "lucide-react";

interface Props {
  phase: Phase;
}

const PhaseCard = ({ phase }: Props) => {
  return (
    <div className="relative pl-12">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#602191] text-white">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      <span className="text-sm font-bold text-[#602191]">
        {phase.number}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        Phase {phase.number} — {phase.title}
      </h3>

      <p className="mt-3 text-gray-500">
        {phase.description}
      </p>

      <ul className="mt-5 space-y-2">
        {phase.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-2 text-gray-600"
          >
            <CheckCircle2
              size={18}
              className="text-violet-600"
            />

            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhaseCard;