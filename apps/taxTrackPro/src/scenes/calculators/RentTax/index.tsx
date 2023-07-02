import React, { useState } from "react";
import { Box, Button, Divider } from "ui";
import { LabeledInputField } from "../common/LabeledInputField";
import { commaStringToNumber } from "../common/utils";
import { DisplayLabeledAnswer } from "../common/DisplayLabeledAnswer";

const RentTax = () => {
  const [yearlyRent, setYearlyRent] = useState(0);
  const [rentTax, setRentTax] = useState(0);

  const calculate = () => {
    const rent = yearlyRent - 7200;
    const tax = rent - rent * 0.1;
    setRentTax(yearlyRent > 0 ? tax * 0.1 : 0);
  };
  const clearInputs = () => {
    setYearlyRent(0);
    setRentTax(0);
  };
  return (
    <Box className="flex w-full flex-col gap-4 md:max-w-2xl">
      <LabeledInputField
        label="Yearly rent"
        htmlFor="yearly-rent"
        id="yearly-rent"
        name="yearlyRent"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setYearlyRent(commaStringToNumber(e.target.value));
        }}
        placeholder="Enter yearly rent"
        value={yearlyRent}
      />
      <Box className="my-4 flex gap-6">
        <Button
          variant="filled"
          disabled={yearlyRent > 0 ? false : true}
          onClick={() => {
            calculate();
          }}
          intent="primary"
        >
          Caculate
        </Button>
        <Button
          variant="filled"
          intent="secondary"
          disabled={yearlyRent > 0 ? false : true}
          onClick={() => {
            clearInputs();
          }}
        >
          Clear
        </Button>
      </Box>
      <Divider className="my-6 w-full bg-slate-400" />
      <DisplayLabeledAnswer label="Rent Tax" value={rentTax} />
    </Box>
  );
};

export default RentTax;
