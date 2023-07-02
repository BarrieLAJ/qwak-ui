import React from "react";
import Navbar from "./Navbar";
import { NextSeo, NextSeoProps } from "next-seo";

interface LayoutProps extends Omit<NextSeoProps, "children"> {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children, ...rest } = props;
  return (
    <>
      <NextSeo {...rest} />
      <main className="flex h-screen w-screen">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
