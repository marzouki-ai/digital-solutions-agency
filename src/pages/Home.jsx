import promsiImg from "../assets/promsi.png"; 
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-page-wrapper" style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
      
      {/* 1️⃣ HERO SECTION */}
      <section className="hero" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "120px 8%", gap: "50px", flexWrap: "wrap" }}>
        <div className="hero-text" style={{ flex: "1", minWidth: "300px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "800", letterSpacing: "-1px", marginBottom: "10px", lineHeight: "1.2" }}>We Build Modern Digital Solutions</h1>
          <h2 style={{ fontSize: "24px", color: "#2563eb", fontWeight: "600", marginBottom: "20px" }}>Crafting Premium Web Experiences</h2>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "30px" }}>
            We are a team of expert developers and designers building fast, 
            scalable, and beautiful web applications that help your business grow and stand out.
          </p>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn" style={{ padding: "12px 28px", fontWeight: "600", borderRadius: "8px", transition: "all 0.3s" }}>Start Your Project</Link>
            <Link to="/projects" className="btn" style={{ padding: "12px 28px", fontWeight: "600", borderRadius: "8px", background: "transparent", color: "#0f172a", border: "2px solid #0f172a", boxShadow: "none" }}>View Work</Link>
          </div>
        </div>
        
        <div className="hero-image" style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
          {/* 🔥 التعديل هنا: عطينا الدائرة حجم أقصى متناسق يخلي الـ Hero مرتاح وأنيق */}
          <div style={{ position: "relative", width: "100%", maxWidth: "340px", aspectRatio: "1/1" }}>
            <div style={{ position: "absolute", top: "10px", left: "10px", right: "-10px", bottom: "-10px", background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", borderRadius: "50%", zIndex: "0" }}></div>
            <img src={promsiImg} alt="Promsi - Agency Leader" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", border: "4px solid #ffffff", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", position: "relative", zIndex: "1" }} />
          </div>
        </div>
      </section>

      {/* 2️⃣ STATS SECTION */}
      <section style={{ background: "#0f172a", color: "#fff", padding: "60px 8%", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "30px", textAlign: "center" }}>
        {[{ num: "40+", txt: "Projects Delivered" }, { num: "99%", txt: "Satisfied Clients" }, { num: "5+", txt: "Years Experience" }].map((stat, i) => (
          <div key={i} style={{ padding: "10px 20px" }}>
            <h3 style={{ fontSize: "40px", fontWeight: "800", color: "#3b82f6", marginBottom: "5px" }}>{stat.num}</h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", fontWeight: "500", letterSpacing: "0.5px" }}>{stat.txt}</p>
          </div>
        ))}
      </section>

      {/* 3️⃣ WHY CHOOSE US SECTION */}
      <section className="section" style={{ background: "#f8fafc", padding: "100px 8%", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "10px" }}>Why Choose Us?</h2>
        <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto 50px auto" }}>We deliver end-to-end digital transformation tailored to your target audience.</p>
        
        <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
          {[
            { icon: "⚡", title: "High Performance", desc: "Blazing fast loading speeds optimizing user retention." },
            { icon: "📱", title: "Fully Responsive", desc: "Flawless experience across mobiles, tablets, and desktops." },
            { icon: "🔒", title: "Secure & Clean Code", desc: "Built using industry best practices for ultimate security." }
          ].map((card, i) => (
            <div className="card" key={i} style={{ background: "#ffffff", padding: "40px 30px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)", border: "1px solid #e2e8f0", transition: "transform 0.3s, boxShadow 0.3s", textAlign: "left" }}>
              <div style={{ fontSize: "35px", background: "#eff6ff", width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", marginBottom: "20px" }}>{card.icon}</div>
              <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px", color: "#1e293b" }}>{card.title}</h4>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{card.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: "50px" }}>
          <Link to="/services" style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "16px" }}>See all services &rarr;</Link>
        </div>
      </section>

      {/* 4️⃣ CTA SECTION */}
      <section className="section" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "#ffffff", padding: "100px 8%", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: "800", marginBottom: "15px" }}>Let's Build Something Great Together</h2>
        <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "600px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>Ready to take your business to the next level? Contact us today for a free consultation.</p>
        <Link to="/contact" className="btn" style={{ padding: "14px 36px", fontWeight: "600", borderRadius: "8px", background: "#2563eb", color: "#ffffff" }}>Get a Free Quote</Link>
      </section>

    </div>
  );
}

export default Home;