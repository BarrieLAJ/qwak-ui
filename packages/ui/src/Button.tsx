"use-client";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentType, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { SetNonNullable } from "type-fest";

const buttonStyles = cva("font-lg p-3 m-4 block w-max", {
  variants: {
    intent: {
      primary: "text-white bg-blue-600",
      secondary: "",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
  compoundVariants: [{ intent: ["primary", "secondary"], className: "" }],
});

export type ButtonVariantsProps = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends Omit<ButtonOrLinkProps, "size">,
    SetNonNullable<ButtonVariantsProps> {}

export const Button = (props: ButtonProps) => {
  const { intent, size, fullWidth, className, ...rest } = props;
  const buttonClasses = twMerge(
    buttonStyles({ intent, size, fullWidth }),
    className
  );
  return <ButtonORLink className={buttonClasses} {...rest} />;
};

type ButtonOrLinkProps = {
  as?: string;
  href?: string;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

const ButtonORLink = (props: ButtonOrLinkProps) => {
  const { as, href, ...rest } = props;
  if (as || href) {
    return <a href={href} {...props} />;
  }

  return <button {...rest} />;
};
