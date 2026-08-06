import type { PricingPlan } from "../../types/pricing";

interface Props {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: Props) => {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-gray-200
      bg-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      `}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold">
          {plan.title}
        </h3>

        <p className="mt-2 text-gray-500">
          {plan.subtitle}
        </p>

        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`
    mt-8
    w-full
    rounded-full
    py-4
    font-semibold
    text-white
    transition

    ${plan.highlighted
              ? "bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-[1.02]"
              : "bg-neutral-900 hover:bg-black"
            }
  `}
        >
          {plan.button}
        </button>

        <div className="mt-8 space-y-8">
          {plan.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-800">
                {section.title}
              </h4>

              <ul className="mt-3 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-500"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;