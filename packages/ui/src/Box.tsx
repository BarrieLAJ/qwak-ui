import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { SetNonNullable } from "type-fest";

const boxStyles = cva("", {
  variants: {},
});

type BoxVariants = VariantProps<typeof boxStyles>;

export interface BoxProps
  extends BoxVariants,
    HtmlHTMLAttributes<HTMLDivElement> {}

export const Box = (props: BoxProps) => {
  const { className, ...rest } = props;
  const classNames = twMerge(boxStyles(), className);
  return <div {...rest} className={classNames} />;
};
