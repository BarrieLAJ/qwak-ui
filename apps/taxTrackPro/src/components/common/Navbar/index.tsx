import React, { ReactNode } from "react";
import { Box, Divider, Button } from "ui";
import { DocumentRegular, NoteRegular, CalculatorMultipleRegular, SignOutRegular } from "@fluentui/react-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
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
            <NavLink href="/tax-calculators" icon={<CalculatorMultipleRegular />}>
              Tax Calculators
            </NavLink>
          </Box>
          <Box className="w-full flex-[0] justify-self-end">
            <Box className="h-6 w-6 rounded-full bg-white" />
            <h2 className="mb-2 text-lg text-white">Barrie Potter</h2>
            <Divider className="my-3 bg-white" />
          </Box>
        </Box>
      </Box>
      <Box className="w-full flex-[0]">
        <Button
          href="#"
          fullWidth
          startElement={<SignOutRegular />}
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

const NavLink = (props: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) => {
  const { route } = useRouter();
  const isActive = route.startsWith(props.href);
  return (
    <Button
      href={props.href}
      as={Link}
      asProps={{
        to: props.href,
      }}
      startElement={props.icon}
      className={`text-lg text-white ${isActive && "ring-2 ring-white"}`}
      variant="outlined"
      size="md"
    >
      {props.children}
    </Button>
  );
};
