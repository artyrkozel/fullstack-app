import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

export enum ButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINE = "outline",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({
  className,
  children,
  variant = "primary",
  isLoading,
  ...rest
}) => {

  return (
    <button className={cn(buttonVariants({ variant, className }))} {...rest}>
      {isLoading ? "loading..." : children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "w-full text-[14px] pointer py-[10px] px-6 font-semibold rounded-xl transition ease-in-out delay-30 capitalize",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-secondary hover:bg-secondary hover:text-white",
        secondary:
          "bg-secondary text-white hover:bg-primary hover:text-secondary",
        clear: "bg-clear",
        outline: "border",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);