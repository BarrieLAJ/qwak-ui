import React from "react";
import { Box, Divider, Button } from "ui";
import {
  DocumentRegular,
  NoteRegular,
  CalculatorMultipleRegular,
  SignOutRegular,
} from "@fluentui/react-icons";
import { signOut } from "next-auth/react";
import { useUserInfo } from "~/hooks/useUserInfo";
import Image from "next/image";
import { NavLink } from "./NavLink";

const Navbar = () => {
  const { user } = useUserInfo();
  return (
    <div className="bg-primary flex max-h-screen min-h-screen w-full max-w-xs flex-col items-center px-8 pb-9 pt-14">
      <Box className="flex h-full w-full flex-1 flex-col justify-between">
        <Box className="w-full">
          <h2 className="mb-2 text-3xl font-bold text-white">Tax Tracker</h2>
          <Divider className="mb-10 bg-white" />
        </Box>
        <Box className="flex h-full w-full flex-1 flex-col items-center justify-between">
          <Box className="flex h-full w-full flex-1 flex-col gap-4">
            <NavLink href="/documents" icon={<DocumentRegular />}>
              Documents
            </NavLink>
            <NavLink href="/tax-laws" icon={<NoteRegular />}>
              Tax Law
            </NavLink>
            <NavLink
              href="/tax-calculators"
              icon={<CalculatorMultipleRegular />}
            >
              Tax Calculators
            </NavLink>
          </Box>
          <Box className="w-full flex-[0] justify-self-end">
            <Box className="relative block h-16 w-16 rounded-full">
              <Image
                className="aspect-square h-16 w-16 object-cover rounded-full"
                src={user?.image!}
                height={64}
                width={64}
                alt={user?.name!}
              />
            </Box>
            <h2 className="mb-2 text-lg text-white">{user?.name}</h2>
            <Divider className="my-3 bg-white" />
          </Box>
        </Box>
      </Box>
      <Box className="w-full flex-[0]">
        <Button
          // href="#"
          fullWidth
          startElement={<SignOutRegular />}
          onClick={() => {
            signOut();
          }}
          className="text-white"
          variant="outlined"
          size="md"
          intent="primary"
        >
          Log out
        </Button>
        <Divider className="my-3 bg-white" />
      </Box>
    </div>
  );
};

export default Navbar;