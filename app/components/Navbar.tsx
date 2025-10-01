"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={80} height={80} priority />
      </a>

      {/* Tombol Sidebar Mobile */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-2xl border px-2 py-1 rounded-lg"
      >
        ☰
      </button>

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-6 font-medium text-gray-600 dark:text-gray-400">
        <a href="#about" className="hover:text-purple-400">
          About
        </a>
        <a href="#skills" className="hover:text-purple-400">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-400">
          Contact
        </a>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 border rounded-lg"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Sidebar Top-Down */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-full bg-white dark:bg-[#1a1c23] shadow-lg p-6 flex flex-col gap-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close + Theme Toggle */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 border rounded-lg"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-black dark:text-white border border-gray-600 px-3 py-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-4 font-medium text-lg mt-4">
              <a href="#home" className="text-black dark:text-gray-300">
                🏠 Home
              </a>
              <a href="#about" className="text-black dark:text-gray-300">
                👨‍💻 About
              </a>
              <a href="#skills" className="text-black dark:text-gray-300">
                ⚒️ Skills
              </a>
              <a href="#projects" className="text-black dark:text-gray-300">
                📂 Projects
              </a>
              <a href="#contact" className="text-black dark:text-gray-300">
                📬 Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
