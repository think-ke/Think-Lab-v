import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  icon = true,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        "hover:scale-105 active:scale-95",
        {
          "bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg hover:shadow-violet-500/40":
            variant === "primary",

          "border border-violet-300 bg-white text-violet-700":
            variant === "secondary",
        },
        className
      )}
    >
      {children}

      {icon && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-violet-600">
          <ArrowRight size={14} />
        </span>
      )}
    </button>
  );
};

export default Button;