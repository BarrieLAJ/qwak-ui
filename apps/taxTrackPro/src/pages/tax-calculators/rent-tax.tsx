import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "~/components/common/Layout";
import { Box } from "ui";
import RentTax from "~/scenes/calculators/RentTax";
import TaxCaculationLayout from "~/components/TaxCalculation/Layout";

export default function RentTaxCalculation() {
  return (
    <Layout>
      <Box className="flex w-full mt-20 justify-center py-2">
        <TaxCaculationLayout />
        {/* <RentTax /> */}
      </Box>
    </Layout>
  );
}
