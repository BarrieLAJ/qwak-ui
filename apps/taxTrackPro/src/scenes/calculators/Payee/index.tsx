import React, { useCallback, useState } from "react";
import { Box, Button, Divider } from "ui";
import { checkIfValueIsInput, commaStringToNumber } from "../common/utils";
import { LabeledInputField } from "../common/LabeledInputField";
import { DisplayLabeledAnswer } from "../common/DisplayLabeledAnswer";

const calculatePaye = (income: number) => {
  let tax: number = 0;
  const minSalary = 600;

  if (income <= minSalary) {
    tax = 0;
  } else if (income > minSalary && income <= 1200) {
    tax = (income - minSalary) * 0.15;
  } else if (income > 1200 && income <= 1800) {
    const firstTax = minSalary * 0.15;
    const secondTax = (income - 1200) * 0.2;
    tax = firstTax + secondTax;
  } else if (income > 1800 && income <= 2400) {
    const firstTax = minSalary * 0.15;
    const secondTax = minSalary * 0.2;
    const thirdTax = (income - 1800) * 0.25;
    tax = firstTax + secondTax + thirdTax;
  } else {
    const firstTax = minSalary * 0.15;
    const secondTax = minSalary * 0.2;
    const thirdTax = minSalary * 0.25;
    const fourthTax = (income - 2400) * 0.3;
    tax = firstTax + secondTax + thirdTax + fourthTax;
  }
  return tax;
};

