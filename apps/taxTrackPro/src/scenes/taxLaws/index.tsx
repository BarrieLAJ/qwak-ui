import React from "react";
import { Box, Button, Divider } from "ui";
import { TaxLawCard } from "../../components/common/TaxLawCard";

const TaxLaws = () => {
  return (
    <Box className="mx-auto mt-20 flex w-max flex-col items-center gap-24 py-2">
      <Box className="flex h-max max-w-[85%] flex-wrap gap-16 px-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5].map((v, i) => {
          return <TaxLawCard />;
        })}
      </Box>
      <Box className="w-full">
        <Divider className="my-10 w-4/5 bg-slate-300" />
        <Button className="mx-auto" intent="primary" variant="filled" size="lg">
          Upload document
        </Button>
        <Divider className="my-10 w-4/5 bg-slate-300" />
      </Box>
    </Box>
  );
};

export default TaxLaws;
