import { motion } from "framer-motion";
import React from "react";
import { techStack } from "../../file";
import "./Progress.scss";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    // Framer Motion animation variant
    const fadeInFromBottom = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" },
      },
    };

    return (
      <motion.div
        className="skills-container"
        variants={fadeInFromBottom}
        initial="hidden"
        animate="visible"
      >
        <div className="skills-bar" id="Proficiency"> 
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage,
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    );
  }
  return null;
}
