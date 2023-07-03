import Layout from "~/components/common/Layout";
import { Box } from "ui";
import TaxCaculationLayout from "~/components/TaxCalculation/Layout";

export default function PayeeCalculation() {
  return (
    <Layout>
      <Box className="flex w-full mt-20 justify-center py-2">
        <TaxCaculationLayout />
      </Box>
    </Layout>
  );
}


