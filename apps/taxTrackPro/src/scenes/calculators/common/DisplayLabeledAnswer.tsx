import React from "react";
import { Box } from "ui";


export const DisplayLabeledAnswer = (props: { label: string; value: number; }) => {
  return (
    <Box className="flex w-full justify-between">
      <p className="text-primary text-xl">{props.label}</p>
      <p className="text-xl text-black">
        NLe{props.value > 0 ? props.value.toLocaleString() : 0}
      </p>
    </Box>
  );
};
