import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "~/components/common/Layout";
import { Box } from "ui";
import ImportTaxes from "~/scenes/calculators/ImportTaxes";
import TaxCaculationLayout from "~/components/TaxCalculation/Layout";

export default function ImporttaxesCalculation() {
  return (
    <Layout>
      <Box className="flex w-full mt-20 justify-center py-2">
        <TaxCaculationLayout />
        {/* <ImportTaxes /> */}
      </Box>
    </Layout>
  );
}
