import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  size?: "lg" | "xl" | "2xl";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}
export function Heading({
  size = "lg",
  children,
  className,
  asChild,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";
  return (
    <div>
      <Comp
        className={clsx(
          "text-gray-100 font-bold font-sans",
          {
            "text-lg": size === "lg",
            "text-xl": size === "xl",
            "text-2xl": size === "2xl",
          },
          className
        )}
      >
        {children}
      </Comp>
    </div>
  );
}
