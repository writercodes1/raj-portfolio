export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">Raj Soni</h1>
      </nav>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-10">
        <div className="max-w-xl">
          <p className="text-blue-400 text-lg">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-3">Raj Soni</h1>
          <h2 className="text-2xl md:text-3xl text-blue-500 mt-4 font-semibold">
            Full Stack Java Developer
          </h2>
          <p className="text-gray-300 mt-6 leading-8 text-lg">
            Passionate Full Stack Java Developer skilled in Java, Spring Boot,
            Angular, HTML, CSS, JavaScript, and SQL.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
          alt="Profile"
          className="w-72 h-72 object-cover rounded-full border-4 border-blue-500"
        />
      </section>

      <section className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Java",
            "Spring Boot",
            "Angular",
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "Bootstrap",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Project</h2>
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold">Car Shopping Website</h3>
          <p className="text-gray-300 mt-4 leading-8 text-lg">
            Developed a responsive car shopping website using Java, Spring Boot,
            Angular, HTML, CSS, JavaScript, SQL, and Bootstrap.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Contact</h2>
        <p>Email: rajsoni6080@gmail.com</p>
        <p>Phone: +91-7773861849</p>
        <p>GitHub: github.com/writercodes1</p>
      </section>
    </div>
  );
}
