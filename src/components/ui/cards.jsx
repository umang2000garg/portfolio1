import React from "react";

export function Card({ children }) {
  return <div className="bg-white text-black rounded-xl shadow-lg p-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
