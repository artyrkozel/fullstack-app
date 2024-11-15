"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/app/utils/cn";

interface IFormControl {
  label?: string;
  className?: string;
  errorMessage?: string;
  name?: string;
  children: ReactNode;
}

export const FormControl: FC<IFormControl> = ({
  children,
  className,
  label,
  errorMessage,
  name,
}) => {
  return (
    <div className={cn("inline-flex flex-col w-full relative", className)}>
      {label && (
        <label
          className={cn(
            "uppercase text-xs ml-4 mb-2 font-medium text-grey-dark"
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {children}
      {errorMessage && (
        <span className="relative block px-2 text-red-500 min-h-5 text-left text-red top-2 left-1 text-xs">
          {errorMessage}
        </span>
      )}
    </div>
  );
};