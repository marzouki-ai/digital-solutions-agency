import "../App.css";

function Services() {
  const servicesList = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Building fast, scalable, and responsive web applications using the MERN Stack (React, Node.js) tailored to your business needs."
    },
    {
      icon: "🎨",
      title: "UI/UX Modern Design",
      desc: "Creating sleek, user-friendly, and modern digital interfaces that guarantee high conversion rates and exceptional user experience."
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      desc: "Developing fully customized online stores with secure payment gateways, dynamic shopping carts, and easy-to-use admin dashboards."
    }
  ];

  return (
    <section className="section services-page" style={{ fontFamily: "'Inter', sans-serif", padding: "100px 8%", textAlign: "center", background: "#f8fafc", minHeight: "80vh" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#0f172a", marginBottom: "15px" }}>Our Services</h1>
      <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto 60px auto", lineHeight: "1.6" }}>
        We provide high-quality digital solutions to help your business scale in the modern world.
      </p>
      
      {/* Grid احترافي يضمن عدم تداخل الـ Cards مع بعضها */}
      <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ 
              background: "#ffffff", 
              padding: "45px 30px", 
              borderRadius: "16px", 
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)", 
              border: "1px solid #e2e8f0", 
              textAlign: "left",
              transition: "all 0.3s ease"
            }}
          >
            {/* خلفية الأيقونة الفخمة */}
            <div style={{ 
              fontSize: "32px", 
              background: "#eff6ff", 
              width: "60px", 
              height: "60px", 
              display: "flex", 
              alignItems: "center", 
              justify: "center", 
              justifyContent: "center",
              borderRadius: "12px", 
              marginBottom: "25px" 
            }}>
              {service.icon}
            </div>
            
            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", marginBottom: "12px" }}>{service.title}</h3>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7" }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;