import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { SetNonNullable } from "type-fest";
import { Box } from "./Box";

const inputRootStyles = cva(
  "appearance-none text-black text-base flex w-max items-center ring-1 ring-slate-500 focus-within:ring-2 rounded gap-1.5 outline-none border-2",
  {
    variants: {
      intent: {
        primary: "focus-within:ring-primary",
        secondary: "focus-within:ring-secondary",
      },
      variant: {
        outlined: "bg-transparent",
      },
      size: {
        sm: "py-1 px-1.5 h-6 text-xs",
        md: "py-1 px-2.5 h-8",
        lg: "py-1 px-3 h-10",
      },
      fullWidth: {
        true: "w-full",
      },
      error: {
        true: "ring-red-600"
      }
    },
    defaultVariants: {
      intent: "primary",
      variant: "outlined",
      size: "md"
    },
    compoundVariants: [],
  }
);

const inputStyles = cva(
  "appearance-none  text-base p-1 w-max rounded bg-transparent focus:outline-none gap-1",
  {
    variants: {
      intent: {
        primary: "bg-none",
        secondary: "bg-none",
      },
      variant: {
        outlined: "bg-transparent",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export type InputFieldVariantsProps = VariantProps<typeof inputRootStyles>;

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
    inputStyles({ variant: variant, intent }),
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
      {endElement && <Box className="box-border">{endElement}</Box>}
    </Box>
  );
};
