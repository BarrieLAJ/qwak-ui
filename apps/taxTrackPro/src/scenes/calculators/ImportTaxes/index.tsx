import React, { useCallback, useState } from "react";
import { Box, Button, Divider } from "ui";
import { checkIfValueIsInput, commaStringToNumber } from "../common/utils";
import { LabeledInputField } from "../common/LabeledInputField";
import { DisplayLabeledAnswer } from "../common/DisplayLabeledAnswer";

const ImportTaxes = () => {
  const [formValues, setformValues] = useState<{ [key: string]: number }>({
    cost: 0,
    insuranceCost: 0,
    freightCost: 0,
    importDutyPercent: 0,
    gstPercent: 0,
    exciseDutyPercent: 0,
  });
  const [totalImportTax, setTotalImportTax] = useState(0);
  const [cif, setCif] = useState(0);
  const [imptDuty, setImptDuty] = useState(0);
  const [excDuty, setExcDuty] = useState(0);
  const [iwtf, setIwtf] = useState(0);
  const [ecowasLevy, setEcowasLevy] = useState(0);
  const [igst, setIgst] = useState(0);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      setformValues((prev) =>
        Object.assign({}, prev, { [name]: commaStringToNumber(value) })
      );
    },
    [setformValues]
  );

  const clearInputs = () => {
    setformValues({
      cost: 0,
      insuranceCost: 0,
      freightCost: 0,
      importDutyPercent: 0,
      gstPercent: 0,
      exciseDutyPercent: 0,
    });
    setCif(0);
    setImptDuty(0);
    setExcDuty(0);
    setIwtf(0);
    setEcowasLevy(0);
    setIgst(0);
    setTotalImportTax(0);
  };

  const calculate = () => {
    const {
      cost,
      insuranceCost,
      freightCost,
      importDutyPercent,
      exciseDutyPercent,
      gstPercent,
    } = formValues;
    const cif = cost! + insuranceCost! + freightCost!;
    const importDuty = cif * (importDutyPercent! / 100);
    setImptDuty(importDuty);
    const exciseDuty = (cif + importDuty) * (exciseDutyPercent! / 100);
    setExcDuty(exciseDuty);
    setCif(cif);
    const iwtf = cif * 0.05;
    setIwtf(iwtf);
    const ecowasLevy = cif * 0.005;
    setEcowasLevy(ecowasLevy);
    const igst = (cif + importDuty + exciseDuty) * (gstPercent! / 100);
    setIgst(igst);
    const totalImportTax = iwtf + ecowasLevy + igst + importDuty + exciseDuty;
    setTotalImportTax(totalImportTax);
  };
  return (
    <Box className="flex w-full flex-col gap-4 max-h-full md:max-w-2xl">
      <LabeledInputField
        htmlFor="basic-salary"
        id="cost"
        label="Cost"
        name="cost"
        value={formValues.cost}
        placeholder="Enter cost of the goods"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        id="insurance-cost"
        name="insuranceCost"
        label="Insurance Cost"
        value={formValues.insuranceCost}
        placeholder="Enter insurance cost"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        id="freight-cost"
        name="freightCost"
        label="Freight Cost"
        value={formValues.freightCost}
        placeholder="Enter freight cost"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        id="import-duty"
        name="importDutyPercent"
        label="Import Duty"
        value={formValues.importDutyPercent}
        placeholder="Enter import duty (%)"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        id="gst"
        name="gstPercent"
        label="Import GST (Optional)"
        value={formValues.gstPercent}
        placeholder="Enter Import GST (%)"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        id="excise-duty"
        name="exciseDutyPercent"
        label="Excise Duty (Optional)"
        value={formValues.exciseDutyPercent}
        placeholder="Enter excise duty (%)"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Box className="my-4 flex gap-6">
        <Button
          variant="filled"
          disabled={formValues.cost! > 0 ? false : true}
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
        label="Cost, Insurance & Freight (CIF)"
        value={cif}
      />
      <DisplayLabeledAnswer label="Import Duty (ID)" value={imptDuty} />
      <DisplayLabeledAnswer label="Excise Duty (ED)" value={excDuty} />
      <DisplayLabeledAnswer
        label="Import Withholding Tax (IWTF)"
        value={iwtf}
      />
      <DisplayLabeledAnswer label="ECOWAS Levy" value={ecowasLevy} />
      <DisplayLabeledAnswer
        label="Import Good & Services Tax (IGST)"
        value={igst}
      />
      <DisplayLabeledAnswer label="Total Import Taxes" value={totalImportTax} />
    </Box>
  );
};

export default ImportTaxes;
