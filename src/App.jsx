{/* Education */}
<section className="px-8 md:px-20 py-16 border-t border-gray-800">
  <h2 className="text-4xl font-bold text-blue-500 mb-10">Education</h2>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
      <h3 className="text-2xl font-semibold">
        B.Tech - Computer Science & Engineering
      </h3>
      <p className="text-gray-400 mt-2">
        Shri Ram College, Jabalpur
      </p>
      <p className="text-blue-400 mt-2">2023</p>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
      <h3 className="text-2xl font-semibold">
        Diploma - Computer Science & Engineering
      </h3>
      <p className="text-gray-400 mt-2">
        Kalaniketan Polytechnic College, Jabalpur
      </p>
      <p className="text-blue-400 mt-2">2020</p>
    </div>
  </div>
</section>

{/* Professional Training */}
<section className="px-8 md:px-20 py-16 border-t border-gray-800">
  <h2 className="text-4xl font-bold text-blue-500 mb-10">
    Professional Training
  </h2>

  <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
    <h3 className="text-2xl font-semibold">
      Junior Java Full Stack Developer Training
    </h3>

    <p className="text-gray-400 mt-4 leading-8">
      Completed professional training with Edubridge associated with TASK-GIF.
      Gained practical experience in Java, Spring Boot, Angular, SQL, HTML,
      CSS, JavaScript, Bootstrap, Git, and GitHub.
    </p>
  </div>
</section>

{/* Soft Skills */}
<section className="px-8 md:px-20 py-16 border-t border-gray-800">
  <h2 className="text-4xl font-bold text-blue-500 mb-10">
    Soft Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      "Leadership",
      "Communication",
      "Team Work",
      "Presentation Skills",
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
