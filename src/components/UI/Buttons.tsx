import React from "react";

interface Button {
  variant?: "primary" | "secondary" | "outlined" | "disable" | "error" | "text";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}

const Buttons: React.FC<Button> = ({
  className,
  children,
  variant = "primary",
  size = "medium",
}) => {
  const sizeClasses = {
    small: "py-1 px-2 text-xs font-medium",
    medium: "py-2 px-4 text-sm font-medium",
    large: "py-3 px-6 text-lg font-medium",
  };

  const variantClass = {
    primary: "bg-purple-600 text-slate-50 hover:bg-purple-500",
    secondary: "bg-Fuchsia-600 text-slate-50 hover:bg-Fuchsia-500",
    outlined:
      "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-slate-50",
    disable: "bg-slate-100 text-slate-400",
    error: "bg-pink-600 text-slate-50 hover:bg-pink-500",
    text: "text-slate-600 hover:text-slate-800",
  };

  return (
    <div
      className={`rounded-lg ${sizeClasses[size]} ${variantClass[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Buttons;
