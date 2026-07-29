interface FloatingTagProps {
  title: string;
  className?: string;
}

const FloatingTag = ({ title, className = "" }: FloatingTagProps) => {
  return (
    <div
      className={`
        absolute
        flex
        items-center
        gap-3
        rounded-full
        bg-fuchsia-600/30
        border
        border-fuchsia-300/30
        px-4
        py-3
        backdrop-blur-md
        shadow-xl
        ${className}
      `}
    >
      <div className="h-8 w-8 rounded-full bg-fuchsia-700 shadow-inner" />

      <span className="text-xs font-semibold text-white leading-tight">
        {title}
      </span>
    </div>
  );
};

export default FloatingTag;