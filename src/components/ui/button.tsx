import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(props: ComponentPropsWithoutRef<"button">) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={twMerge(
        "bg-primary hover:bg-primary-hover text-dark-bg px-8 py-3 rounded-lg font-semibold transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
