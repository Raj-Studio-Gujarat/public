import { type TextareaHTMLAttributes, forwardRef } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, id, className = "", ...props }, ref) {
    const inputId = id ?? props.name;

    return (
      <label className="block space-y-2" htmlFor={inputId}>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          {label}
        </span>
        <textarea
          ref={ref}
          id={inputId}
          className={[
            "min-h-32 w-full resize-y rounded-[3px] border border-line bg-bg px-3 py-2.5",
            "text-base text-ink placeholder:text-ink-soft/60",
            "transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
            error ? "border-red-700" : "",
            className,
          ].join(" ")}
          {...props}
        />
        {error ? <span className="block text-sm text-red-700">{error}</span> : null}
      </label>
    );
  }
);
