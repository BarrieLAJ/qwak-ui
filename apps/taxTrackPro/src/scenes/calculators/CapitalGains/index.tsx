import React, { useCallback, useState } from "react";
import { checkIfValueIsInput, commaStringToNumber } from "../common/utils";
import { Box, Divider, Button } from "ui";
import { LabeledInputField } from "../common/LabeledInputField";
import { DisplayLabeledAnswer } from "../common/DisplayLabeledAnswer";

const CapitalGains = () => {
  const [capitalGainsTax, setCapitalGainsTax] = useState<number>(0.0);
  const [formValues, setFormValues] = useState<{ [key: string]: number }>({
    sellingPrice: 0.0,
    initialCost: 0.0,
    incidentalCost: 0.0,
    constructionCost: 0.0,
    developmentCost: 0.0,
    legalFees: 0.0,
    agencyFees: 0.0,
    otherFees: 0.0,
  });

  const clearInputs = () => {
    setFormValues({
      sellingPrice: 0.0,
      initialCost: 0.0,
      incidentalCost: 0.0,
      constructionCost: 0.0,
      developmentCost: 0.0,
      legalFees: 0.0,
      agencyFees: 0.0,
      otherFees: 0.0,
    });
    setCapitalGainsTax(0.0);
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prevState) =>
        Object.assign({}, prevState, {
          [name]: commaStringToNumber(value),
        })
      );
    },
    [setFormValues]
  );

  const calculate = () => {
    let costBase =
      formValues.initialCost! +
      formValues.incidentalCost! +
      formValues.constructionCost! +
      formValues.developmentCost! +
      formValues.legalFees! +
      formValues.agencyFees! +
      formValues.otherFees!;
    console.log(costBase);
    let capitalGains = formValues.sellingPrice! - costBase - 3600;
    setCapitalGainsTax(isNaN(capitalGains * 0.25) ? 0 : capitalGains * 0.25);
  };
  return (
    <Box className="flex w-full flex-col gap-4 md:max-w-2xl">
      <LabeledInputField
        htmlFor="selling-price"
        id="selling-price"
        label="Selling Price"
        name="sellingPrice"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.sellingPrice}
        placeholder="Enter selling price"
      />
      <Divider className="my-4 w-full bg-slate-400" />
      <LabeledInputField
        htmlFor="initial-cost"
        id="initial-cost"
        name="initialCost"
        label="Initial Cost"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.initialCost}
        placeholder="Enter initial Cost"
      />
      <LabeledInputField
        htmlFor="incidental-cost"
        id="incidental-cost"
        name="incidentalCost"
        label="Incidental Cost"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.incidentalCost}
        placeholder="Enter Incidental Cost"
      />
      <LabeledInputField
        htmlFor="construction-cost"
        id="construction-cost"
        name="constructionCost"
        label="Construction Cost"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.constructionCost}
        placeholder="Enter Construction Cost"
      />
      <LabeledInputField
        htmlFor="development-price"
        id="development-price"
        name="developmentCost"
        label="Development Cost"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.developmentCost}
        placeholder="Enter Development Cost"
      />
      <LabeledInputField
        htmlFor="legal-fees"
        id="legal-fees"
        name="legalFees"
        label="Legal Fees"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.legalFees}
        placeholder="Enter Legal Fees"
      />
      <LabeledInputField
        htmlFor="agency-fees"
        id="agency-fees"
        name="agencyFees"
        label="Agency Fees"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.agencyFees}
        placeholder="Enter Agency Fees"
      />
      <LabeledInputField
        htmlFor="other-fees"
        id="other-fees"
        name="otherFees"
        label="Other Fees"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handleChange(e);
        }}
        value={formValues.otherFees}
        placeholder="Enter Other Costs"
      />
      <Box className="flex gap-6 my-4">
        <Button
          variant="filled"
          disabled={formValues.sellingPrice! > 0 ? false : true}
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
          disabled={!checkIfValueIsInput(formValues)}
          onClick={() => {
            clearInputs();
          }}
        >
          Clear
        </Button>
      </Box>
      <Divider className="my-6 w-full bg-slate-400" />
      <DisplayLabeledAnswer
        value={capitalGainsTax}
        label="Capital Gains Tax:"
      />
    </Box>
  );
};

export default CapitalGains;
