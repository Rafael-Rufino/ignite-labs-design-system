import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem Ipsum",
    size: "lg",
  },

  argTypes: {
    size: {
      options: ["lg", "xl", "2xl"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<HeadingProps>;

export const Index: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const Default: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
