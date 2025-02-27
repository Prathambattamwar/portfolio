import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Portfolio.css"; // Import CSS

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio-container ${darkMode ? "dark" : "light"}`}>
      <header className="portfolio-header">
        <h1 className="header-title">Data Scientist Portfolio</h1>
        <button onClick={toggleTheme} className={`theme-toggle-btn ${darkMode ? "dark" : ""}`}>
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </header>

      <section className="portfolio-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm a passionate Data Scientist with expertise in Machine Learning, Deep Learning, and AI. 
          I love working with data to extract meaningful insights and build innovative solutions.
        </p>
      </section>

      <section className="portfolio-section">
        <h2>Projects</h2>
        <div className="projects-container">
          {[1, 2, 3].map((project) => (
            <motion.div key={project} className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>Project {project}</h3>
              <p>Description of the project goes here.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {["Python", "TensorFlow", "Machine Learning", "Data Visualization", "Deep Learning"].map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Contact</h2>
        <p>
          Feel free to reach out at{" "}
          <a href="mailto:youremail@example.com" className="text-blue-500 dark:text-blue-300">
            youremail@example.com
          </a>
        </p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
