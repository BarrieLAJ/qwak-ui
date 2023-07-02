"use-client";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { SetNonNullable } from "type-fest";
import { Box } from "./Box";

const buttonStyles = cva(
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

export type ButtonVariantsProps = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends Omit<ButtonOrLinkProps, "size">,
    SetNonNullable<ButtonVariantsProps> {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    startElement,
    endElement,
    intent,
    size,
    fullWidth,
    className,
    children,
    variant,
    ...rest
  } = props;
  const buttonClasses = twMerge(
    buttonStyles({ intent, size, fullWidth, variant }),
    className
  );
  return (
    <ButtonORLink className={buttonClasses} {...rest}>
      {startElement && <Box className="box-border">{startElement}</Box>}
      {children}
      {endElement && <Box className="box-border">{endElement}</Box>}
    </ButtonORLink>
  );
};

type ButtonOrLinkProps = {
  as?: React.ComponentType<ButtonOrLinkProps["asProps"]>;
  // | ((props: ButtonOrLinkProps["asProps"]) => React.ReactNode);
  href?: string;
  asProps?: any;
} & HTMLAttributes<HTMLButtonElement & HTMLAnchorElement>;

const ButtonORLink = (props: ButtonOrLinkProps) => {
  const { as, href, asProps, ...rest } = props;
  if (href || as) {
    if (as) {
      // if (typeof as == "function") {
      //   return as(asProps) as React.ReactNode;
      // } else {
      const Comp = as;
      return <Comp {...props} {...asProps} />;
      // }
    } else {
      return <a href={href} {...props} />;
    }
  }

  return <button {...rest} />;
};
