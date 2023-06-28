import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { SetNonNullable } from "type-fest";
import { Box } from "./Box";

const inputRootStyles = cva(
  "appearance-none text-base p-3 flex w-max rounded gap-1 outline-none border-0",
  {
    variants: {
      intent: {
        primary: "text-textPrimary bg-primary",
        secondary: "text-textSecondary bg-secondary",
      },
      variant: {
        filled: "",
        outlined: "ring-1 bg-transparent",
        text: "bg-transparent, ring-0 focus:ring-0",
      },
      size: {
        sm: "py-1 px-2 h-6 text-xs",
        md: "py-1 px-3 h-8",
        lg: "py-2 px-4 h-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "outlined",
        className: "ring-primary text-primary",
      },
      {
        intent: "secondary",
        variant: "outlined",
        className: "ring-secondary text-secondary",
      },
      { intent: "primary", variant: "text", className: "text-primary" },
      { intent: "secondary", variant: "text", className: "text-secondary" },
    ],
  }
);

const inputStyles = cva(
  "appearance-none text-base p-3 flex w-max rounded gap-1 outline-none border-0",
  {
    variants: {
      intent: {
        primary: "text-textPrimary bg-primary",
        secondary: "text-textSecondary bg-secondary",
      },
      variant: {
        outlined: "ring-1 bg-transparent",
      },
      size: {
        sm: "py-1 px-2 h-6 text-xs",
        md: "py-1 px-3 h-8",
        lg: "py-2 px-4 h-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "outlined",
        className: "ring-primary text-primary",
      },
      {
        intent: "secondary",
        variant: "outlined",
        className: "ring-secondary text-secondary",
      },
    ],
  }
);

export type InputFieldVariantsProps = VariantProps<typeof inputStyles>;

export interface InputProps
  extends SetNonNullable<InputFieldVariantsProps>,
    HTMLAttributes<HTMLInputElement> {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  containerClassName?: string;
}

export const InputField = (props: InputProps) => {
  const {
    startElement,
    endElement,
    variant,
    className,
    containerClassName,
    intent,
    size,
    ...rest
  } = props;
  const inputClasses = twMerge(
    inputStyles({ variant: variant, intent, size }),
    className
  );
  const inputRootClasses = twMerge(
    inputRootStyles({ variant: variant, intent, size }),
    containerClassName
  );
  return (
    <Box className={inputRootClasses}>
      {startElement && <Box className="box-border">{startElement}</Box>}
      <input className={inputClasses} {...rest} />
      {endElement && <Box className="box-border">{endElement}</Box>}endElement
    </Box>
  );
};
