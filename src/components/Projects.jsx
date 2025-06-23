const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>🚀 Projects</h2>
      <div style={styles.card}>
        <h3 style={styles.title}>🎬 Movie Watchlist App</h3>
        <p style={styles.description}>
          A full-stack app built with <strong>React</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong>.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          🔗 View Project
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "3rem 1rem",
    backgroundImage:
      "url('https://th.bing.com/th/id/OIP.sBZXYT7p1Wl7uUI15m7BWQHaE8?w=219&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "2rem",
    color: "#fff",
    textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "1.6rem",
    color: "#333",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  link: {
    fontSize: "1rem",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid #007bff",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    backgroundColor: "white",
    transition: "all 0.3s ease",
  },
};

export default Projects;
