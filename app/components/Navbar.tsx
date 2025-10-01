'use client'
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      {/* Logo */}
      <div className="font-extrabold text-xl">Reytama</div>

      {/* Tombol Sidebar Mobile */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-2xl border px-2 py-1 rounded-lg"
      >
        ☰
      </button>

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-6 text-gray-400 font-medium">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#skills" className="hover:text-purple-400">Skills</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </nav>

      {/* Sidebar Top-Down */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)}>
          <div
            className="absolute top-0 left-0 w-full bg-[#1a1c23] shadow-lg p-6 flex flex-col gap-6 z-50 transform transition-transform duration-300 ease-out translate-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close + Theme Toggle */}
            <div className="flex justify-between items-center">
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 border rounded-lg"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-xl border border-gray-600 px-3 py-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-4 text-gray-300 font-medium text-lg mt-4">
              <a href="#home">🏠 Home</a>
              <a href="#about">👨‍💻 About</a>
              <a href="#skills">⚒️ Skills</a>
              <a href="#projects">📂 Projects</a>
              <a href="#contact">📬 Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

