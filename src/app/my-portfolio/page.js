"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./utils/ThemeContext";
import "./styles/Portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      setLoading(true);
      // This would be your actual projects data
      const projectsData = [
        {
          id: 1,
          title: "E-Commerce Platform",
          description:
            "Full-stack e-commerce solution with React, Node.js, and MongoDB.",
          image: "/images/project1.jpg",
          tags: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "fullstack",
          featured: true,
          liveUrl: "https://demo.com",
          githubUrl: "https://github.com/yourusername/project1",
          stars: 45,
        },
        // Add more projects...
      ];

      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setLoading(false);
    };

    fetchProjects();
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
                {filteredProjects.map((project) => (
                  <div key={project.id} className="project-card">
                    {project.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="overlay-btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt"></i>
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          className="overlay-btn btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                          Code
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="project-stats">
                        <div className="project-links">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="project-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-external-link-alt"></i>
                              Live
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github"></i>
                            Code
                          </a>
                        </div>
                        <div className="project-stat">
                          <i className="fas fa-star"></i>
                          {project.stars}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default Portfolio;
