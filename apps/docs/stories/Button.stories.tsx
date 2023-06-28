// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "ui";

const meta = {
  title: "Qwak-UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button" },
  argTypes: {
    children: {
      control: false,
    },
    variant: {
      control: "select",
      defaultValue: "filled",
      options: ["filled", "outlined", "text"],
    },
    intent: {
      control: "select",
      defaultValue: "priamry",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const Template: Story = {
  render: (args) => <Button {...args} />,
};

export const Primary: Story = {
  ...Template,
  args: {
    intent: "primary",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    intent: "secondary",
  },
};

export const WithStartElement: Story = {
  ...Template,
  render: (args) => <Button {...args} startElement={<div>O</div>} />,
  args: {
    intent: "secondary",
  },
};

export const WithEndElement: Story = {
  ...Template,
  render: (args) => <Button {...args} endElement={<div>O</div>} />,
  args: {
    intent: "secondary",
  },
};

export const IconOnly: Story = {
  ...Template,
  render: (args) => (
    <Button {...args}>
      <div>O</div>
    </Button>
  ),
  args: {
    intent: "primary",
    size: "md",
  },
};
