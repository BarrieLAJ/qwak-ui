import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Tabs, TabsList, Tab, TabContent } from "ui";

const meta = {
  title: "Qwak-UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
    args: { 
        orientation: "horizontal",
        defaultValue: "tab2"
     },
  argTypes: {
    children: {
      control: false,
    },
    orientation: {
        control: "select",
        defaultValue: "vertical",
        options: ["vertical", "horizontal"]
    }
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

const Template: Story = {
  render: (args) => <Tabs {...args} />,
};

export const One: Story = {
  ...Template,
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab value="tab1">Some Name</Tab>
        <Tab value="tab2">Some Name 1</Tab>
      </TabsList>
      <TabContent value="tab1">Some content</TabContent>
      <TabContent value="tab2">Some other content</TabContent>
    </Tabs>
  ),
};
