// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "ui";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button" },
  //   argTypes: { children: {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
// const Template: Story = (args) => <Button {...args} />;

export const Primary: Story = {
    render: (args) => <Button {...args}/>
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
  },
};
