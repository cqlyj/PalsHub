import { cn } from "@/lib/utils";
import React from "react";

const Button = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cn(buttonClassName, className)} {...props}></button>
  );
};

export default Button;

export const buttonClassName =
  "flex items-center justify-center gap-2 rounded-full bg-blue-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-600 disabled:bg-gray-200";
