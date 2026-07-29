import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueItem = ({
  icon: Icon,
  title,
  description,
}: Props) => {
  return (
    <div className="relative flex gap-5 pl-12">
      <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 shadow-md">
        <Icon
          size={26}
          className="text-violet-700"
        />
      </div>

      <div className="ml-10">
        <h4 className="text-lg font-bold">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueItem;