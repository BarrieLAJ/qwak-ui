import React from "react";
import { Box, Button } from "ui";

const DocumentList = () => {
    
  return (
    <Box className="flex h-full w-full flex-col items-center justify-center gap-2">
      <NoDocuments />
      <Button intent="primary" variant="filled" size="md">
        Upload document
      </Button>
    </Box>
  );
};

export default DocumentList;

export function NoDocuments() {
  return (
    <p className="text-lg md:max-w-3xl">
      Hello world, hello world, hello world, hello world, hello world, Hello
      world, hello world, hello world, hello world, hello world, Hello world,
      hello world, hello world, hello world, hello world
    </p>
  );
}
