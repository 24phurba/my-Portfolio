const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2>Projects</h2>
      <div style={styles.card}>
        <h3>Movie Watchlist App</h3>
        <p>A full-stack app using React + Express + MongoDB.</p>
        <a href="#" target="_blank">
          View Project
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "2rem" },
  card: {
    border: "1px solid #ddd",
    padding: "1rem",
    borderRadius: "10px",
    marginTop: "1rem",
    background: "#f4f4f4",
  },
};

export default Projects;
