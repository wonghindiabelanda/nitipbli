export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        A self-taught student exploring my AI & programming journey.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-white dark:bg-[#1a1c23] p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I started programming out of curiosity about how things work. 
            That passion grew into AI research and coding.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1a1c23] p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Personal Interests</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I enjoy drifting, coding, and exploring new technology.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1a1c23] p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Diving into Python and low-level optimization 
            to understand intelligence design.
          </p>
        </div>
      </div>
    </section>
  )
}