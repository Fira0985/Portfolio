import { motion } from "framer-motion";
import React, { useContext } from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../contexts/StyleContext";
import { skillsSection } from "../../file";
import "./Skills.css";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <motion.div
          className="skills-text-div"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <h1 className={isDark ? "dark-mode-skills-heading": "skills-heading"}>
            {skillsSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
          <div className="skills-card-container">
            {skillsSection.skills.map((skill, i) => {
              return (
                <div
                  key={i}
                  className={isDark ? "dark-mode skill-card" : "skill-card"}
                >
                  <h2 className="skill-title">{skill}</h2>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
