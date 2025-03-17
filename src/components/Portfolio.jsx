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
        <h2>Projects</h2>

        {[
          {
            title: 'Website',
            id: 'web',
            projects: [
              {
                id: "FarmersBuddy",
                description: "Farmers Buddy bridges the gap between local farmers and eco-conscious consumers...",
                link: "https://farmers-buddy-demo.com",
                external: true,
                image: "/assets/farmers-buddy.jpg",
                alt: "Farmers Buddy Interface"       // Add alt text
              },
              {
                id: "E-Commerce Analytics",
                description: 'E-commerce analytics dashboard with real-time visualization',
                link: "#web-project-2",
                external: false,
                image: "/assets/ecommerce-analytics.jpg",
                alt: "Analytics Dashboard"
              }
            ]
          },
          {
            title: 'Data Science',
            id: 'data-science',
            projects: [
              {
                id: 'Predictive Maintenance',
                description: 'Predictive maintenance system for manufacturing equipment',
                link: "https://github.com/yourusername/predictive-maintenance",
                external: true,
                image: "/assets/predictive-maintenance.jpg",
                alt: "Industrial Equipment Analysis"
              },
              {
                id: 'Customer Churn',
                description: 'Customer churn prediction model for telecom company',
                link: "#data-science-project-2",
                external: false,
                image: "/assets/churn-analysis.jpg",
                alt: "Churn Prediction Model"
              }
            ]
          },
          {
            title: 'Machine Learning & AI',
            id: 'ml-ai',
            projects: [
              {
                id: 'Quality Control AI',
                description: 'Computer vision system for quality control in production lines',
                link: "https://github.com/yourusername/quality-control-ai",
                external: true,
                image: "/assets/quality-control.jpg",
                alt: "Computer Vision Inspection"
              },
              {
                id: 'Feedback Analysis',
                description: 'NLP-based customer feedback analysis system',
                link: "#ml-ai-project-2",
                external: false,
                image: "/assets/nlp-analysis.jpg",
                alt: "Sentiment Analysis Dashboard"
              },
              {
                id: 'Object Detection',
                description: 'Real-time object detection using TensorFlow Lite',
                link: "https://colab.research.google.com/drive/18l_X5ppdH-5LXNILqqv9sevbuCQ1Wiu-?usp=sharing",
                external: true,
                image: "/assets/object-detection.jpg",
                alt: "Object Detection Visualization"
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
                  {/* Image Container */}
                  <div className="image-container">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>

                  <h3>{project.id}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    className="project-link"
                    {...(project.external ? {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {})}
                  >
                    {project.external ? 'View Project' : 'View Details'}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
