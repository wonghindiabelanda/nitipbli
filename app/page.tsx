import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0f1117] dark:text-white transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center text-gray-600 dark:text-gray-400 p-6 border-t border-gray-300 dark:border-gray-700">
        © 2025 Reytama — All Rights Reserved
      </footer>
    </main>
  )
}
