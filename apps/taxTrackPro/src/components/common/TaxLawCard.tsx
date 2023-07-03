import React from "react";
import { Box, Button } from "ui";
import { ArrowDownloadRegular } from "@fluentui/react-icons";

interface TaxLawCardProps {
  id: string;
  title: string | null;
  file: string | null;
  createdAt?: string;
}

export const TaxLawCard = (props: TaxLawCardProps) => {
  return (
    <Box className="max-h-[90px] min-h-[80px] w-max min-w-[260px] rounded-md bg-white p-4 shadow-sm shadow-slate-500">
      <Box className="flex h-full w-full items-center justify-between rounded-sm bg-gray-200 px-2">
        <Box></Box>
        <p className="max-w-{100px} w-36 truncate">{props.title}</p>
        <Button
          size="md"
          href={`${props.file}?dl=`}
          startElement={<ArrowDownloadRegular />}
        ></Button>
      </Box>
    </Box>
  );
};
