const projects = [
  {
    title: "Making connection between actors",
    desc: "a Simple Connecting one actor to another actor program",
    link: "https://github.com/me50/wonghindiabelanda/tree/ai50/projects/2024/x/degrees",
  },
  {
    title: "Making tictactoe Miniax algorithm",
    desc: "a Simple tictactoe Minimax algorithm",
    link: "https://github.com/me50/wonghindiabelanda/tree/ai50/projects/2024/x/tictactoe",
  },
  {
    title: "Soon..",
    desc: "None",
    link: "https://github.com/wonghindiabelanda",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        My latest repositories from my GitHub Account
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-white dark:bg-[#1a1c23] p-6 rounded-xl flex flex-col justify-between 
                       border border-gray-300 dark:border-gray-700 transition-colors"
          >
            <div>
              <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{proj.desc}</p>
            </div>
            <a
              href={proj.link}
              target="_blank"
              className="mt-auto inline-block px-4 py-2 border border-gray-400 dark:border-gray-600 
                         rounded hover:border-purple-500 hover:text-purple-400 transition"
            >
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
