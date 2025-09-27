"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../my-portfolio/components/Navbar";
import "../my-portfolio/styles/Home.css";
import { ThemeProvider } from "../my-portfolio/utils/ThemeContext";

import projectImage from "../my-portfolio/public/upload/project.png"; // Make sure this path is correct
import mainprojectimage from "../my-portfolio/public/upload/journal.png";
import project1 from "../my-portfolio/public/upload/project1.png";
import TixLite from "../my-portfolio/public/upload/TixLite.png";

// Import the required icons
import { FaHashtag, FaGithub, FaFile } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import "../my-portfolio/styles/Portfolio.css";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Library Circulation System",
      description:
        "A web based Full Stack Library Circulation and Management System, featuring all traditional library management system, converting all traditional library features into software based. Responsive Design, Eye catching designs, and fully functional.",
      hashtags: ["LibraryCirculationSystem", "LibraryManagementSystem"],
      githubLink:
        "https://github.com/abdullahikhalilmuaz/library-circulation-system-client",
      hostedLink: "https://library-circulation-system.onrender.com/",
      comments: [],
      image: projectImage,
      category: "fullstack", // Added category for filtering
      featured: true, // Added featured property
      stars: 45, // Added stars property
    },
    {
      id: 2,
      title: "TixLite",
      description:
        "A fully fledged ticketing app, featuring real-time events, Admin ticket approval, QR-Codes, and event CRUD",
      hashtags: [
        "TicketingApp",
        "TicketApp",
        "MernStack",
        "SinglePageApplication",
      ],
      githubLink: "https://github.com/abdullahikhalilmuaz/ticket/",
      hostedLink: "https://ticket-s1i5.onrender.com/",
      documentation_link: "https://tixlite.surge.sh/",
      comments: [],
      image: TixLite,
      category: "fullstack",
      featured: true,
      stars: 32,
    },
    {
      id: 3,
      title: "Tertiaty Institutions Journal Websites",
      description:
        "A full stack unified digital hub for journals across al tertiary insitutions of Nigeria ",
      hashtags: [
        "JournalsFullStackWebsite",
        "TertiaryInstitutionsJournalWebsite",
      ],
      githubLink: "https://github.com/abdullahikhalilmuaz/journals-client/",
      hostedLink: "https://journals-dqsh.onrender.com/",
      comments: [],
      image: mainprojectimage,
      category: "fullstack",
      featured: true,
      stars: 78,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(false); // Set to false since we have local data

  useEffect(() => {
    // Since we're using local data, we don't need to fetch from an API
    // But keeping the structure for consistency
    const initializeProjects = async () => {
      setLoading(true);
      // Use the local projects data we already have
      setFilteredProjects(projects);
      setLoading(false);
    };

    initializeProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "backend", label: "Backend" },
    { key: "mobile", label: "Mobile" },
  ];

  return (
    <ThemeProvider>
      <Head>
        <title>Portfolio - Your Name | Full-Stack Developer Projects</title>
        <meta
          name="description"
          content="Explore my portfolio of full-stack development projects featuring React, Node.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="portfolio, full-stack projects, React projects, Node.js, web development"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Portfolio - Your Name | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio of full-stack development projects featuring modern web technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourname.com/portfolio" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Portfolio - Your Name",
              description:
                "Portfolio showcasing full-stack development projects",
              url: "https://yourname.com/portfolio",
              author: {
                "@type": "Person",
                name: "Your Name",
                jobTitle: "Full-Stack Developer",
              },
            }),
          }}
        />
      </Head>

      <div className="portfolio-page">
        <Navbar />

        <section className="portfolio-header">
          <div className="container">
            <h1 className="portfolio-title">My Portfolio</h1>
            <p className="portfolio-subtitle">
              A collection of projects showcasing my full-stack development
              skills, from responsive web applications to scalable backend
              systems.
            </p>
          </div>
        </section>

        <section className="filter-section">
          <div className="container">
            <div className="filter-tabs">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-tab ${
                    activeFilter === filter.key ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="project-count">
              Showing {filteredProjects.length} projects
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="container">
            {loading ? (
              <div className="loading">
                <i className="fas fa-spinner"></i>
                Loading projects...
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {" "}
                {/* Changed from pf-grid to projects-grid */}
                {filteredProjects.map((project) => {
                  /* Changed from projects to filteredProjects */
                  const imageUrl = project.image;
                  return (
                    <div key={project.id} className="project-card">
                      {" "}
                      {/* Changed from pf-card to project-card */}
                      {project.featured && (
                        <div className="featured-badge">Featured</div>
                      )}
                      <div className="project-image">
                        {" "}
                        {/* Changed from pf-img-container to project-image */}
                        {imageUrl ? (
                          <img
                            src={imageUrl.src || imageUrl} // Handle both imported images and string URLs
                            alt={project.title || "Project screenshot"}
                            className="project-img" // Changed from pf-img to project-img (make sure this class exists in CSS)
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "";
                              e.target.parentElement.innerHTML = `
                                <div class="project-image-placeholder"> {/* Updated class name */}
                                  <span>Image not available</span>
                                </div>
                              `;
                            }}
                          />
                        ) : (
                          <div className="project-image-placeholder">
                            {" "}
                            {/* Updated class name */}
                            <span>No image provided</span>
                          </div>
                        )}
                        <div className="project-overlay">
                          {project.hostedLink && (
                            <a
                              href={project.hostedLink}
                              className="overlay-btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FiExternalLink /> Live Demo
                            </a>
                          )}
                          <a
                            href={project.githubLink}
                            className="overlay-btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub /> Code
                          </a>
                        </div>
                      </div>
                      <div className="project-content">
                        {" "}
                        {/* Changed from pf-content to project-content */}
                        <h3 className="project-title">
                          {" "}
                          {/* Changed from pf-card-title to project-title */}
                          {project.title || "Untitled Project"}
                        </h3>
                        <p className="project-description">
                          {project.description}
                        </p>{" "}
                        {/* Updated class name */}
                        {project.hashtags && project.hashtags.length > 0 && (
                          <div className="project-tags">
                            {" "}
                            {/* Changed from pf-tags to project-tags */}
                            {project.hashtags.map((tag, index) => (
                              <span key={index} className="project-tag">
                                {" "}
                                {/* Changed from pf-tag to project-tag */}
                                <FaHashtag /> {tag.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="project-stats">
                          {" "}
                          {/* Added project stats */}
                          <div className="project-links">
                            {project.hostedLink && (
                              <a
                                href={project.hostedLink}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiExternalLink /> Live
                              </a>
                            )}
                            <a
                              href={project.githubLink}
                              className="project-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub /> Code
                            </a>
                            {project.documentation_link && (
                              <a
                                href={project.documentation_link}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaFile /> Docs
                              </a>
                            )}
                          </div>
                          <div className="project-stat">
                            <i className="fas fa-star"></i>
                            {project.stars}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <i className="fas fa-search"></i>
                <h3>No Projects Found</h3>
                <p>
                  Try selecting a different category or check back later for new
                  projects.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Projects;
