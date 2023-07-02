import React, { ReactNode } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import type {
  TabsProps as RadixTabsProps,
  TabsListProps as RadixTabsListProps,
  TabsContentProps as RadixTabsContentProps,
  TabsTriggerProps as RadixTabProps,
} from "@radix-ui/react-tabs";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { SetNonNullable } from "type-fest";

const tabRootStyles = cva(
  "text-black flex  flex-col data-[orientation=vertical]:flex-row",
  {
    variants: {},
  }
);
const tabListStyles = cva(
  "text-black flex flex-row data-[orientation=vertical]:flex-col",
  {
    variants: {},
  }
);
const tabStyles = cva(
  "text-slate-50 w-fit px-3 py-3 rounded-lg transition-all duration-300  data-activeTab:bg-primary bg-gray-400",
  {
    variants: {
      variant: {
        outlined: "",
      },
    },
  }
);
const tabContentStyles = cva("text-black", {
  variants: {},
});

export type TabsProps = RadixTabsProps;

export const Tabs = (props: TabsProps) => {
  const { className, ...rest } = props;
  const rootClasses = twMerge(tabRootStyles(), className);
  return (
    <RadixTabs.Root
      className={rootClasses}
      //   className="shadow-blackA4 flex w-[300px] flex-col shadow-[0_2px_10px]"
      {...rest}
    />
  );
};

export type TabsListProps = RadixTabsListProps;

export const TabsList = (props: TabsListProps) => {
  const { className, ...rest } = props;
  const tabListClasses = twMerge(tabListStyles(), className);
  return <RadixTabs.TabsList className={tabListClasses} {...rest} />;
};

export type TabsContentProps = RadixTabsContentProps;

export const TabContent = (props: TabsContentProps) => {
  const { className, ...rest } = props;
  const tabContentClasses = twMerge(tabContentStyles(), className);
  return <RadixTabs.Content className={tabContentClasses} {...rest} />;
};

export type TabVariantsProps = VariantProps<typeof tabStyles>;

export type TabProps = RadixTabProps & SetNonNullable<TabVariantsProps>;

export const Tab = (props: TabProps) => {
  const { className, variant = "outlined", ...rest } = props;
  const tabClasses = twMerge(tabStyles({ variant }), className);
  return <RadixTabs.Trigger className={tabClasses} {...rest} />;
};
