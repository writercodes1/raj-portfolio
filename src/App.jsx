export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
          alt="profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "4px solid #3b82f6",
            objectFit: "cover",
          }}
        />

        <h1 style={{ fontSize: "55px", color: "#3b82f6" }}>
          Raj Soni
        </h1>

        <h2>Full Stack Java Developer</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "30px",
            color: "#ccc",
          }}
        >
          Passionate Full Stack Java Developer skilled in Java,
          Spring Boot, Angular, HTML, CSS, JavaScript, SQL,
          Bootstrap, Git and GitHub.
        </p>
      </div>

      <div style={card}>
        <h2 style={title}>About Me</h2>

        <p>
          I am passionate about building modern and responsive web
          applications. I completed Full Stack Java Developer
          training and developed projects using Java and frontend
          technologies.
        </p>
      </div>

      <div style={card}>
        <h2 style={title}>Skills</h2>

        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Angular</li>
          <li>HTML CSS JavaScript</li>
          <li>SQL</li>
          <li>Bootstrap</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={title}>Project</h2>

        <h3>Car Shopping Website</h3>

        <p>
          Developed a responsive car shopping website using Java,
          Spring Boot, Angular, HTML, CSS, JavaScript, SQL and
          Bootstrap.
        </p>
      </div>

      <div style={card}>
        <h2 style={title}>Education</h2>

        <p>
          B.Tech - Computer Science & Engineering
          <br />
          Shri Ram College, Jabalpur
        </p>

        <br />

        <p>
          Diploma - Computer Science & Engineering
          <br />
          Kalaniketan Polytechnic College, Jabalpur
        </p>
      </div>

      <div style={card}>
        <h2 style={title}>Contact</h2>

        <p>Email: rajsoni6080@gmail.com</p>
        <p>Phone: +91-7773861849</p>

        <p>
          GitHub:
          https://github.com/writercodes1
        </p>

        <p>
          LinkedIn:
          https://linkedin.com/in/raj-soni-139663180
        </p>
      </div>
    </div>
  );
}

const card = {
  background: "#111827",
  padding: "30px",
  borderRadius: "20px",
  marginBottom: "30px",
};

const title = {
  color: "#3b82f6",
  marginBottom: "20px",
};
