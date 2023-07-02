import React from "react";
import { Box } from "./Box";
import { twMerge } from "tailwind-merge";

export const Divider = (props: { className?: string }) => {
  const { className } = props;
  const clsName = twMerge("h-0.5 mx-auto", className);
  return <Box className={clsName} />;
};


