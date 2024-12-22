import emoji from "react-easy-emoji";

const greeting = {
  username: "Firafis Berhanu",
  title: "Welcome to My Portfolio",
  subTitle: emoji(
    "Hi, I'm Firafis Berhanu, a passionate Software Engineer. I specialize in building user-friendly, efficient applications. Explore my projects, learn about my skills, and let's create something amazing together! I'm excited to connect and collaborate"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING FULL-STACK DEVELOPER WITH A STRONG FOCUS ON MODERN TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Proficient in building interactive front-end user interfaces using React, HTML, CSS, and JavaScript"
    ),
    emoji("⚡ Experienced in back-end development with Node.js, Express.js, and MongoDB"),
    emoji("⚡ Skilled in developing responsive Progressive Web Applications (PWA)"),
    emoji("⚡ Proficient in Java programming for desktop applications"),
    emoji("⚡ Expertise in Python for AI and backend development"),
    emoji(
      "⚡ Strong knowledge of database engineering for creating efficient and scalable solutions"
    ),
    emoji("⚡ Experienced in Unity for game development"),
    emoji("⚡ Capable of integrating third-party services like Firebase and AWS")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
    },
    {
      skillName: "css3",
    },
    {
      skillName: "JavaScript",
    },
    {
      skillName: "reactjs",
    },
    {
      skillName: "nodejs",
    },
    {
      skillName: "python",
    },
    {
      skillName: "java",
    },
    {
      skillName: "sql-database",
    },
    {
      skillName: "mongo db",
    },
    {
      skillName: "git",
    },
    {
      skillName: "unity",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Haramaya University",
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2021 - Present",
      desc: "Focusing on software development, database management, and programming languages.",
      descBullets: [
        "Developed a web application as part of a capstone project.",
        "Maintained a GPA of 3.93, showcasing strong problem-solving and analytical skills.",
        "Studied courses including Software Engineering Principles, Data Structures, Web Development, and Network Security."
      ]
    },

    {
      schoolName: "Omishtu-Joy Tech Solution ",
      subHeader: "MERN Stack Course",
      duration: "June 2024 - August 2024",
      desc: "Earned a 2-month Full Stack Web Development (MERN) certification from Omishtu-Joy Tech Solutions (June–August 2024). Gained expertise in front-end and back-end development, version control, testing, debugging, database management, data modeling, and using modern frameworks and libraries. Demonstrated proficiency in building dynamic, scalable web applications, showcasing strong practical skills in the MERN stack (MongoDB, Express.js, React, and Node.js).",
      descBullets: [
        "Developed a full stack web application.",
        "Studied courses including fronted, backend, version control, and database management(MongoDB)."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%" // Increased proficiency in backend, considering Node.js, MongoDB, and Python
    },
    {
      Stack: "Programming",
      progressPercentage: "85%" // Increased proficiency in programming (Java, Python)
    },
    {
      Stack: "Database Management",
      progressPercentage: "70%" // MongoDB and SQL expertise
    },
    {
      Stack: "Version Control",
      progressPercentage: "65%" // Git proficiency added
    },
    {
      Stack: "Game Development",
      progressPercentage: "20%" // Unity proficiency
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "Take a look at the projects I've worked on. Each one highlights my skills, creativity, and passion for building innovative solutions.",
  projects: [
    {
      image: require("./assets/fonts/image/Screenshot (112).png"), // Add the image path for Tasky App
      projectName: "Tasky App",
      projectDesc: "Tasky is a simple and intuitive task management app designed to help users organize, " + 
      "prioritize, and complete tasks efficiently. The app is perfect for those looking to manage their " +
      "time and boost productivity. Note: Tasky is still in development. Core features like task creation " +
      "and prioritization are functional, but more features, including user authentication and reminders, are coming soon!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Fira0985/Tasky-app"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/Fira0985/Tasky-app" // Add your GitHub link here
        }
      ]
    },
    {
      image: require("/"), // Add the image path for Nextu
      projectName: "Weather App",
      projectDesc: "Weather App provides real-time weather data and dynamically changes its background " +
      "color based on the weather conditions (e.g., sunny, rainy, cloudy). It fetches data using the " +
      "OpenWeather API.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Fira0985/Weather-App"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/Fira0985/Weather-App" // Add your GitHub link here
        }
      ]
    },
    {
      image: require("./assets/fonts/image/Screenshot (113).png"), // Add the image path for Tasky App
      projectName: "Password Generator",
      projectDesc: "Password Generator is a tool that generates secure, random passwords for your accounts. " +
      "After generating a password, it is automatically saved as a text file locally on your device for easy " +
      "access. Note: This app is still in development. Current features include password generation and local " +
      "file saving, with future updates planned for password encryption and enhanced security options.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fira0985.github.io/password_generator/pass.html"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/Fira0985/password_generator" // Add your GitHub link here
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

export {
  bigProjects, educationInfo, greeting, skillsSection,
  techStack
};

