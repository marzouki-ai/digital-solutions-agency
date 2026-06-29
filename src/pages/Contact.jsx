import "../App.css";

function Contact() {
  return (
    <section className="section contact-page" style={{ fontFamily: "'Inter', sans-serif", padding: "100px 8%", textAlign: "center", background: "#ffffff", minHeight: "85vh" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#0f172a", marginBottom: "15px" }}>Get In Touch</h1>
      <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto 60px auto", lineHeight: "1.6" }}>
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div className="contact-wrapper" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch", /* 🔥 التعديل السحري: يخلي الزوز صناديق فرد طول وعلو متناسق */
        gap: "50px",
        flexWrap: "wrap",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "left"
      }}>
        
        {/* 1️⃣ معلومات الاتصال الاحترافية */}
        <div className="contact-info" style={{ 
          flex: "1", 
          minWidth: "300px", 
          background: "#f8fafc", 
          padding: "40px", 
          borderRadius: "16px", 
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center" /* يوزع المحتوى الداخلي بشكل متناسق مع الطول الجديد */
        }}>
          <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", marginBottom: "30px" }}>Contact Information</h3>
          
          <div style={{ marginBottom: "25px" }}>
            <span style={{ color: "#2563eb", fontWeight: "700", display: "block", marginBottom: "5px", fontSize: "14px", letterSpacing: "0.5px", textTransform: "uppercase" }}>✉️ Email</span>
            <a href="mailto:yassinemarzouki70@gmail.com" style={{ color: "#0f172a", textDecoration: "none", fontSize: "16px", fontWeight: "500", transition: "color 0.3s" }}>
              yassinemarzouki70@gmail.com
            </a>
          </div>
          
          <div style={{ marginBottom: "25px" }}>
            <span style={{ color: "#2563eb", fontWeight: "700", display: "block", marginBottom: "5px", fontSize: "14px", letterSpacing: "0.5px", textTransform: "uppercase" }}>📍 Location</span>
            <p style={{ margin: 0, color: "#475569", fontSize: "16px", fontWeight: "500" }}>Tunisia</p>
          </div>
          
          <div>
            <span style={{ color: "#2563eb", fontWeight: "700", display: "block", marginBottom: "10px", fontSize: "14px", letterSpacing: "0.5px", textTransform: "uppercase" }}>🌐 Social Profiles</span>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="https://www.linkedin.com/in/yassine-marzouki" target="_blank" rel="noreferrer" style={{ color: "#2563eb", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>LinkedIn &rarr;</a>
              <a href="https://github.com/marzouki-ai" target="_blank" rel="noreferrer" style={{ color: "#475569", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>GitHub &rarr;</a>
            </div>
          </div>
        </div>

        {/* 2️⃣ الـ Form البروفيسيونال */}
        <form 
          action="https://formspree.io/f/mdardndp" 
          method="POST" 
          className="contact-form" 
          style={{ flex: "1.5", minWidth: "320px", display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Your Name" 
              style={{ padding: "14px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", outline: "none", background: "#fff", transition: "border-color 0.3s" }}
            />
          </div>

          <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Your Email" 
              style={{ padding: "14px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", outline: "none", background: "#fff", transition: "border-color 0.3s" }}
            />
          </div>

          <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>Message</label>
            <textarea 
              name="message" 
              required 
              placeholder="Your Message" 
              rows="5" 
              style={{ padding: "14px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", outline: "none", background: "#fff", resize: "vertical", transition: "border-color 0.3s" }}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn" 
            style={{ 
              padding: "14px 28px", 
              fontSize: "16px", 
              fontWeight: "600", 
              borderRadius: "8px", 
              background: "#2563eb", 
              color: "#ffffff", 
              border: "none", 
              cursor: "pointer", 
              alignSelf: "flex-start",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)"
            }}
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;