import React from "react";

const WorkPage = () => (
  <section id="work">
    <h2>My Work</h2>
    <p>
      Here is a project I built and deployed on Vercel. You can view it live or
      explore the code:
    </p>
    <div style={{ margin: "1.5rem 0" }}>
      <a
        href="https://htmlcss-portfolio.markushranas-projects.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "bold", color: "#0070f3" }}
      >
        Visit HTML/CSS Portfolio (Vercel)
      </a>
    </div>
    <div
      style={{
        border: "1px solid #e3eafc",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        maxWidth: "100%",
        height: "500px",
        margin: "auto",
      }}
    >
      <iframe
        src="https://htmlcss-portfolio.markushranas-projects.vercel.app/"
        title="HTML/CSS Portfolio Demo"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "500px", width: "100%" }}
        allowFullScreen
      />
    </div>
  </section>
);

export default WorkPage;
