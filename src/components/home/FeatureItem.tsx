import { CheckCircle2 } from "lucide-react";

interface Props {
  number: number;
  text: string;
}

const FeatureItem = ({ number, text }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
        {String(number).padStart(2, "0")}
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle2
          size={18}
          className="text-violet-600"
        />

        <span className="text-gray-600">
          {text}
        </span>
      </div>
    </div>
  );
};

export default FeatureItem;