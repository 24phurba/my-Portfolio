const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>✨ About Me</h2>
      <img src="myphoto.jpg" alt="Phurba Profile" style={styles.image} />
      <p style={styles.text}>
        Hi, I'm <strong>Phurba</strong> — a passionate web developer exploring{" "}
        <span style={styles.highlight}>React</span>,{" "}
        <span style={styles.highlight}>Node.js</span>, and{" "}
        <span style={styles.highlight}>MongoDB</span>. <br />I love dancing and
        building cool apps that solve real problems.
      </p>

      <h2 style={styles.subHeading}>🎓 Trainings & 💼 Work Experience</h2>

      <p style={styles.text}>
        I completed a <strong>Tally ERP 0.9</strong> course over six months at a
        well-known institute in Bhutan: <em>Global Computer Center</em> located
        in Wangdue district.
      </p>

      <p style={styles.text}>
        I also worked for <strong>two years</strong> as a counter official in
        Punakha Dzong. This role sharpened my communication and
        <span style={styles.highlight}> problem-solving skills</span> through
        real-time service delivery to the public.
      </p>
      <p>
        As a multi-skilled professional, I bring together technical expertise,
        financial knowledge, and an entrepreneurial mindset. With a strong
        foundation in web development, I specialize in building responsive,
        user-centric websites and applications using modern technologies like
        React, Node.js, Express, and MongoDB. I enjoy crafting clean, efficient
        code and turning ideas into real-world digital solutions. In addition to
        my technical abilities, I am proficient in Tally, which gives me a solid
        understanding of accounting principles, financial reporting, and
        business operations. This dual knowledge in tech and finance strengthens
        my ability to approach problems with both creativity and strategic
        thinking. Driven by curiosity and a passion for growth, I’ve also
        embraced the spirit of entrepreneurship—exploring how technology can be
        used to solve real problems, create value, and empower people. Whether
        working independently or as part of a team, I am always eager to learn,
        innovate, and contribute meaningfully to projects that make a
        difference.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: "3rem 1rem",
    maxWidth: "850px",
    margin: "2rem auto",
    backgroundColor: "#f9fbfc",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  subHeading: {
    fontSize: "1.7rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    color: "#444",
  },
  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#555",
    padding: "0 1rem",
    marginBottom: "1rem",
  },
  highlight: {
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default About;

// const About = () => {
//   return (
//     <section id="about" style={styles.section}>
//       <h2>About Me</h2>
//       <img src="myphoto.jpg" alt="Profile" style={styles.image} />
//       <p>
//         Hi, I'm Phurba — a passionate web developer exploring React, Node.js,
//         and MongoDB. I love dancing and building cool apps!
//       </p>
//       <h2>Highlight on my other trainings and work experince: </h2>
//       <p>I have done my Tally ERP 0.9 course for six months in a well known and refined instiute in Bhutan namely Global computer center located in Wangdue district.
//       </p>
//       <p>I  served in Punakha dzong as a civil servent by working as a counter officail for two years where i not only have communication skill but also a highly problem solving skill. </p>

//     </section>
//   );
// };

// const styles = {
//   section: { padding: "2rem", textAlign: "center" },
//   image: { width: "180px", borderRadius: "10px", margin: "1rem auto" },
// };

// export default About;
