import { useRouter } from "next/router";
import React from "react";
import { Tabs, TabsList, Tab, TabContent, Box } from "ui";
import CapitalGains from "~/scenes/calculators/CapitalGains";
import ImportTaxes from "~/scenes/calculators/ImportTaxes";
import Payee from "~/scenes/calculators/Payee";
import RentTax from "~/scenes/calculators/RentTax";

const TaxCaculationLayout = () => {
  const { route, push } = useRouter();
  return (
    <Tabs
      defaultValue={route}
      className="max-h-[100%] mx-auto gap-6 w-full max-w-2xl"
      onValueChange={(value) => {
        push(value);
      }}
    >
      <TabsList className="gap-16 py-3 mx-auto">
        {tabsList.map(({ url, title }, key) => {
          return (
            <Tab className="text-lg font-semibold" value={url} key={key}>
              {title}
            </Tab>
          );
        })}
      </TabsList>
      <Box className="w-full p-2 max-h-[100%] overflow-y-scroll">
        {tabsList.map(({ url, content }, key) => {
          const Content = content;
          return (
            <TabContent value={url}>
              <Content />
            </TabContent>
          );
        })}
      </Box>
    </Tabs>
  );
};

export default TaxCaculationLayout;

const tabsList = [
  {
    url: "/tax-calculators/rent-tax",
    title: "Rent tax",
    content: RentTax,
  },
  {
    url: "/tax-calculators/payee",
    title: "Payee Tax",
    content: Payee,
  },
  {
    url: "/tax-calculators/import-taxes",
    title: "Import Taxes",
    content: ImportTaxes,
  },
  {
    url: "/tax-calculators/capital-gains",
    title: "Capital Gains",
    content: CapitalGains,
  },
];
