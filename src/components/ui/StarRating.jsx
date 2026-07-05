function Star({ fillPercent, index, sizeClass }) {
  const id = `star-fill-${index}`;

  return (
    <svg
      className={sizeClass}
      viewBox="0 0 20 20"
      aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fillPercent}%`} stopColor="#da8a0a" />
          <stop offset={`${fillPercent}%`} stopColor="#d6cfc4" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.6z"
      />
    </svg>
  );
}

export default function StarRating({
  rating,
  size = "md",
  showValue = true,
  valueClassName = "",
}) {
  const sizeClass =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  const formatted = rating.toLocaleString("id-ID", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {showValue ? (
        <span
          className={`font-bold tabular-nums text-[#1a100a] ${valueClassName || (size === "lg" ? "text-2xl" : "text-lg")}`}>
          {formatted}
        </span>
      ) : null}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => {
          const fill = Math.min(
            100,
            Math.max(0, (rating - index) * 100),
          );

          return (
            <Star
              key={index}
              index={index}
              fillPercent={fill}
              sizeClass={sizeClass}
            />
          );
        })}
      </div>
    </div>
  );
}
