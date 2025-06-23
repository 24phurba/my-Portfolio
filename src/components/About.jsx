import { useEffect, useState } from "react";

const About = () => {
  // State to trigger fade-in animations after mount
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.gradientOverlay}></div>
      <div
        style={{
          ...styles.overlay,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2 style={styles.heading}>✨ About Me</h2>
        <img
          src="myphoto.jpg"
          alt="Phurba Profile"
          style={{
            ...styles.image,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(142, 68, 173, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
          }}
        />
        <p style={styles.text}>
          Hi, I'm <strong>Phurba</strong> — a passionate web developer exploring{" "}
          <span style={styles.highlight}>React</span>,{" "}
          <span style={styles.highlight}>Node.js</span>, and{" "}
          <span style={styles.highlight}>MongoDB</span>. <br />I love dancing
          and building cool apps that solve real problems.
        </p>

        <h2 style={styles.subHeading}>🎓 Trainings & 💼 Work Experience</h2>

        <p style={styles.text}>
          I completed a <strong>Tally ERP 0.9</strong> course over six months at
          a well-known institute in Bhutan: <em>Global Computer Center</em>{" "}
          located in Wangdue district.
        </p>

        <p style={styles.text}>
          I recently completed a 3-month web development course focused on
          building responsive and interactive websites. I gained hands-on
          experience with HTML, CSS, and JavaScript — the core technologies of
          frontend development.
        </p>

        <p style={styles.text}>
          I also worked for <strong>two years</strong> as a counter official in
          Punakha Dzong. This role sharpened my communication and{" "}
          <span style={styles.highlight}>problem-solving skills</span> through
          real-time service delivery to the public.
        </p>

        <p style={styles.text}>
          As a multi-skilled professional, I combine technical expertise,
          financial knowledge, and an entrepreneurial mindset. I'm confident in
          building responsive websites using React, Node.js, Express, and
          MongoDB.
        </p>

        <hr style={styles.divider} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    padding: "4rem 1rem",
    backgroundImage:
      "url('https://i.pinimg.com/736x/a5/1e/b8/a51eb8074352e765c15e61c6a1859f5e.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(142, 68, 173, 0.85), rgba(58, 123, 213, 0.85))",
    zIndex: 1,
    borderRadius: "25px",
  },
  overlay: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "3rem 3rem 4rem",
    borderRadius: "25px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "1.8rem",
    color: "#5e2a7e",
    textShadow: "1px 1px 4px rgba(0,0,0,0.1)",
    letterSpacing: "1.2px",
  },
  subHeading: {
    fontSize: "2rem",
    marginTop: "3rem",
    marginBottom: "1.5rem",
    color: "#4b3b61",
    fontWeight: "600",
  },
  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    marginBottom: "2rem",
    userSelect: "none",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#444",
    marginBottom: "1.8rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  highlight: {
    color: "#8e44ad",
    fontWeight: "700",
    position: "relative",
    cursor: "default",
    paddingBottom: "2px",
    transition: "color 0.3s ease",
  },
  divider: {
    marginTop: "3rem",
    border: "none",
    height: "3px",
    width: "80px",
    background: "linear-gradient(90deg, #8e44ad 0%, #ba68c8 50%, #8e44ad 100%)",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default About;

// const About = () => {
//   return (
//     <section id="about" style={styles.section}>
//       <div style={styles.overlay}>
//         <h2 style={styles.heading}>✨ About Me</h2>
//         <img src="myphoto.jpg" alt="Phurba Profile" style={styles.image} />
//         <p style={styles.text}>
//           Hi, I'm <strong>Phurba</strong> — a passionate web developer exploring{" "}
//           <span style={styles.highlight}>React</span>,{" "}
//           <span style={styles.highlight}>Node.js</span>, and{" "}
//           <span style={styles.highlight}>MongoDB</span>. <br />I love dancing
//           and building cool apps that solve real problems.
//         </p>

//         <h2 style={styles.subHeading}>🎓 Trainings & 💼 Work Experience</h2>

//         <p style={styles.text}>
//           I completed a <strong>Tally ERP 0.9</strong> course over six months at
//           a well-known institute in Bhutan: <em>Global Computer Center</em>{" "}
//           located in Wangdue district.
//         </p>

//         <p style={styles.text}>
//           I recently completed a 3-month web development course focused on
//           building responsive and interactive websites. I gained hands-on
//           experience with HTML, CSS, and JavaScript — the core technologies of
//           frontend development.
//         </p>

//         <p style={styles.text}>
//           I also worked for <strong>two years</strong> as a counter official in
//           Punakha Dzong. This role sharpened my communication and
//           <span style={styles.highlight}> problem-solving skills</span> through
//           real-time service delivery to the public.
//         </p>

//         <p style={styles.text}>
//           As a multi-skilled professional, I combine technical expertise,
//           financial knowledge, and an entrepreneurial mindset. I'm confident in
//           building responsive websites using React, Node.js, Express, and
//           MongoDB.
//         </p>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: "3rem 1rem",
//     backgroundImage:
//       "url('https://i.pinimg.com/736x/a5/1e/b8/a51eb8074352e765c15e61c6a1859f5e.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   },
//   overlay: {
//     maxWidth: "900px",
//     margin: "0 auto",
//     backgroundImage:
//       "url('https://m.media-amazon.com/images/I/313Fq-FbsHL._CR0,0,407,407_._FMjpg_.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     padding: "2.5rem",
//     borderRadius: "20px",
//     boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
//     textAlign: "center",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     marginBottom: "1.5rem",
//     color: "#2c3e50",
//   },
//   subHeading: {
//     fontSize: "1.8rem",
//     marginTop: "2.5rem",
//     marginBottom: "1rem",
//     color: "#374151",
//   },
//   image: {
//     width: "180px",
//     height: "180px",
//     borderRadius: "50%",
//     objectFit: "cover",
//     boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
//     marginBottom: "1.5rem",
//   },
//   text: {
//     fontSize: "1.1rem",
//     lineHeight: "1.9",
//     color: "#333",
//     marginBottom: "1.5rem",
//   },
//   highlight: {
//     color: "#8e44ad",
//     fontWeight: "600",
//   },
// };

// export default About;