const Payee = () => {
  const [formValues, setFormValues] = useState<{
    [key: string]: number;
  }>({
    basicSalary: 0,
    rentAllowance: 0,
    transportAllowance: 0,
    clothingAllowance: 0,
    medicalAllowance: 0,
    leaveAllowance: 0,
    otherAllowance: 0,
    overtime: 0,
    bonus: 0,
    otherIncome: 0,
    advanceSalary: 0,
    officeLoan: 0,
    otherDeductions: 0,
  });
  const [paye, setPaye] = useState(0);
  const [nassitEmployee, setNassitEmployee] = useState(0);
  const [taxOnLeaveAllowance, setTaxOnLeaveAllowance] = useState(0);
  const [nassitEmployer, setNassitEmployer] = useState(0);
  const [takeHome, setTakeHome] = useState(0);
  const calculate = () => {
    const {
      basicSalary,
      rentAllowance,
      transportAllowance,
      clothingAllowance,
      medicalAllowance,
      leaveAllowance,
      otherAllowance,
      overtime,
      bonus,
      otherIncome,
      advanceSalary,
      officeLoan,
      otherDeductions,
    } = formValues;
    const nassitEmp = basicSalary! * 0.05;
    const nassitEmployer = basicSalary! * 0.1;
    let taxableAllowance =
      rentAllowance! +
      transportAllowance! +
      clothingAllowance! +
      medicalAllowance! +
      otherAllowance! -
      500;
    taxableAllowance = taxableAllowance < 0 ? 0 : taxableAllowance;
    const taxableIncome =
      basicSalary! -
      nassitEmp +
      taxableAllowance +
      overtime! +
      bonus! +
      otherIncome!;

    const taxOnLeave =
      leaveAllowance! - basicSalary! > 0
        ? (leaveAllowance! - basicSalary!) * 0.3
        : 0;
    const payeTax = calculatePaye(taxableIncome);
    const tkHome =
      basicSalary! -
      nassitEmp -
      payeTax -
      taxOnLeave +
      leaveAllowance! +
      overtime! +
      bonus! +
      otherIncome! +
      rentAllowance! +
      transportAllowance! +
      clothingAllowance! +
      medicalAllowance! +
      otherAllowance! -
      advanceSalary! -
      officeLoan! -
      otherDeductions!;

    setPaye(payeTax);
    setNassitEmployee(nassitEmp);
    setNassitEmployer(nassitEmployer);
    setTaxOnLeaveAllowance(taxOnLeave);
    setTakeHome(tkHome);
  };

  const clearInputs = () => {
    setFormValues((prevState) =>
      Object.assign({}, prevState, {
        basicSalary: 0,
        rentAllowance: 0,
        transportAllowance: 0,
        clothingAllowance: 0,
        medicalAllowance: 0,
        leaveAllowance: 0,
        otherAllowance: 0,
        overtime: 0,
        bonus: 0,
        otherIncome: 0,
        advanceSalary: 0,
        officeLoan: 0,
        otherDeductions: 0,
      })
    );
    setPaye(0);
    setNassitEmployee(0);
    setNassitEmployer(0);
    setTaxOnLeaveAllowance(0);
    setTakeHome(0);
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) =>
        Object.assign({}, prev, { [name]: commaStringToNumber(value) })
      );
    },
    [setFormValues]
  );

  return (
    <Box className="flex w-full flex-col gap-4 md:max-w-2xl">
      <LabeledInputField
        htmlFor="basic-salary"
        label="Basic Salary"
        name="basicSalary"
        id="basic-salary"
        placeholder="Enter Basic Salary"
        value={formValues.basicSalary}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <p className="text-2xl font-bold text-black">Allowances</p>
      <Divider className="my-3 w-full bg-slate-400" />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Rent allowance"
        name="rentAllowance"
        id="rent-allowance"
        placeholder="Enter Rent Allowance"
        value={formValues.rentAllowance}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Transport allowance"
        name="transportAllowance"
        id="transport-allowance"
        value={formValues.transportAllowance}
        placeholder="Enter Transport Allowance"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Clothing allowance"
        name="clothingAllowance"
        id="clothing-allowance"
        value={formValues.clothingAllowance}
        placeholder="Enter Clothing Allowance"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Medical allowance"
        name="medicalAllowance"
        id="medical-allowance"
        value={formValues.medicalAllowance}
        placeholder="Enter Medical Allowance"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Other allowance(s)"
        name="otherAllowance"
        id="other-allowance"
        value={formValues.otherAllowance}
        placeholder="Enter Other Allowance(s)"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <p className="text-2xl font-bold text-black">Leave Allowance</p>
      <Divider className="my-3 w-full bg-slate-400" />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Leave allowance"
        name="leaveAllowance"
        id="leave-allowance"
        value={formValues.leaveAllowance}
        placeholder="Enter Leave Allowance"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <p className="text-2xl font-bold text-black">Other Income</p>
      <Divider className="my-3 w-full bg-slate-400" />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Overtime"
        name="overtime"
        id="overtime"
        value={formValues.overtime}
        placeholder="Enter Overtime"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Bonus"
        name="bonus"
        id="bonus"
        value={formValues.bonus}
        placeholder="Enter Bonus"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Any other income"
        name="otherIncome"
        id="other-income"
        value={formValues.otherIncome}
        placeholder="Enter Other Income"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <p className="text-2xl font-bold text-black">Deductions</p>
      <Divider className="my-3 w-full bg-slate-400" />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Advance Salary"
        name="advanceSalary"
        id="advance-salary"
        placeholder="Enter Advance Salary"
        value={formValues.advanceSalary}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Office loan"
        name="officeLoan"
        id="office-loan"
        value={formValues.officeLoan}
        placeholder="Enter Office Loan"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <LabeledInputField
        htmlFor="basic-salary"
        label="Other Deductions"
        name="otherDeductions"
        id="other-deductions"
        value={formValues.otherDeductions}
        placeholder="Enter Other Deducations"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Box className="my-4 flex gap-6">
        <Button
          variant="filled"
          disabled={formValues.basicSalary! > 0 ? false : true}
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
          disabled={checkIfValueIsInput(formValues)}
          onClick={() => {
            clearInputs();
          }}
        >
          Clear
        </Button>
      </Box>
      <Divider className="my-6 w-full bg-slate-400" />
      <DisplayLabeledAnswer value={paye} label="PAYE Tax" />
      <DisplayLabeledAnswer value={nassitEmployee} label="NASSIT (Employee)" />
      <DisplayLabeledAnswer value={nassitEmployer} label="NASSIT (Employer)" />
      <DisplayLabeledAnswer
        value={taxOnLeaveAllowance}
        label="Tax on Leave Allowance"
      />
      <DisplayLabeledAnswer value={takeHome} label="Take Home Pay" />
    </Box>
  );
};

export default Payee;
