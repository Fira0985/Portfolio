import { motion } from "framer-motion";
import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { bigProjects } from "../../file";
import "./Projects.css"; // Ensure you have the correct CSS file

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="main"
      id="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div id="Projects">
        <h1 className={isDark ? "dark-mode-skills-heading": "skills-heading"} id="projects">{bigProjects.title}</h1>
        <p
          className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}
        >
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => (
            <motion.div
              key={i}
              className={`project-card ${isDark ? "dark-mode" : "light-mode"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              {project.image ? (
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="card-image"
                  />
                </div>
              ) : null}
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {project.projectName}
                </h5>
                <p
                  className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}
                >
                  {project.projectDesc}
                </p>
                {project.footerLink ? (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, i) => (
                      <span
                        key={i}
                        className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab(link.url)}
                      >
                        {link.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
