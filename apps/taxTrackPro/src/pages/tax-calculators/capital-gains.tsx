import React from "react";
import CapitalGains from "~/scenes/calculators/CapitalGains";
import Layout from "~/components/common/Layout";
import { Box } from "ui";
import TaxCaculationLayout from "~/components/TaxCalculation/Layout";


export const CapitalGainsTax = () => {
  return (
    <Layout>
      <Box className="flex w-full mt-20 justify-center py-2">
      <TaxCaculationLayout />
        {/* <CapitalGains /> */}
      </Box>
    </Layout>
  );
};

export default CapitalGainsTax;
