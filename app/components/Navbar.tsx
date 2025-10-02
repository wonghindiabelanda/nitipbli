"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-[#0f0f11] border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            priority
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <a href="#home" className="hover:text-purple-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
        </nav>

        {/* Theme Toggle + Burger */}
        <div className="flex items-center gap-3">
          {/* Theme Button */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-white dark:bg-[#0f0f11] border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
