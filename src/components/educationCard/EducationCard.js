import { motion } from "framer-motion";
import React, { createRef, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./EducationCard.scss";

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  const { isDark } = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);

  // Animation Variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  return (
    <div>
      {/* Fade Animation for Education Card */}
      <motion.div
        className="education-card"
        id="Education"
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
      >
        {school.logo && (
          <div className="education-card-left">
            <motion.img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
              variants={fadeInLeft}
            />
          </div>
        )}

        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {school.subHeader}
            </h5>
            <p
              className={`${
                isDark ? "dark-mode" : ""
              } education-text-duration`}
            >
              {school.duration}
            </p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Slide Animation for Education Card Border */}
      <motion.div
        className="education-card-border"
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}
