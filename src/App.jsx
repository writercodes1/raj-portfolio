export default function App() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#3b82f6", fontSize: "60px" }}>
        Raj Soni
      </h1>

      <h2 style={{ color: "#60a5fa" }}>
        Full Stack Java Developer
      </h2>

      <p style={{ marginTop: "20px", maxWidth: "700px" }}>
        Passionate Full Stack Java Developer skilled in Java,
        Spring Boot, Angular, HTML, CSS, JavaScript, SQL,
        Bootstrap, and responsive web development.
      </p>

      <div
        style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "30px"
        }}
      >
        <h2>Skills</h2>

        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Angular</li>
          <li>HTML CSS JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>

      <div
        style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "30px"
        }}
      >
        <h2>Contact</h2>

        <p>Email: rajsoni6080@gmail.com</p>
        <p>Phone: +91-7773861849</p>
      </div>
    </div>
  );
} 
