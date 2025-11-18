"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../my-portfolio/components/Navbar";
import { ThemeProvider } from "../my-portfolio/utils/ThemeContext";
import "../my-portfolio/styles/Home.css";
import "../my-portfolio/styles/resume.css";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const personalInfo = {
    name: "Abdullahi H Mu'az",
    title: "Full-Stack Developer || Web3 Developer ||  Blockchain Enthusiast",
    email: "muazdevy@gmail.com",
    phone: "+234-814-852-5922",
    location: "Katsina, Nigeria",
    linkedin: "https://linkedin.com/in/muazdevy",
    github: "https://github.com/abdullahikhalilmuaz",
    twitter: "https://x.com/AzDevy964333",
    website: "https://abdullahikhalilmuaz.com",
  };

  const experience = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "Dignity Technology NG",
      location: "Remote",
      duration: "2021 - 2023",
      description: [
        "Created pixel-perfect responsive websites from design mockups",
        "Optimized web performance achieving 95+ Lighthouse scores",
        "Implemented accessibility standards",
        "Improved SEO rating and speed",
        "Worked closely with designers to ensure design consistency",
        "Ticketing App Rated 85% by developer and team lead",
      ],
      technologies: ["React", "Sass", "Next.js", "JavaScript", "HTML5", "CSS3"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "National Certificat of Education",
      institution: "Federal College of Education Katsina",
      location: "Katsina, Nigeria",
      duration: "2021 - 2024",
      gpa: "4.0",
      achievements: [
        "Choosed to developed the National full-stack Tertiary Institutions journal website",
        "Member of National Association of Computer Science (NACOSS)",
        "Best Final Year Project Award",
      ],
    },
    {
      id: 2,
      degree: "Blockchain Development Certification",
      institution: "DApp University || Coursera || GeeksForGeeks",
      location: "Online",
      duration: "2024",
      achievements: [
        "Completed Ethereum Developer Bootcamp",
        "Built 3 DApp applications",
        "Smart Contract Security Specialization",
      ],
    },
  ];

  const skills = {
    frontend: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript/TypeScript", level: 70 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React Native", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 75 },
      { name: "RESTful APIs", level: 92 },
    ],
    database: [
      { name: "MongoDB", level: 88 },
    ],
    blockchain: [
      { name: "Solidity", level: 80 },
      { name: "Web3.js", level: 70 },
      { name: "Ethereum", level: 88 },
      { name: "Ether.js", level: 70 },
      { name: "Smart Contracts", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 75 },
      { name: "AWS", level: 75 },
      { name: "VS Code", level: 95 },
    ],
  };

  const achievements = [
    {
      id: 1,
      title: "Contributor",
      organization: "Open Source Community",
      year: "2024",
      description: "Contributed to 3+ open source projects with 15+ stars",
    },
    {
      id: 2,
      title: "Hackathon Winner",
      organization: "DevFest Nigeria",
      year: "2023",
      description: "1st place in blockchain category for DeFi lending platform",
    },
  ];

  const sections = [
    { key: "experience", label: "Experience", icon: "fas fa-briefcase" },
    { key: "education", label: "Education", icon: "fas fa-graduation-cap" },
    { key: "skills", label: "Skills", icon: "fas fa-code" },
    { key: "achievements", label: "Achievements", icon: "fas fa-trophy" },
  ];

  const downloadResume = () => {
    window.print()
    const link = document.createElement("a");
    link.href = "/resume-abdullahi-muaz.pdf";
    link.download = "Abdullahi_Muaz_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderSkillBar = (skill) => (
    <div key={skill.name} className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <ThemeProvider>
      <Head>
        <title>Resume - Abdullahi H Mu'az | Full-Stack Developer</title>
        <meta
          name="description"
          content="Professional resume of Abdullahi H Mu'az - Full-Stack Developer with expertise in React, Node.js, and Blockchain development."
        />
        <meta
          name="keywords"
          content="resume, cv, full-stack developer, React developer, Node.js, blockchain developer"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Resume - Abdullahi H Mu'az | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Professional resume showcasing full-stack development expertise and blockchain experience."
        />
        <meta property="og:type" content="website" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              email: personalInfo.email,
              url: personalInfo.website,
              sameAs: [
                personalInfo.linkedin,
                personalInfo.github,
                personalInfo.twitter,
              ],
            }),
          }}
        />
      </Head>

      <div className="resume-page">
        <Navbar />

        {/* Header */}
        <section className="resume-header">
          <div className="container">
            <div className="resume-header-content">
              <div className="resume-intro">
                <h1 className="resume-name">{personalInfo.name}</h1>
                <h2 className="resume-title">{personalInfo.title}</h2>
                <p className="resume-description">
                  Passionate full-stack developer with 4+ years of experience
                  building scalable web applications and blockchain solutions.
                  Expert in modern JavaScript frameworks and distributed systems
                  architecture.
                </p>

                <div className="resume-contact">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href={`mailto:${personalInfo.email}`}>
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-globe"></i>
                    <a
                      href={personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {personalInfo.website}
                    </a>
                  </div>
                </div>

                <div className="resume-actions">
                  <button onClick={downloadResume} className="btn btn-primary">
                    <i className="fas fa-download"></i>
                    Download Resume
                  </button>
                  <a href="/contact" className="btn btn-secondary">
                    <i className="fas fa-envelope"></i>
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="resume-avatar">
                <img src="/upload/journal.png" alt={personalInfo.name} />
                <div className="avatar-social">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="resume-navigation">
          <div className="container">
            <div className="resume-tabs">
              {sections.map((section) => (
                <button
                  key={section.key}
                  className={`resume-tab ${
                    activeSection === section.key ? "active" : ""
                  }`}
                  onClick={() => setActiveSection(section.key)}
                >
                  <i className={section.icon}></i>
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="resume-content">
          <div className="container">
            {/* Experience */}
            {activeSection === "experience" && (
              <div className="resume-section experience-section">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline">
                  {experience.map((job) => (
                    <div key={job.id} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="job-header">
                          <h3 className="job-position">{job.position}</h3>
                          <div className="job-meta">
                            <span className="job-company">{job.company}</span>
                            <span className="job-location">{job.location}</span>
                            <span className="job-duration">{job.duration}</span>
                          </div>
                        </div>
                        <ul className="job-description">
                          {job.description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <div className="job-technologies">
                          {job.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {activeSection === "education" && (
              <div className="resume-section education-section">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="education-grid">
                  {education.map((edu) => (
                    <div key={edu.id} className="education-card">
                      <div className="education-header">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <div className="education-meta">
                          <span className="education-institution">
                            {edu.institution}
                          </span>
                          <span className="education-location">
                            {edu.location}
                          </span>
                          <span className="education-duration">
                            {edu.duration}
                          </span>
                        </div>
                        {edu.gpa && (
                          <div className="education-gpa">GPA: {edu.gpa}</div>
                        )}
                      </div>
                      {edu.achievements && (
                        <ul className="education-achievements">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {activeSection === "skills" && (
              <div className="resume-section skills-section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3 className="category-title">
                      <i className="fab fa-react"></i>
                      Frontend Development
                    </h3>
                    <div className="skills-list">
                      {skills.frontend.map(renderSkillBar)}
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3 className="category-title">
                      <i className="fas fa-server"></i>
                      Backend Development
                    </h3>
                    <div className="skills-list">
                      {skills.backend.map(renderSkillBar)}
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3 className="category-title">
                      <i className="fas fa-database"></i>
                      Database & Storage
                    </h3>
                    <div className="skills-list">
                      {skills.database.map(renderSkillBar)}
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3 className="category-title">
                      <i className="fab fa-bitcoin"></i>
                      Blockchain Development
                    </h3>
                    <div className="skills-list">
                      {skills.blockchain.map(renderSkillBar)}
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3 className="category-title">
                      <i className="fas fa-tools"></i>
                      Tools & Technologies
                    </h3>
                    <div className="skills-list">
                      {skills.tools.map(renderSkillBar)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements */}
            {activeSection === "achievements" && (
              <div className="resume-section achievements-section">
                <h2 className="section-title">Achievements & Recognition</h2>
                <div className="achievements-grid">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="achievement-card">
                      <div className="achievement-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="achievement-content">
                        <h3 className="achievement-title">
                          {achievement.title}
                        </h3>
                        <div className="achievement-meta">
                          <span className="achievement-organization">
                            {achievement.organization}
                          </span>
                          <span className="achievement-year">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="achievement-description">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Resume;
