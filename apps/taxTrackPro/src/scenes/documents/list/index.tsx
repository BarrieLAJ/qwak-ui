import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Divider } from "ui";
import { TaxLawCard } from "~/components/common/TaxLawCard";
import { api } from "~/utils/api";

const DocumentList = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [fileArraybuffer, setFileArrayBuffer] = useState<ArrayBuffer | null>(
    null
  );
  const { data, isLoading } = api.document.getDocuments.useQuery();
  const { mutate } = api.document.uploadDocument.useMutation();
  useEffect(() => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const title = file?.name as string;
        mutate({
          title,
          file: reader.result as string,
        });
        // setFileArrayBuffer(reader.result as ArrayBuffer);
      };
    }
  }, [file]);

  useEffect(() => {
    if (fileArraybuffer !== null) {
      const title = file?.name as string;
      // mutate({
      //   title,
      //   file: fileArraybuffer,
      // });
    }
  }, [fileArraybuffer, file]);

  return (
    <Box className="flex h-full w-full flex-col items-center justify-center gap-16">
      {isLoading && <NoDocuments />}
      {!isLoading && data && (
        <Box className="flex h-max max-w-[85%] flex-wrap gap-16 p-10">
          {data!.map((document, i) => {
            return <TaxLawCard key={i} {...document} createdAt={undefined} />;
          })}
        </Box>
      )}
      <Box className="w-full">
        <Divider className="my-10 w-4/5 bg-slate-300" />
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*,.pdf,.doc,.docx"
          onChange={(event) => {
            const file = event.currentTarget.files![0];
            setFile(file);
          }}
        />
        <Button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current && fileInputRef.current.click();
          }}
          className="mx-auto"
          intent="primary"
          variant="filled"
          size="lg"
        >
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
