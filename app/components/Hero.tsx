export default function Hero() {
  return (
    <section id="home" className="text-center py-24 px-6">
      <p className="text-gray-400 mb-2">👋 Student Developer</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-purple-500">Reytama</span>
      </h1>
      <p className="max-w-xl mx-auto text-gray-400 mb-6">
        Self-taught student passionate about AI & programming.
      </p>

      <div className="flex flex-col md:flex-row gap-4 max-w-sm mx-auto">
        <a
          href="#projects"
          className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold"
        >
          View My Work
        </a>
        <a
          href="#about"
          className="w-full px-6 py-3 border border-gray-600 rounded-lg hover:border-purple-500 hover:text-purple-400 font-semibold"
        >
          About Me
        </a>
      </div>
    </section>
  )
}
