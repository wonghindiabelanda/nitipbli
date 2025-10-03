const skillsAndtechnologies = [
  "Python",
  "AI Research",
  "Reverse Engineering",
  "Windows",
  "GitHub",
  "Git",
  "Canva",
  "VS Code",
  "SQLite"
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Technologies I use often and Skills I love to deepen & explore
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {skillsAndtechnologies.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-200 dark:bg-[#1a1c23] rounded-full font-medium text-sm 
                       hover:bg-purple-600 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
