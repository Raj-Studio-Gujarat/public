import { type SelectHTMLAttributes, forwardRef } from "react";

type Option = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Option[];
  error?: string;
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, options, error, id, className = "", placeholder, ...props },
    ref
  ) {
    const inputId = id ?? props.name;

    return (
      <label className="block space-y-2" htmlFor={inputId}>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          {label}
        </span>
        <select
          ref={ref}
          id={inputId}
          className={[
            "w-full rounded-[3px] border border-line bg-bg px-3 py-2.5",
            "text-base text-ink",
            "transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
            error ? "border-red-700" : "",
            className,
          ].join(" ")}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? <span className="block text-sm text-red-700">{error}</span> : null}
      </label>
    );
  }
);
