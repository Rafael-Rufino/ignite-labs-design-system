import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}
export function Button({ size = "lg", children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <div>
      <Comp
        className={clsx(
          "bg-cyan-500 text-sm text-black font-semibold font-sans rounded px-4 py-3 w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white ",
          {
            "text-sm": size === "sm",
            "text-md": size === "md",
            "text-lg": size === "lg",
          }
        )}
      >
        {children}
      </Comp>
    </div>
  );
}
