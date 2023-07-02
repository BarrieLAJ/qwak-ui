import React, { useEffect, useState } from "react";
import { checkInputValue } from "./utils";
import { Box, InputField, InputProps } from "ui";

interface LabelInputFieldProps extends InputProps {
  htmlFor?: string;
  label: string;
}
export const LabeledInputField = (props: LabelInputFieldProps) => {
  const { htmlFor, label, value, ...inputProps } = props;
  const [val, setVal] = useState(value);
  useEffect(() => {
    if (value === 0 || value === null || value === undefined) {
      setVal("");
    } else {
      setVal(value);
    }
  }, [value]);
  return (
    <Box className="flex w-full flex-row items-center gap-4 md:flex-col">
      <label className="min-w-[200px] flex-shrink-0 text-lg" htmlFor={htmlFor}>
        {props.label}:
      </label>
      <InputField
        fullWidth
        inputSize="lg"
        value={!checkInputValue(val as string) ? undefined : value === 0 ? "" : value}
        {...inputProps} />
    </Box>
  );
};
