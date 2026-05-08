export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold text-blue-500">Raj Soni</h1>
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-10">
        <div className="max-w-xl">
          <p className="text-blue-400 text-lg">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-3">Raj Soni</h1>
          <h2 className="text-2xl md:text-3xl text-blue-500 mt-4 font-semibold">
            Full Stack Java Developer
          </h2>
          <p className="text-gray-300 mt-6 leading-8 text-lg">
            Passionate Full Stack Java Developer skilled in Java, Spring Boot,
            Angular, HTML, CSS, JavaScript, and SQL. I enjoy building modern,
            responsive, and user-friendly web applications.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">About Me</h2>
        <p className="text-gray-300 leading-8 text-lg max-w-4xl">
          My interest in development started when I became curious about how
          websites and applications work. I pursued Full Stack Java Development
          training and worked on projects using Java, Spring Boot, Angular,
          HTML, CSS, JavaScript, SQL, and Bootstrap. My goal is to become a
          skilled software developer and contribute to impactful projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-10">Skills</h2>

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
            "Git",
            "GitHub",
            "VS Code",
            "MySQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500 hover:scale-105 transition"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-10">Projects</h2>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-blue-500 transition">
          <h3 className="text-3xl font-bold">Car Shopping Website</h3>
          <p className="text-gray-300 mt-4 leading-8 text-lg">
            Developed a responsive car shopping website using Java, Spring
            Boot, Angular, HTML, CSS, JavaScript, SQL, and Bootstrap. The
            project focused on backend integration, responsive design, and user
            experience.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Java",
              "Spring Boot",
              "Angular",
              "HTML",
              "CSS",
              "JavaScript",
              "SQL",
              "Bootstrap",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Junior Full Stack Java Developer",
            "Learn Git & GitHub",
            "Learn Java",
            "Learn SQL",
            "Learn HTML",
            "Learn JavaScript",
            "Tableau Fundamentals",
          ].map((cert) => (
            <div
              key={cert}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-5 hover:border-blue-500 transition"
            >
              <p className="text-lg">{cert}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-blue-500 mb-10">Contact</h2>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 max-w-3xl">
          <p className="text-lg text-gray-300 mb-4">
            📧 Email: rajsoni6080@gmail.com
          </p>
          <p className="text-lg text-gray-300 mb-4">
            📞 Phone: +91-7773861849
          </p>
          <p className="text-lg text-gray-300 mb-4">
            📍 Madhya Pradesh, India
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <a
              href="https://github.com/writercodes1"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/raj-soni-139663180"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2025 Raj Soni | Full Stack Java Developer
      </footer>
    </div>
  );
}
