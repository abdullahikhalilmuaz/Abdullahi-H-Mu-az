"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../my-portfolio/components/Navbar";
import { ThemeProvider } from "../my-portfolio/utils/ThemeContext";
import "../my-portfolio/styles/about.css";
import "../my-portfolio/styles/Home.css";
import image from "../my-portfolio/public/upload/TixLite.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "React", level: 90, icon: "fab fa-react" },
    { name: "Next.js", level: 85, icon: "fas fa-layer-group" },
    { name: "JavaScript", level: 92, icon: "fab fa-js-square" },
    { name: "TypeScript", level: 80, icon: "fas fa-code" },
    { name: "Node.js", level: 85, icon: "fab fa-node-js" },
    { name: "Express.js", level: 88, icon: "fas fa-server" },
    { name: "MongoDB", level: 82, icon: "fas fa-database" },
    { name: "HTML5", level: 95, icon: "fab fa-html5" },
    { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
    { name: "Git", level: 87, icon: "fab fa-git-alt" },
    { name: "GitHub", level: 85, icon: "fab fa-github" },
  ];

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2022 - Present",
      description:
        "Developing modern web applications using React, Next.js, and Node.js. Creating scalable solutions for various clients including library management systems and ticketing platforms.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      title: "Frontend Developer",
      company: "Various Projects",
      period: "2021 - 2022",
      description:
        "Built responsive and interactive user interfaces with React and modern CSS. Focused on creating seamless user experiences and pixel-perfect designs.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Git"],
    },
  ];

  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "10+ Projects Completed",
      description: "Successfully delivered various web applications",
    },
    {
      icon: "fas fa-users",
      title: "Client Satisfaction",
      description: "100% client satisfaction rate with quality deliveries",
    },
    {
      icon: "fas fa-code",
      title: "Clean Code Advocate",
      description: "Writing maintainable and scalable code solutions",
    },
    {
      icon: "fas fa-rocket",
      title: "Performance Focused",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  const tabContent = {
    overview: (
      <div className="tab-content-wrapper">
        <div className="about-intro">
          <h2>Hello! I'm Abdullahi H Mu'az</h2>
          <p className="intro-text">
            I'm a passionate full-stack developer with a love for creating
            digital experiences that are not only functional but also beautiful
            and user-friendly. My journey in web development started with
            curiosity and has evolved into a deep passion for crafting solutions
            that make a difference.
          </p>
          <p>
            I specialize in modern web technologies including React, Next.js,
            and Node.js, with a strong foundation in both frontend and backend
            development. I believe in writing clean, maintainable code and
            creating applications that scale.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    skills: (
      <div className="tab-content-wrapper">
        <div className="skills-intro">
          <h2>Technical Skills</h2>
          <p>
            Here are the technologies and tools I work with to bring ideas to
            life. I'm always learning and expanding my skillset to stay current
            with industry trends.
          </p>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <div className="skill-info">
                  <i className={skill.icon}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: skillsVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    experience: (
      <div className="tab-content-wrapper">
        <div className="experience-intro">
          <h2>Professional Experience</h2>
          <p>
            My journey as a developer has been filled with exciting projects and
            continuous learning. Here's a glimpse of my professional experience.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <div className="company-period">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <ThemeProvider>
      <Head>
        <title>About Me - Abdullahi H Mu'az | Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Abdullahi H Mu'az, a passionate full-stack developer specializing in React, Next.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="about me, full-stack developer, React developer, Next.js, Node.js, JavaScript, TypeScript"
        />
        <meta name="author" content="Abdullahi H Mu'az" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Me - Abdullahi H Mu'az | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Learn more about my journey as a full-stack developer and the technologies I work with."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muazdevy.com/about" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Abdullahi H Mu'az",
              description:
                "Learn more about Abdullahi H Mu'az, a full-stack developer specializing in modern web technologies.",
              url: "https://muazdevy.com/about",
              author: {
                "@type": "Person",
                name: "Abdullahi H Mu'az",
                jobTitle: "Full-Stack Developer",
                knowsAbout: skills.map((skill) => skill.name),
              },
            }),
          }}
        />
      </Head>

      <div className="about-page">
        <Navbar />

        <section className="about-header">
          <div className="container">
            <div className="header-content">
              <div className="header-text">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                  Passionate about creating digital experiences that matter
                </p>
              </div>
              <div className="header-image">
                <div className="profile-image">
                  <div className="image-placeholder">
                    <i className="fas fa-user">
                      <img src={image}></img>
                    </i>
                  </div>
                  <div className="floating-elements">
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                    <div className="floating-element"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="tabs-navigation">
              <button
                className={`tab-button ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                <i className="fas fa-user"></i>
                Overview
              </button>
              <button
                className={`tab-button ${
                  activeTab === "skills" ? "active" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                <i className="fas fa-code"></i>
                Skills
              </button>
              <button
                className={`tab-button ${
                  activeTab === "experience" ? "active" : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                <i className="fas fa-briefcase"></i>
                Experience
              </button>
            </div>

            <div className="tab-content">{tabContent[activeTab]}</div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Let's Work Together</h2>
              <p>
                I'm always excited to take on new challenges and collaborate on
                interesting projects. Let's discuss how we can bring your ideas
                to life!
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </a>
                <a href="/projects" className="btn btn-secondary">
                  <i className="fas fa-eye"></i>
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default About;
