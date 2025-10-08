"use client";
import { useState } from "react";

export default function ModeSwitch() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <main
      className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">
        {isDark ? "Dark" : "Light"}
      </h2>

      <button
        onClick={handleToggle}
        className="px-4 py-2 rounded-full bg-gray-300 text-sm font-medium"
      >
        Toggle Button
      </button>

      <p className="mt-4">Toggle Button
        {isDark ? "Dark" : "Light"}
      </p>
    </main>
  );
}
