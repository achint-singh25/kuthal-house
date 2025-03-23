'use client';

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
};

export function Button({
  children,
  className = "",
  variant = "default",
}: ButtonProps) {
  const base = "px-4 py-2 rounded text-sm font-medium transition";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
