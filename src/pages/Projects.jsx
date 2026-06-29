import "../App.css";

function Projects() {
  const projectsList = [
    {
      title: "Todo App",
      desc: "A clean and efficient task management application to organize your daily activities with a smooth user experience.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://marzouki-ai.github.io/Todo-App/"
    },
    {
      title: "Weather App",
      desc: "A real-time weather application that provides accurate forecasts and dynamic updates based on user location.",
      tech: ["React", "API Integration", "CSS"],
      link: "https://marzouki-ai.github.io/Weather-App/"
    },
    {
      title: "Personal Portfolio",
      desc: "My professional portfolio website showcasing my journey, technical skills, and featured digital projects.",
      tech: ["React", "React Router", "Responsive Design"],
      link: "https://marzouki-ai.github.io/"
    }
  ];

  return (
    <section className="section projects-page" style={{ fontFamily: "'Inter', sans-serif", padding: "100px 8%", textAlign: "center", background: "#ffffff", minHeight: "80vh" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#0f172a", marginBottom: "15px" }}>Featured Work</h1>
      <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto 60px auto", lineHeight: "1.6" }}>
        Explore some of my latest successfully delivered digital projects.
      </p>
      
      <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
        {projectsList.map((project, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ 
              background: "#ffffff", 
              padding: "35px 30px", 
              borderRadius: "16px", 
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)", 
              border: "1px solid #e2e8f0", 
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start", 
              textAlign: "left",
              transition: "all 0.3s ease"
            }}
          >
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", marginBottom: "12px" }}>{project.title}</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "20px", minHeight: "65px" }}>{project.desc}</p>
              
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "30px" }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    background: "#f1f5f9",
                    color: "#334155",
                    fontSize: "11px",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    border: "1px solid #cbd5e1"
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{ 
                padding: "10px 20px", 
                fontSize: "14px", 
                fontWeight: "600",
                background: "transparent", 
                color: "#2563eb", 
                border: "2px solid #2563eb", 
                borderRadius: "8px",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s"
              }}
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;