import { motion } from "framer-motion"; // Import motion from framer-motion
import React, { useContext, useState } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./AboutMe.css";

export default function AboutMe() {
  const { isDark } = useContext(StyleContext);

  const [expandedCard, setExpandedCard] = useState(null);

  // Sample About Me cards data
  const aboutMeData = [
    {
      id: 1,
      title: "Who is Firafis Berhanu?",
      description:
        "Firafis Berhanu is a talented third-year software engineering student at Haramaya University, excelling academically with a remarkable GPA of 3.93.",
      readMore:
        "A passionate learner, Firafis is deeply interested in web development, game development, and programming with a focus on front-end technologies like HTML, CSS, and JavaScript, as well as expertise in Python and Java. " +
        "Firafis enjoys blending creativity and functionality in projects, with a keen eye for professional design and modern UI/UX principles. " +
        "Known for a preference for detailed and stylistic explanations, Firafis continually seeks to master new technologies and solve challenges with innovation and precision." +

        "Beyond technical skills, Firafis is motivated by a love for teaching, sharing knowledge, and building systems that make a difference in people’s lives. With an appreciation for both theory and hands-on practice, Firafis is paving the way for a promising career in Ethiopia’s growing tech industry.",
    },
    {
      id: 2,
      title: "Firafis Berhanu's Vision",
      description: "Firafis Berhanu envisions becoming a leading software engineer in Ethiopia, contributing to the nation's technological advancement by developing innovative, impactful, and user-friendly solutions.",
      readMore:
        "With a passion for web development, game creation, and problem-solving, Firafis aspires to bridge the gap between global technological trends and local needs, fostering growth and accessibility in the tech sector." +

        "Dedicated to mastering advanced programming concepts and modern tools, Firafis aims to inspire others by sharing knowledge, mentoring budding developers, and collaborating on groundbreaking projects. By combining creativity, precision, and a strong sense of purpose, Firafis seeks to shape a future where technology empowers communities and transforms lives across Ethiopia and beyond.",
    },
    {
      id: 3,
      title: "Passionate Software Engineer and Lifelong Learner",
      description: "Firafis Berhanu is a passionate software engineer with an unwavering commitment to learning and growth.",
      readMore:
        "Currently in his third year of studying software engineering at Haramaya University, Firafis thrives on mastering new technologies, solving complex problems, and creating impactful solutions. His enthusiasm for web development, Python programming, and front-end design fuels his drive to deliver user-friendly and efficient applications." +

        "Known for his attention to detail and creative approach, Firafis embraces the challenges of programming as opportunities to expand his skillset. His focus on continuous learning extends beyond the classroom, as he actively explores new tools, frameworks, and programming languages to stay ahead in the ever-evolving tech industry.",
    },
  ];

  // Toggle expanded card
  const toggleExpand = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    expanded: { scale: 1.05, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="main"
      id="about-me"
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div className="about-me-header" id="about">
        <h1 className="about-me-title">About Me</h1>
        <p className={isDark ? "dark-mode subtitle" : "subtitle"}>
          Learn more about who I am and what I do.
        </p>
      </div>
      <div className="about-me-content">
        {aboutMeData.map((item) => (
          <motion.div
            key={item.id}
            className={isDark ? `dark-mode-about-me-card ${expandedCard === item.id ? "expanded" : ""
              }` : `about-me-card ${expandedCard === item.id ? "expanded" : ""
              }`}
            onClick={() => toggleExpand(item.id)}
            variants={cardVariants}
          >
            <h2 className={isDark ? "dark-mode card-title" : "card-title"}>
              {item.title}
            </h2>
            <p className={isDark ? "dark-mode card-description" : "card-description"}>
              {expandedCard === item.id
                ? `${item.description} ${item.readMore}`
                : item.description}
            </p>
            <motion.button
              className="read-more-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering card expansion
                toggleExpand(item.id);
              }}
            >
              {expandedCard === item.id ? "Show Less" : "Read More"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
