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

        {[
          {
            title: 'Website',
            id: 'web',
            projects: [
              { id: "FarmConnect", description: "FarmConnect bridges the gap between local farmers and eco-conscious consumers through a real-time agricultural marketplace. This React-powered platform reduces food waste by 65% and food transportation emissions by 40% through features like bicycle-delivery coordination and AI-driven surplus redistribution." },
              { id: 2, description: 'Description of the website project goes here.' }
            ]
          },
          {
            title: 'Data Science',
            id: 'data-science',
            projects: [
              { id: 1, description: 'Description of the data science project goes here.' },
              { id: 2, description: 'Description of the data science project goes here.' }
            ]
          },
          {
            title: 'Machine Learning & AI',
            id: 'ml-ai',
            projects: [
              { id: 1, description: 'Description of the machine learning project goes here.' },
              { id: 2, description: 'Description of the machine learning project goes here.' },
              {
                id: 'colab',
                description: 'A machine learning project hosted on Google Colab.',
                link: 'https://colab.research.google.com/drive/18l_X5ppdH-5LXNILqqv9sevbuCQ1Wiu-?usp=sharing',
                external: true
              }
            ]
          }
        ].map((category) => (
          <div key={category.id} className="category">
            <h3>{category.title}</h3>
            <div className="projects-container">
              {category.projects.map((project) => (
                <motion.div
                  key={`${category.id}-${project.id}`}
                  className="project-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>{`${category.title} Project ${project.id}`}</h3>
                  <p>{project.description}</p>
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project
                    </a>
                  ) : (
                    <a
                      href={`#${category.id}-project-${project.id}`}
                      className="project-link"
                    >
                      View Details
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
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
