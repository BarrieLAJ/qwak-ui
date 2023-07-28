import React, { ReactNode } from "react";
import { Button } from "ui";
import { useRouter } from "next/router";
import Link from "next/link";

export const NavLink = (props: {
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
