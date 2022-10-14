import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Entrar",
    size: "sm",
  },

  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<ButtonProps>;

export const button: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const Default: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <button>Create Account</button>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
