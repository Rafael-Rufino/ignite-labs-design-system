import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className=" 
      flex    
      items-center
      gap-3
      h-12
      rounded
      bg-gray-800
      px-4
      py-3
      w-full
      focus-within:ring-2
      ring-cyan-300
      "
    >
      {props.children}
    </div>
  );
}

export interface TextInputPropsTypes
  extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputPropsTypes) {
  return (
    <input
      className="
       outline-none
        bg-transparent
        flex-1  
       text-gray-100
         text-xs
       placeholder:text-gray-400"
      {...props}
    />
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

export function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
