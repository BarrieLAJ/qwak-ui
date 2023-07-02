
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { InputField } from "ui";

const meta = {
  title: "Qwak-UI/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {  },
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
    inputSize: {
      control: "select",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof InputField>;

const Template: Story = {
  render: (args) => <InputField {...args} />,
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
  render: (args) => <InputField {...args} startElement={<div>O</div>} />,
  args: {
    intent: "secondary",
  },
};

export const WithEndElement: Story = {
  ...Template,
  render: (args) => <InputField {...args} endElement={<div>O</div>} />,
  args: {
    intent: "secondary",
  },
};
