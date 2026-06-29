import "../App.css";

function About() {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS / CSS3",
    "Git & GitHub",
    "RESTful APIs"
  ];

  return (
    <div className="about-page-wrapper" style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#ffffff" }}>
      
      {/* 1️⃣ INTRO & BIO SECTION (2 Columns Layout للقضاء على الفراغ) */}
      <section className="section about-intro" style={{ padding: "100px 8%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* العمود الأيسر: العناوين */}
        <div>
          <h1 style={{ fontSize: "40px", fontWeight: "800", marginBottom: "15px", lineHeight: "1.2" }}>About DevAgency</h1>
          <p className="subtitle" style={{ color: "#2563eb", fontSize: "18px", fontWeight: "600", lineHeight: "1.5" }}>
            We are a full-service digital agency specialized in building high-performance, 
            modern, and scalable web applications from scratch.
          </p>
        </div>
        
        {/* العمود الأيمن: النص التفصيلي */}
        <div className="about-bio" style={{ background: "#f8fafc", padding: "35px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8", margin: 0 }}>
            At <strong>DevAgency</strong>, we bridge the gap between ideas and digital reality. Led by 
            <strong style={{ color: "#2563eb" }}> Promsi</strong>, a passionate Full-Stack Developer from Tunisia, we focus on 
            delivering clean code, pixel-perfect responsive designs, and exceptional user experiences. 
            Whether you need a custom E-commerce store, a sleek landing page, or a complex dynamic dashboard, 
            we build tools that help businesses grow and scale globally.
          </p>
        </div>
      </section>

      {/* 2️⃣ TECH STACK SECTION */}
      <section className="section skills-section" style={{ background: "#f8fafc", padding: "100px 8%", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "10px" }}>Our Tech Stack & Skills</h2>
        <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
          The modern technologies we use to bring your premium projects to life:
        </p>
        
        {/* Grid احترافي وClean للـ Skills */}
        <div className="skills-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-badge"
              style={{
                background: "#ffffff",
                padding: "16px 20px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "14px",
                color: "#1e293b",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.02)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.3s ease"
              }}
            >
              <span style={{ color: "#2563eb" }}>✦</span> {skill}
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default About;