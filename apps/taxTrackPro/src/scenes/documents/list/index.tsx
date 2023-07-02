import React from "react";
import { Box, Button } from "ui";

const DocumentList = () => {
  return (
    <Box className="flex h-full w-full flex-col items-center justify-center gap-2">
      <NoDocuments />
      <Button intent="primary"  variant="filled" size="md">
        Upload document
      </Button>
    </Box>
  );
};

export default DocumentList;

export const SingleDocumentsView = () => {
  return <Box className="flex flex-col gap-4 p-4 shadow-sm"></Box>;
};

export const SingleDocument = () => {
  return <Box className=""></Box>;
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
