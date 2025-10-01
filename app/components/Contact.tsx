export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s Build Something Together</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I'm always open to collaborations, questions, or new opportunities.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:zhinig83@gmail.com"
          className="px-5 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/wonghindiabelanda"
          target="_blank"
          className="px-5 py-2 border border-gray-300 dark:border-gray-600 
                     rounded text-black dark:text-gray-300 
                     hover:border-purple-500 hover:text-purple-400 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}