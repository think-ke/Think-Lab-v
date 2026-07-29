interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
}: Props) => {
  return (
    <div
      className={`mb-12 ${
        centered ? "text-center" : ""
      }`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-violet-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-extrabold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;