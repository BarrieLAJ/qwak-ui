import React from "react";
import { Box, Button, Divider } from "ui";
import { TaxLawCard } from "~/components/common/TaxLawCard";

const DocumentList = () => {
  return (
    <Box className="flex h-full w-full flex-col items-center justify-center gap-16">
      {false && <NoDocuments />}
      <Box className="flex h-max max-w-[85%] flex-wrap gap-16 p-10">
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

export default DocumentList;

export const SingleDocumentsView = () => {
  return <Box className="flex flex-col gap-4 p-4 shadow-sm"></Box>;
};

export function NoDocuments() {
  return (
    <p className="text-lg md:max-w-3xl">
      Hello world, hello world, hello world, hello world, hello world, Hello
      world, hello world, hello world, hello world, hello world, Hello world,
      hello world, hello world, hello world, hello world
    </p>
  );
}
