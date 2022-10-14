import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
    size: "md",
  },

  argTypes: {
    size: {
      options: ["sm", "base", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Index: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Default: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>teste</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
