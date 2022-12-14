import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  size?: "sm" | "base" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}
export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <div>
      <Comp
        className={clsx(
          "text-gray-100 font-sans",
          {
            "text-sm": size === "sm",
            "text-base": size === "base",
            "text-md": size === "md",
            "text-lg": size === "lg",
          },

          className
        )}
      >
        {children}
      </Comp>
    </div>
  );
}
