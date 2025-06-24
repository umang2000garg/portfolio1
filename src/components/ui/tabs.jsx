import React from "react";

export function Tabs({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}

export function TabsTrigger({ value, children }) {
  return (
    <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
      {children}
    </button>
  );
}
