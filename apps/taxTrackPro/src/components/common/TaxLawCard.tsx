import React from "react";
import { Box, Button } from "ui";
import { ArrowDownloadRegular } from "@fluentui/react-icons";

export const TaxLawCard = () => {
    return (
        <Box className="max-h-[90px] min-h-[80px] w-max min-w-[260px] rounded-md bg-white p-4 shadow-sm shadow-slate-500">
            <Box className="flex h-full w-full items-center justify-between rounded-sm bg-gray-200 px-2">
                <Box></Box>
                <p className="">The Realm of Life</p>
                <Button size="md" startElement={<ArrowDownloadRegular />}></Button>
            </Box>
        </Box>
    );
};
