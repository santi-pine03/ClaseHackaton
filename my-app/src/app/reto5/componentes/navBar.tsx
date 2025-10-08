"use client";

import Link from "next/link";
import { useState } from "react";


type NavItem = { label: string; href: string };

type NavbarProps = {
  brand?: string;
  items?: NavItem[];
  reversed?: boolean;
  mirrored?: boolean;
  onSearch?: (q: string) => void;
  placeholder?: string;
};

export default function Navbar({
  brand = "Navbar",
  items = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ],
  reversed = false,
  mirrored = false,
  onSearch,
  placeholder = "Search",
}: NavbarProps) {
  const [q, setQ] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(q);
  };

  return (
    <nav
      className={[
        "w-full bg-neutral-800 text-neutral-100",
        "border-b border-neutral-700",
        mirrored ? "transform scale-x-[-1]" : ""
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-6xl px-4 py-3",
          "flex items-center gap-6",
          reversed ? "flex-row-reverse" : "flex-row",
        ].join(" ")}
      >
        {/* Brand */}
        <div className="text-2xl font-extrabold tracking-tight">{brand}</div>

        {/* Links */}
        <ul
          className={[
            "flex-1 flex items-center gap-6",
            reversed ? "justify-end" : "justify-start",
          ].join(" ")}
        >
          {items.map((it) => (
            <li key={it.label}>
              <Link
                href={it.href}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className={[
            "flex items-center gap-3",
            // cuando se invierte la barra, también invertimos el orden del form
            reversed ? "flex-row-reverse" : "flex-row",
          ].join(" ")}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            className={[
              "w-72 rounded-md border border-cyan-700/60 bg-neutral-900",
              "px-4 py-2 text-neutral-100 placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
            ].join(" ")}
          />
          <button
            type="submit"
            className={[
              "rounded-md border border-cyan-700/60 px-4 py-2",
              "text-cyan-300 hover:bg-cyan-700/10 transition-colors",
            ].join(" ")}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}