const Contact = () => {
  return (
    <section style={styles.section}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>📬 Contact</h2>
        <p style={styles.text}>
          📧 Email:{" "}
          <a href="mailto:phurbasekai134@gmail.com" style={styles.link}>
            phurbasekai134@gmail.com
          </a>
        </p>
        <p style={styles.text}>📱 B-mobile: 17821533</p>
        <p style={styles.text}>📞 TashiCell: 77889799</p>
        <p style={styles.text}>
          💻 GitHub:{" "}
          <a
            href="https://github.com/phurba24"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            phurba24
          </a>
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundImage:
      "url('https://th.bing.com/th/id/OIP.FsNOqeCyGB1aEEFl_VfQ4wHaNK?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "3rem 1rem",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    color: "#444",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Contact;
